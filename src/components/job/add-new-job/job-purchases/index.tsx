"use client";

import { useEffect, useState } from "react";
import { Card, Divider, Grid, GridCol, Group } from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import { createJobPurchaseAction } from "@/lib/actions/purchase.action";
import { PurchaseListModel } from "@/lib/models/purchase.model";
import { useFormAction } from "@/hooks/use-form-action";
import IproTextInput from "@/components/core/IproTextInput";
import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import PurchaseFormItem from "./PurchaseFormItem";

const JobPurchasesTab = ({
  jobId,
  purchases: purchasesData
}: {
  jobId: string;
  purchases: PurchaseListModel;
}) => {
  const { formAction } = useFormAction(createJobPurchaseAction, {});
  const [purchases, setPurchases] = useState([
    {
      supplier_id: "",
      model_id: 0,
      part_id: 0,
      quantity: 0,
      total: 0
    }
  ]);

  useEffect(() => {
    if (purchasesData.length) {
      setPurchases([
        ...purchasesData.map(({ supplier_id, model_id, part_id, quantity, total }) => ({
          supplier_id,
          model_id,
          part_id,
          quantity,
          total
        }))
      ]);
    }
  }, [purchasesData]);

  return (
    <form action={formAction}>
      <Card pb={100}>
        <Heading
          title="Job Purchase Details"
          description="Add new Purchase for this job by clicking + icon"
        />
        <Divider mt={10} mb={20} />
        <IproTextInput name="job_id" defaultValue={jobId} style={{ display: "none" }} />
        <Grid>
          {purchases.map((item, idx) => (
            <PurchaseFormItem
              key={idx}
              purchase={item}
              idx={idx}
              removePurchase={() => setPurchases(purchases.filter((_, j) => j !== idx))}
            />
          ))}
          {!purchases.length && (
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
                  setPurchases([
                    ...purchases,
                    {
                      supplier_id: "",
                      model_id: 0,
                      part_id: 0,
                      quantity: 0,
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
        {!purchasesData.length && (
          <Group justify="flex-end" mt={20}>
            <IproButton variant="outline">Cancal</IproButton>
            <IproButton isSubmit={true}>Save Purchase</IproButton>
          </Group>
        )}
      </Card>
    </form>
  );
};

export default JobPurchasesTab;
