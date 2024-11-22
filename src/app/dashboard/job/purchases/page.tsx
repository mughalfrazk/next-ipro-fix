import Table from "@/components/common/Table";
import JobPurchaseFilterBody from "@/components/job/add-new-job/job-purchases/JobPurchaseFilterBody";

const PurchasesPage = () => {
  return (
    <Table
      title="Total Purchases"
      description="All Purchases details"
      search={true}
      drawerTitle="Purchase Filter"
      filter={<JobPurchaseFilterBody />}
    />
  );
};

export default PurchasesPage;
