'use client'

import { useEffect, useState } from "react";
import { Grid, GridCol, Group, Radio, Title } from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import { ProblemTypeListModel } from "@/lib/models/problem-type.model";
import { getProblemTypeListApi } from "@/lib/services/api/problem-type.service";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { JobModel } from "@/lib/models/job.model";
import IssueItem from "./IssueItem";

type IssuesListFormProps = {
  job?: JobModel;
} & FieldErrorPropsType;

const IssuesListForm = ({ job, getFieldErrorProps }: IssuesListFormProps) => {
  const [problemTypes, setProblemTypes] = useState<ProblemTypeListModel>([]);
  const [issues, setIssues] = useState([
    {
      brand_id: 0,
      model: "",
      name: "",
      quantity: 0,
      charges: 0,
      total: 0,
    },
  ])

  const getProblemTypeList = async () => {
    const result = await getProblemTypeListApi();
    setProblemTypes(result);
  };

  useEffect(() => {
    getProblemTypeList();
  }, []);

  useEffect(() => {
    if (!!job?.issues?.length) {
      setIssues([
        ...job.issues.map(
          ({ brand_id, model, name, quantity, charges, total }) => ({
            brand_id,
            model,
            name,
            quantity,
            charges,
            total,
          })
        ),
      ]);
    }
  }, [job]);

  return (
    <Grid>
      <GridCol span={12}>
        <Group mt={10} mb={20}>
          <Title order={5}>Problem Type:</Title>
          {problemTypes.map((item) => (
            <Radio
              key={item.name}
              name="problem_type_id"
              color="var(--mantine-color-primary-6)"
              label={item.name}
              value={item.id}
              defaultChecked={item.id === job?.problem_type?.id}
              {...getFieldErrorProps("problem_type_id")}
            />
          ))}
        </Group>
      </GridCol>
      {issues.map((issue, idx) => (
        <IssueItem
          key={idx}
          issue={issue}
          idx={idx}
          removeIssue={() => setIssues(issues.filter((_, j) => j !== idx))}
        />
      ))}
      <GridCol span={12}>
        <Group
          justify="center"
          w={'100%'}
          variant="subtle"
          py={14}
          opacity={0.3}
          style={{
            border: '2px dashed var(--mantine-color-dark-1)',
            borderRadius: 'var(--mantine-radius-default)',
            cursor: 'pointer',
          }}
          onClick={() =>
            setIssues([
              ...issues,
              {
                brand_id: 0,
                model: "",
                name: "",
                quantity: 0,
                charges: 0,
                total: 0,
              },
            ])
          }
        >
          <IconSquareRoundedPlusFilled /> Add new task in the job
        </Group>
      </GridCol>
    </Grid>
  )
}

export default IssuesListForm
