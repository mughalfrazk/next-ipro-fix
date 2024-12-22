import BrandList from "@/components/settings/brand/BrandList";
import { getBrandListApi } from "@/lib/services/api/brand.service";

const BrandPage = async () => {
  const result = await getBrandListApi();

  return <BrandList brands={result} />;
};
export default BrandPage;
