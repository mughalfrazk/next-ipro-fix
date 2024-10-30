"use client";

import { useEffect, useState } from "react";
import {
  CloseButton,
  ComboboxData,
  Grid,
  GridCol,
  Group,
  Radio,
  Title,
} from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import IproSelect from "@/components/core/IproSelect";
import IproTextInput from "@/components/core/IproTextInput";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import { ProblemTypeListModel } from "@/lib/models/problem-type.model";
import { getProblemTypeListApi } from "@/lib/services/api/problem-type.service";
import { getBrandListApi } from "@/lib/services/api/brand.service";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";

const IssuesListForm = ({ getFieldErrorProps }: FieldErrorPropsType) => {
  const { lightDark } = useMantineColorScheme();
  const [problemTypes, setProblemTypes] = useState<ProblemTypeListModel>([]);
  const [brandOptions, setBrandOptions] = useState<ComboboxData>([]);
  const [issues, setIssues] = useState([
    {
      brand_id: "",
      model_id: "",
      company_name: "",
      quantity: null,
      phone: "null",
      total: "",
    },
  ]);

  const getProblemTypeList = async () => {
    const result = await getProblemTypeListApi();
    setProblemTypes(result);
  };

  const getBrandList = async () => {
    const result = await getBrandListApi();
    setBrandOptions(
      result.map((item) => ({
        label: item.name,
        value: String(item.id),
      }))
    );
  };

  useEffect(() => {
    getProblemTypeList();
    getBrandList();
  }, []);

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
              {...getFieldErrorProps("problem_type_id")}
            />
          ))}
        </Group>
      </GridCol>
      {issues.map((_, idx) => (
        <GridCol key={idx} span={12}>
          <Grid>
            {idx !== 0 && (
              <GridCol pt={30} pb={20}>
                <Group
                  justify="space-between"
                  bg={lightDark(
                    "var(--mantine-color-gray-2)",
                    "var(--mantine-color-dark-7)"
                  )}
                  px={20}
                  py={10}
                  style={{ borderRadius: "0.5rem" }}
                >
                  <Title order={5}>Extra Job {idx}</Title>
                  <CloseButton
                    onClick={() =>
                      setIssues(issues.filter((_, j) => j !== idx))
                    }
                  />
                </Group>
              </GridCol>
            )}
            <GridCol span={4}>
              <IproSelect
                size="md"
                label="Brand Name"
                name={`issues[${idx}][brand_id]`}
                data={brandOptions}
              />
            </GridCol>
            <GridCol span={4}>
              <IproTextInput
                name={`issues[${idx}][model]`}
                label="Model Selection"
              />
            </GridCol>
            <GridCol span={4}>
              <IproTextInput name={`issues[${idx}][name]`} label="Issue" />
            </GridCol>
            <GridCol span={4}>
              <IproTextInput
                type="number"
                name={`issues[${idx}][quantity]`}
                label="Quantity"
              />
            </GridCol>
            <GridCol span={4}>
              <IproTextInput
                type="number"
                name={`issues[${idx}][charges]`}
                label="Charges"
              />
            </GridCol>
            <GridCol span={4}>
              <IproTextInput
                type="number"
                name={`issues[${idx}][total]`}
                label="Total"
              />
            </GridCol>
          </Grid>
        </GridCol>
      ))}
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
            cursor: "pointer",
          }}
          onClick={() =>
            setIssues([
              ...issues,
              {
                brand_id: "",
                model_id: "",
                company_name: "",
                quantity: null,
                phone: "null",
                total: "",
              },
            ])
          }
        >
          <IconSquareRoundedPlusFilled /> Add new task in the job
        </Group>
      </GridCol>
    </Grid>
  );
};

export default IssuesListForm;
