import CustomerList from "@/components/customer/CustomerList";
import { getCustomerListApi } from "@/lib/services/api/customer.service";

const CustomerPage = async () => {
  const result = await getCustomerListApi();
  return <CustomerList customers={result} />;
};

export default CustomerPage;
