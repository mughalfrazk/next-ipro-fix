import PurchasesList from "@/components/purchases/PurchasesList";
import { getSuppliersWithPurchasesApi } from "@/lib/services/api/supplier.service";

const PurchasesPage = async () => {
  const result = await getSuppliersWithPurchasesApi();

  return <PurchasesList purchases={result} />;
};

export default PurchasesPage;
