import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import { getBrandListApi } from "@/lib/services/api/brand.service";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { IssueModel } from "@/lib/models/issue.model";
import IproSelect from "@/components/core/IproSelect";

type BrandSelectProps = {
  index?: number;
  issue?: Partial<IssueModel>;
};

const BrandSelect = ({ index, issue }: BrandSelectProps) => {
  const [brandOptions, setBrandOptions] = useState<ComboboxData>([]);
  const [brandItem, setBrandItem] = useState<ComboboxItem>();

  const getBrandList = async () => {
    try {
      const result = await getBrandListApi();
      setBrandOptions(
        result.map((item) => ({
          label: item.name,
          value: String(item.id)
        }))
      );
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  };

  const onBrandChange = (value: string | null) => {
    const [selectedBrand] = brandOptions.filter(
      (item) => (item as unknown as ComboboxItem).value === value
    );
    if (value) setBrandItem(selectedBrand as ComboboxItem);
  };

  useEffect(() => {
    getBrandList();
  }, []);

  useEffect(() => {
    if (issue && brandOptions.length && issue?.brand_id) {
      onBrandChange(String(issue.brand_id));
    }
  }, [issue, brandOptions]);

  return (
    <IproSelect
      size="md"
      label="Brand Name"
      name={`issues[${index}][brand_id]`}
      data={brandOptions}
      value={brandItem?.value as string & string[]}
      onOptionSubmit={onBrandChange}
    />
  );
};

export default BrandSelect;
