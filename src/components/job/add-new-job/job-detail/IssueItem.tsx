import { useEffect, useState } from "react";
import { CloseButton, ComboboxData, ComboboxItem, Grid, GridCol, Group, Title } from "@mantine/core";

import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import { getBrandListApi } from "@/lib/services/api/brand.service";
import { IssueModel } from "@/lib/models/issue.model";
import IproTextInput from "@/components/core/IproTextInput";
import BrandSelect from "./BrandSelect";
import ModelSelect from "./ModelSelect";
import ProblemSelect from "./ProblemSelect";

const IssueItem = ({ issue, idx, removeIssue }: { issue: Partial<IssueModel>; idx: number; removeIssue: () => void }) => {
  const { lightDark } = useMantineColorScheme();
  const [brandOptions, setBrandOptions] = useState<ComboboxData>([]);
  const [brandItem, setBrandItem] = useState<ComboboxItem>();

  const getBrandList = async () => {
    const result = await getBrandListApi();
    setBrandOptions(
      result.map((item) => ({
        label: item.name,
        value: String(item.id)
      }))
    );
  };

  const onBrandChange = (value: string | null) => {
    const [selectedBrand] = brandOptions.filter((item) => (item as unknown as ComboboxItem).value === value);
    if (value) setBrandItem(selectedBrand as ComboboxItem);
  };

  useEffect(() => {
    if (issue && brandOptions.length) onBrandChange(String(issue.brand_id));
  }, [issue, brandOptions]);

  useEffect(() => {
    getBrandList();
  }, []);

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
          <BrandSelect index={idx} issue={issue} />
        </GridCol>
        <GridCol span={4}>
          <ModelSelect index={idx} issue={issue} />
          {/* <IproTextInput
            name={`issues[${idx}][model]`}
            defaultValue={issue.model}
            label="Model Selection"
          /> */}
        </GridCol>
        <GridCol span={4}>
          <ProblemSelect index={idx} issue={issue} />
          {/* <IproTextInput
            name={`issues[${idx}][name]`}
            defaultValue={issue.name}
            label="Issue"
          /> */}
        </GridCol>
        <GridCol span={4}>
          <IproTextInput type="number" name={`issues[${idx}][quantity]`} defaultValue={issue.quantity} label="Quantity" />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput type="number" name={`issues[${idx}][charges]`} defaultValue={issue.charges} label="Charges" />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput type="number" name={`issues[${idx}][total]`} defaultValue={issue.total} label="Total" />
        </GridCol>
      </Grid>
    </GridCol>
  );
};

export default IssueItem;
