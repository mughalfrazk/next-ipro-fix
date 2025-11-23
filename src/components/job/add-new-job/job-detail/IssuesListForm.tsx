"use client";

import { useEffect, useState } from "react";
import { Grid, GridCol, Group, Radio, Title } from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import { ProblemTypeListModel } from "@/lib/models/problem-type.model";
import { getProblemTypeListApi } from "@/lib/services/api/problem-type.service";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { JobModel } from "@/lib/models/job.model";
import IssueFormItem from "./IssueFormItem";
import { JobStatusTypes } from "@/types/job_status.types";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { removeIssueFromJobApi } from "@/lib/services/api/job.service";

type IssuesListFormProps = {
  job?: JobModel;
} & FieldErrorPropsType;

type IssueFormType = {
  id: string;
  brand_id: number;
  model_id: number;
  problem_id: number;
  quantity: number;
  charges: number;
  total: number;
};

const IssuesListForm = ({ job, getFieldErrorProps }: IssuesListFormProps) => {
  const [problemTypes, setProblemTypes] = useState<ProblemTypeListModel>([]);
  const [issues, setIssues] = useState<IssueFormType[]>([]);

  const getProblemTypeList = async () => {
    const result = await getProblemTypeListApi();
    setProblemTypes(result);
  };

  const removeIssueFromJob = async (issue: IssueFormType, index: number) => {
    if (!job?.id) {
      setIssues(issues.filter((_, j) => j !== index));
      return;
    }

    try {
      await removeIssueFromJobApi(job.id, issue.id);
      setIssues(issues.filter((_, j) => j !== index));
    } catch (e) {
      const error = getFormattedError(e);
      showErrorNotification(error?.errors?.formErrors?.[0]);
    }
  };

  useEffect(() => {
    getProblemTypeList();
  }, []);

  useEffect(() => {
    if (!!job?.issues?.length) {
      setIssues([
        ...job.issues.map(({ id, brand_id, model_id, problem_id, quantity, charges, total }) => ({
          id,
          brand_id,
          model_id,
          problem_id,
          quantity,
          charges,
          total
        }))
      ]);
    }
  }, [job]);

  const isPermitted = () => {
    if (!job) return true;
    if (job.job_status.name === JobStatusTypes.DEVICE_RECEIVED) return true;
    if (job.job_status.name === JobStatusTypes.IN_PROGRESS) return true;
    return false;
  };

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
        <IssueFormItem
          key={idx}
          issue={issue}
          idx={idx}
          job={job}
          removeIssue={() => removeIssueFromJob(issue, idx)}
        />
      ))}
      {isPermitted() && (
        <GridCol span={12}>
          <Group
            justify="center"
            w={"100%"}
            variant="subtle"
            py={14}
            opacity={0.3}
            style={{
              border: "2px dashed var(--mantine-color-dark-1)",
              borderRadius: "var(--mantine-radius-default)",
              cursor: "pointer"
            }}
            onClick={() =>
              setIssues([
                ...issues,
                {
                  id: "new",
                  brand_id: 0,
                  model_id: 0,
                  problem_id: 0,
                  quantity: 0,
                  charges: 0,
                  total: 0
                }
              ])
            }
          >
            <IconSquareRoundedPlusFilled /> Add new task in the job
          </Group>
        </GridCol>
      )}
    </Grid>
  );
};

export default IssuesListForm;
