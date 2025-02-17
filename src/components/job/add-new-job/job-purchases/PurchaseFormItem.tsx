import { CloseButton, Grid, GridCol, Group, Title } from "@mantine/core";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";

import IproTextInput from "@/components/core/IproTextInput";
import CreateUpdateSelectInput from "@/components/common/CreateUpdateSelectInput";
import { PurchaseModel } from "@/lib/models/purchase.model";
import { getModelListApi } from "@/lib/services/api/model.service";
import { getSupplierListApi } from "@/lib/services/api/supplier.service";
import { getPartListApi } from "@/lib/services/api/part.service";
import { useInputState } from "@mantine/hooks";
import { useEffect } from "react";

const PurchaseFormItem = ({
  idx,
  purchase,
  isPermitted,
  removePurchase
}: {
  idx: number;
  purchase: Partial<PurchaseModel>;
  isPermitted: () => void;
  removePurchase: () => void;
}) => {
  const { lightDark } = useMantineColorScheme();
  const [quantity, setQuantity] = useInputState<number>(0);
  const [charges, setCharges] = useInputState<number>(0);
  const [total, setTotal] = useInputState<number>(0);

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

  useEffect(() => setTotal(charges * quantity), [charges, quantity]);

  useEffect(() => {
    if (!!purchase) {
      setQuantity(purchase.quantity);
      setCharges(purchase.charges);
      setTotal(purchase.total);
    }
  }, [purchase]);
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
            asyncDataMethod={getSupplierList}
            searchable
          />
        </GridCol>
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Model Selection"
            name={`purchases[${idx}][model_id]`}
            inputDefaultValue={purchase.model_id}
            asyncDataMethod={getModelList}
            searchable
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Quantity"
            name={`purchases[${idx}][quantity]`}
            value={quantity}
            onChange={setQuantity}
          />
        </GridCol>
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Part"
            name={`purchases[${idx}][part_id]`}
            inputDefaultValue={purchase.part_id}
            asyncDataMethod={getPartList}
            searchable
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Charges"
            name={`purchases[${idx}][charges]`}
            value={charges}
            onChange={setCharges}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Total"
            name={`purchases[${idx}][total]`}
            value={total}
            onChange={setTotal}
            readOnly
          />
        </GridCol>
      </Grid>
    </GridCol>
  );
};

export default PurchaseFormItem;
