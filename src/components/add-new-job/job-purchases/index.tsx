"use client";

import { useState } from "react";
import {
  Card,
  CloseButton,
  Divider,
  Grid,
  GridCol,
  Group,
  Title,
} from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import IproTextInput from "../../core/IproTextInput";
import IproSelect from "../../core/IproSelect";
import Heading from "../../common/Heading";
import { useFormAction } from "@/hooks/use-form-action";
import { createJobPurchaseAction } from "@/lib/actions/job.action";
import IproButton from "@/components/core/IproButton";
import { PurchaseListModel } from "@/lib/models/purchase.model";

const JobPurchasesTab = ({ purchases: purchasesData }: { purchases: PurchaseListModel | undefined | null }) => {
  const { formAction, getFieldErrorProps } = useFormAction(createJobPurchaseAction, {});
  const { lightDark } = useMantineColorScheme();
  const [purchases, setPurchases] = useState([
    {
      brand_id: "",
      model_id: "",
      quantity: null,
      parts: "null",
      total: "",
    },
  ]);
  return (
    <form action={formAction}>
      <Card pb={100}>
        <Heading
          title="Job Purchase Details"
          description="Add new Purchase for this job by clicking + icon"
        />
        <Divider mt={10} mb={20} />
        <Grid>
          {purchases.map((_, idx) => (
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
                      <Title order={5}>Purchase {idx}</Title>
                      <CloseButton
                        onClick={() =>
                          setPurchases(purchases.filter((_, j) => j !== idx))
                        }
                      />
                    </Group>
                  </GridCol>
                )}
                <GridCol span={4}>
                  <IproSelect label="Brand Name" size="md" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="phone" label="Model Selection" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="company_name" label="Quantity" />
                </GridCol>
                <GridCol span={8}>
                  <IproTextInput name="name" label="Parts" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="phone" label="Total" />
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
                setPurchases([
                  ...purchases,
                  {
                    brand_id: "",
                    model_id: "",
                    quantity: null,
                    parts: "null",
                    total: "",
                  },
                ])
              }
            >
              <IconSquareRoundedPlusFilled /> Add new task in the job
            </Group>
          </GridCol>
        </Grid>
        <Group justify="flex-end" mt={20}>
          <IproButton variant="outline">Cancal</IproButton>
          <IproButton isSubmit={true}>Save Purchase</IproButton>
        </Group>
      </Card>
    </form>
  );
};

export default JobPurchasesTab;
