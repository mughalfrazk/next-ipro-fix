"use client";

import { useEffect, useState } from "react";
import { Card, Center, Divider, Grid, GridCol, Group, rem, Stack, Text } from "@mantine/core";
import { IconBoxOff, IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import { createJobPurchaseAction } from "@/lib/actions/purchase.action";
import { PurchaseListModel } from "@/lib/models/purchase.model";
import { useFormAction } from "@/hooks/use-form-action";
import IproTextInput from "@/components/core/IproTextInput";
import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import PurchaseFormItem from "./PurchaseFormItem";
import { JobModel } from "@/lib/models/job.model";
import { JobStatusTypes } from "@/types/job_status.types";
import { useProfileContext } from "@/context/profile.context";
import { RoleTypes } from "@/types/roles.types";

type PurchaseFormType = {
  supplier_id: string;
  model_id: number;
  part_id: number;
  quantity: number;
  charges: number;
  total: number;
};

const defaultPurchase: PurchaseFormType = {
  supplier_id: "",
  model_id: 0,
  part_id: 0,
  quantity: 0,
  charges: 0,
  total: 0
};

const JobPurchasesTab = ({
  job,
  purchases: purchasesData
}: {
  job: JobModel;
  purchases: PurchaseListModel;
}) => {
  const {
    data: { role }
  } = useProfileContext();
  const { formAction } = useFormAction(createJobPurchaseAction, {});
  const [purchases, setPurchases] = useState<PurchaseFormType[]>([]);

  useEffect(() => {
    if (purchasesData.length) {
      setPurchases([
        ...purchasesData.map(({ supplier_id, model_id, part_id, quantity, charges, total }) => ({
          supplier_id,
          model_id,
          part_id,
          quantity,
          charges,
          total
        }))
      ]);
    }
  }, [purchasesData]);

  const isPermitted = () => {
    if (role.name === RoleTypes.STAFF) return false;
    if (job.job_status.name === JobStatusTypes.JOB_DONE) return false;
    if (job.job_status.name === JobStatusTypes.DELIVERED) return false;
    if (job.job_status.name === JobStatusTypes.JOB_LOST) return false;
    if (purchasesData.length) return false;
    return true;
  };

  return (
    <form action={formAction}>
      <Card pb={60}>
        <Heading
          title="Job Purchase Details"
          description="Add new Purchase for this job by clicking + icon"
        />
        <Divider mt={10} mb={20} />
        <IproTextInput name="job_id" defaultValue={job.id} style={{ display: "none" }} />
        <Grid>
          {!!purchases.length ? (
            purchases.map((item, idx) => (
              <PurchaseFormItem
                key={idx}
                purchase={item}
                idx={idx}
                isPermitted={isPermitted}
                removePurchase={() => setPurchases(purchases.filter((_, j) => j !== idx))}
              />
            ))
          ) : (
            <Center opacity={0.3} w="100%" my={30}>
              <IconBoxOff style={{ width: rem(40), height: rem(40) }} />
              <Stack gap={0}>
                <Text ms={15} size="lg" lh={1}>
                  There are no purchases for this job
                </Text>
              </Stack>
            </Center>
          )}
          {!purchasesData.length && isPermitted() && (
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
                onClick={() => setPurchases([...purchases, defaultPurchase])}
              >
                <IconSquareRoundedPlusFilled /> Add new purchase in the job
              </Group>
            </GridCol>
          )}
        </Grid>
        {(!purchasesData.length || purchases) && isPermitted() && (
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
