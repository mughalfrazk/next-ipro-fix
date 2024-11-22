import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import { getModelListApi } from "@/lib/services/api/model.service";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { IssueModel } from "@/lib/models/issue.model";
import IproSelect from "@/components/core/IproSelect";

type ModelSelectProps = {
  index?: number;
  issue?: Partial<IssueModel>;
};

const ModelSelect = ({ index, issue }: ModelSelectProps) => {
  const [modelOptions, setModelOptions] = useState<ComboboxData>([]);
  const [modelItem, setModelItem] = useState<ComboboxItem>();

  const getBrandList = async () => {
    try {
      const result = await getModelListApi();
      setModelOptions(
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

  const onModelChange = (value: string | null) => {
    const [selectedModel] = modelOptions.filter(
      (item) => (item as unknown as ComboboxItem).value === value
    );
    if (value) setModelItem(selectedModel as ComboboxItem);
  };

  useEffect(() => {
    getBrandList();
  }, []);

  useEffect(() => {
    if (issue && modelOptions.length && issue?.model_id) {
      onModelChange(String(issue.model_id));
    }
  }, [issue, modelOptions]);

  return (
    <IproSelect
      size="md"
      searchable
      label="Model Selection"
      name={`issues[${index}][model_id]`}
      data={modelOptions}
      value={modelItem?.value as string & string[]}
      onOptionSubmit={onModelChange}
    />
  );
};

export default ModelSelect;
