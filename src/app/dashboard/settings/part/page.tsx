import PartList from "@/components/settings/part/PartList";
import { getPartListApi } from "@/lib/services/api/part.service";

const PartPage = async () => {
  const result = await getPartListApi();
  return <PartList parts={result} />;
};

export default PartPage;
