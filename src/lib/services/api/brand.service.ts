import { BrandListSchema } from "@/lib/models/brand.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const BrandListDataParser = parseFactory(
  BrandListSchema,
  "BrandListDataParser"
);

const getBrandListApi = async () => {
  const result = await getAuthApiClient().get("brand");
  return BrandListDataParser(result.data);
};

export { getBrandListApi };
