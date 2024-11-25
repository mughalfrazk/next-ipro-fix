import { BrandListSchema, UpdateBrandPayloadModel } from "@/lib/models/brand.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";
import { CreateBrandPayloadModel } from "@/lib/models/brand.model";

const BrandListDataParser = parseFactory(BrandListSchema, "BrandListDataParser");

const getBrandListApi = async () => {
  const result = await getAuthApiClient().get("brand");
  return BrandListDataParser(result.data);
};

const createBrandApi = async (payload: CreateBrandPayloadModel) => {
  const result = await getAuthApiClient().post("brand", payload);
  return result;
};

const updateBrandApi = async (brandId: number, payload: UpdateBrandPayloadModel) => {
  const result = await getAuthApiClient().patch(`brand/${brandId}`, payload);
  return result;
};

const deleteBrandApi = async (brandId: number) => {
  const result = await getAuthApiClient().delete(`brand/${brandId}`);
  return result;
};
export { getBrandListApi, createBrandApi, updateBrandApi, deleteBrandApi };
