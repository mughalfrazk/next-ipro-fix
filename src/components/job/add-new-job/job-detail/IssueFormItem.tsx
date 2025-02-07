import { useInputState } from "@mantine/hooks";
import {
  Button,
  CloseButton,
  ComboboxData,
  ComboboxItem,
  Grid,
  GridCol,
  Group,
  Title
} from "@mantine/core";

import CreateUpdateSelectInput from "@/components/common/CreateUpdateSelectInput";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import { getProblemListApi } from "@/lib/services/api/problem.service";
import { getBrandListApi } from "@/lib/services/api/brand.service";
import { getModelListByBrandIdApi } from "@/lib/services/api/model.service";
import { IssueModel } from "@/lib/models/issue.model";
import IproTextInput from "@/components/core/IproTextInput";
import { useEffect, useState } from "react";

const IssueFormItem = ({
  issue,
  idx,
  removeIssue
}: {
  issue: Partial<IssueModel>;
  idx: number;
  removeIssue: () => void;
}) => {
  const { lightDark } = useMantineColorScheme();
  const [quantity, setQuantity] = useInputState<number>(0);
  const [charges, setCharges] = useInputState<number>(0);
  const [total, setTotal] = useInputState<number>(0);

  const [selectedBrand, setSelectedBrand] = useState<ComboboxItem>();
  const [clearModel, setClearModel] = useState<boolean>(false);
  const [updatedModelList, setUpdatedModelList] = useState<ComboboxData>([]);

  const getBrandList = async () => {
    const result = await getBrandListApi();
    return result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));
  };

  const getModelList = async () => {
    if (!selectedBrand) return [];

    const result = await getModelListByBrandIdApi(selectedBrand.value);
    const comboboxData = result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));

    setUpdatedModelList(comboboxData);
  };

  const getProblemList = async () => {
    const result = await getProblemListApi();
    return result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));
  };

  useEffect(() => setTotal(charges * quantity), [charges, quantity]);

  useEffect(() => {
    if (!!issue) {
      setQuantity(issue.quantity);
      setCharges(issue.charges);
      setTotal(issue.total);
    }
  }, [issue]);

  useEffect(() => {
    setClearModel(true);
    getModelList();
  }, [selectedBrand]);

  return (
    <GridCol key={idx} span={12}>
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
              <Title order={5}>Extra Job {idx}</Title>
              <CloseButton onClick={removeIssue} />
            </Group>
          </GridCol>
        )}
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Brand Name"
            name={`issues[${idx}][brand_id]`}
            inputDefaultValue={issue.brand_id}
            getDataFromApiAndSetOption={getBrandList}
            setSelectedValue={setSelectedBrand}
            searchable
          />
        </GridCol>
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Model Selection"
            name={`issues[${idx}][model_id]`}
            inputDefaultValue={issue.model_id}
            onValueClear={clearModel}
            syncData={updatedModelList}
            setOnValueClear={setClearModel}
            searchable
          />
        </GridCol>
        <GridCol span={4}>
          <CreateUpdateSelectInput
            label="Issue Name"
            name={`issues[${idx}][problem_id]`}
            inputDefaultValue={issue.problem_id}
            getDataFromApiAndSetOption={getProblemList}
            searchable
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Quantity"
            name={`issues[${idx}][quantity]`}
            value={quantity}
            onChange={setQuantity}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Charges"
            name={`issues[${idx}][charges]`}
            value={charges}
            onChange={setCharges}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            type="number"
            label="Total"
            name={`issues[${idx}][total]`}
            value={total}
            onChange={setTotal}
            readOnly
          />
        </GridCol>
        <IproTextInput
          type="text"
          name={`issues[${idx}][id]`}
          defaultValue={issue.id}
          display={"none"}
        />
      </Grid>
    </GridCol>
  );
};

export default IssueFormItem;
