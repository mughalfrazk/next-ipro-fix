import { CloseButton, Grid, GridCol, Group, Title } from "@mantine/core";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";

import IproTextInput from "@/components/core/IproTextInput";
import CreateUpdateSelectInput from "@/components/common/CreateUpdateSelectInput";
import { PurchaseModel } from "@/lib/models/purchase.model";
import { getModelListApi } from "@/lib/services/api/model.service";
import { getSupplierListApi } from "@/lib/services/api/supplier.service";
import { getPartListApi } from "@/lib/services/api/part.service";

const PurchaseFormItem = ({
  idx,
  purchase,
  removePurchase
}: {
  idx: number;
  purchase: Partial<PurchaseModel>;
  removePurchase: () => void;
}) => {
  const { lightDark } = useMantineColorScheme();

  const getModelList = async () => {
    const result = await getModelListApi();
    return result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));
  };

  const getSupplierList = async () => {
    const result = await getSupplierListApi();
    return result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));
  };

  const getPartList = async () => {
    const result = await getPartListApi();
    return result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));
  };

  return (
    <GridCol span={12}>
      <Grid>
        {idx !== 0 && (
          <GridCol pt={30} pb={20}>
            <Group
              justify="space-between"
              bg={lightDark("var(--mantine-color-gray-2)", "var(--mantine-color-dark-7)")}
              px={20}
              py={10}
              style={{ borderRadius: "0.5rem" }}
            >
              <Title order={5}>Purchase {idx}</Title>
              <CloseButton onClick={removePurchase} />
            </Group>
          </GridCol>
        )}
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Supplier Name"
            name={`purchases[${idx}][supplier_id]`}
            inputDefaultValue={purchase.supplier_id}
            getDataFromApiAndSetOption={getSupplierList}
          />
        </GridCol>
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Model Selection"
            name={`purchases[${idx}][model_id]`}
            inputDefaultValue={purchase.model_id}
            getDataFromApiAndSetOption={getModelList}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Quantity"
            defaultValue={purchase.quantity}
            name={`purchases[${idx}][quantity]`}
          />
        </GridCol>
        <GridCol span={8}>
          <CreateUpdateSelectInput
            label="Part"
            name={`purchases[${idx}][part_id]`}
            inputDefaultValue={purchase.part_id}
            getDataFromApiAndSetOption={getPartList}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Total"
            defaultValue={purchase.total}
            name={`purchases[${idx}][total]`}
          />
        </GridCol>
      </Grid>
    </GridCol>
  );
};

export default PurchaseFormItem;
