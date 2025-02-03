import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { capitalizeFirstLetter } from "@/utils/functions";
import { ComboboxData, ComboboxItem, Grid, GridCol } from "@mantine/core";
import { useEffect, useState } from "react";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { ModelModel } from "@/lib/models/model.model";
import IproSelect from "@/components/core/IproSelect";
import { getBrandListApi } from "@/lib/services/api/brand.service";

type BrandSelectProps = {
  selectedModel?: ModelModel;
} & FieldErrorPropsType;

const BrandSelect = ({ selectedModel, getFieldErrorProps }: BrandSelectProps) => {
  const [brandOptions, setBrandOptions] = useState<ComboboxData>([]);
  const [brandItem, setBrandItem] = useState<ComboboxItem>();

  const getBrandList = async () => {
    try {
      const result = await getBrandListApi();
      setBrandOptions(
        result.map((item) => ({
          label: capitalizeFirstLetter(item.name),
          value: String(item.id)
        }))
      );
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  };

  const onBrandChange = (value: string | number | null) => {
    const [selectedBrand] = brandOptions.filter(
      (item) => (item as unknown as ComboboxItem).value === value
    );
    if (value) setBrandItem(selectedBrand as ComboboxItem);
  };

  useEffect(() => {
    getBrandList();
  }, []);

  useEffect(() => {
    if (selectedModel && selectedModel.brand && brandOptions.length) {
      onBrandChange(selectedModel.brand.id);
    }
  }, [selectedModel, brandOptions]);
  return (
    <Grid>
      <GridCol>
        <IproSelect
          name="brand_id"
          label="Brand"
          data={brandOptions}
          placeholder="Select Brand"
          value={brandItem?.value as string & string[]}
          onOptionSubmit={onBrandChange}
          {...getFieldErrorProps("brand_id")}
        />
      </GridCol>
    </Grid>
  );
};

export default BrandSelect;
