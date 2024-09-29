import { Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";

import JobDetailTab from "@/components/add-new-job/JobDetailTab";
import JobPurchasesTab from "@/components/add-new-job/JobPurchasesTab";
import InvoiceTab from "@/components/add-new-job/InvoiceTab";
import classes from "./add-new.module.css";

const AddNewJobPage = () => {
  const tabs = [
    {
      title: "Job Details",
      value: "detail",
    },
    {
      title: "Job Purchases",
      value: "purchases",
    },
    {
      title: "Invoice",
      value: "invoice",
    },
  ];

  return (
    <Tabs variant="unstyled" defaultValue="detail" classNames={classes}>
      <TabsList grow mb={20}>
        {tabs.map((item) => (
          <TabsTab key={item.title} value={item.value} py={15}>
            <Title order={4} fw={600}>
              {item.title}
            </Title>
          </TabsTab>
        ))}
      </TabsList>

      <TabsPanel value="detail">
        <JobDetailTab />
      </TabsPanel>
      <TabsPanel value="purchases">
        <JobPurchasesTab />
      </TabsPanel>
      <TabsPanel value="invoice">
        <InvoiceTab />
      </TabsPanel>
    </Tabs>
  );
};

export default AddNewJobPage;
