import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import IproSelect from "@/components/core/IproSelect";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { IssueModel } from "@/lib/models/issue.model";
import { getProblemListApi } from "@/lib/services/api/problem.service";

type ProblemSelectProps = {
  index?: number;
  issue?: Partial<IssueModel>;
};

const ProblemSelect = ({ index, issue }: ProblemSelectProps) => {
  const [problemOptions, setProblemOptions] = useState<ComboboxData>([]);
  const [problemItem, setProblemItem] = useState<ComboboxItem>();

  const getProblemList = async () => {
    try {
      const result = await getProblemListApi();
      setProblemOptions(
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

  const onProblemChange = (value: string | null) => {
    const [selectedProblem] = problemOptions.filter((item) => (item as unknown as ComboboxItem).value === value);
    if (value) setProblemItem(selectedProblem as ComboboxItem);
  };

  useEffect(() => {
    getProblemList();
  }, []);

  useEffect(() => {
    if (issue && problemOptions.length && issue?.brand_id) {
      onProblemChange(String(issue.brand_id));
    }
  }, [issue, problemOptions]);

  return (
    <IproSelect
      size="md"
      searchable
      label="Issue Name"
      name={`issues[${index}][problem_id]`}
      data={problemOptions}
      value={problemItem?.value as string & string[]}
      onOptionSubmit={onProblemChange}
    />
  );
};

export default ProblemSelect;
