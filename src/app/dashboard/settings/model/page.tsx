import ModelList from "@/components/settings/model/ModelList";
import { getModelListApi } from "@/lib/services/api/model.service";

const ModelPage = async () => {
  const result = await getModelListApi()

  return <ModelList models={result} />;
};

export default ModelPage;
