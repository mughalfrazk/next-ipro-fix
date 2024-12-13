import SupplierList from "@/components/supplier/SupplierList";
import { getSupplierListApi } from "@/lib/services/api/supplier.service";

const SupplierPage = async () => {
  const result = await getSupplierListApi();
  return <SupplierList suppliers={result} />;
};

export default SupplierPage;
