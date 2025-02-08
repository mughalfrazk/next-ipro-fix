"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";

import JobDetailTab from "@/components/job/add-new-job/job-detail";
import JobPurchasesTab from "@/components/job/add-new-job/job-purchases";
import InvoiceTab from "@/components/job/add-new-job/invoice";
import { JobModel } from "@/lib/models/job.model";
// import { RoleTypes } from "@/types/roles.types";
import classes from "./job-detail-page.module.css";

const TABS = {
  detail: "detail",
  purchase: "purchases",
  invoice: "invoice"
};

type TabType = keyof typeof TABS;

const JobDetailPage = ({ job }: { job: JobModel }) => {
  const queryParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string | null>("detail");

  const tabs = [
    {
      title: "Job Details",
      value: "detail"
    },
    {
      title: "Job Purchases",
      value: "purchases"
      // role: [
      //   RoleTypes.SUPER_ADMIN,
      //   RoleTypes.ADMIN,
      //   RoleTypes.RECEPTIONIST,
      //   RoleTypes.TECHNICIAN,
      //   RoleTypes.ACCOUNTANT
      // ]
    },
    {
      title: "Invoice",
      value: "invoice"
      // role: [RoleTypes.SUPER_ADMIN, RoleTypes.ADMIN, RoleTypes.ACCOUNTANT, RoleTypes.RECEPTIONIST]
    }
  ];

  useEffect(() => {
    const tab = queryParams.get("tab");
    if (tab === TABS.invoice) setActiveTab(TABS.invoice as TabType);
    else if (tab === TABS.purchase) setActiveTab(TABS.purchase as TabType);
    else setActiveTab(TABS.detail as TabType);
  }, []);

  return (
    <Tabs
      variant="unstyled"
      defaultValue={TABS.detail}
      classNames={classes}
      value={activeTab}
      onChange={setActiveTab}
    >
      <Box w="75%">
        <TabsList grow mb={16}>
          {tabs.map((item) => (
            <TabsTab key={item.title} value={item.value} py={15}>
              <Title order={4} fw={600}>
                {item.title}
              </Title>
            </TabsTab>
          ))}
        </TabsList>
      </Box>

      <TabsPanel value="detail">
        <JobDetailTab job={job} />
      </TabsPanel>
      <TabsPanel value="purchases">
        <JobPurchasesTab jobId={job.id} purchases={job?.purchases ?? []} />
      </TabsPanel>
      <TabsPanel value="invoice">
        <InvoiceTab job={job} />
      </TabsPanel>
    </Tabs>
  );
};

export default JobDetailPage;

{
  /* <Tabs
variant="unstyled"
defaultValue={TABS.detail}
classNames={classes}
value={activeTab}
onChange={setActiveTab}
>
<Box w="75%">
  <TabsList grow mb={16}>
    {tabs.map((item, idx) =>
      item.role && !item.role?.includes(role.name) ? (
        <Fragment key={idx} />
      ) : (
        <TabsTab key={item.title} value={item.value} py={15}>
          <Title order={4} fw={600}>
            {item.title}
          </Title>
        </TabsTab>
      )
    )}
  </TabsList>
</Box>

{(!tabs.filter((i) => i.value === "detail")[0]?.role ||
  tabs.filter((i) => i.value === "detail")[0].role?.includes(role.name)) && (
  <TabsPanel value="detail">
    <JobDetailTab job={job} />
  </TabsPanel>
)}
{(!tabs.filter((i) => i.value === "purchases")[0]?.role ||
  tabs.filter((i) => i.value === "purchases")[0].role?.includes(role.name)) && (
  <TabsPanel value="purchases">
    <JobPurchasesTab jobId={job.id} purchases={job?.purchases ?? []} />
  </TabsPanel>
)}
{(!tabs.filter((i) => i.value === "invoice")[0]?.role ||
  tabs.filter((i) => i.value === "invoice")[0].role?.includes(role.name)) && (
  <TabsPanel value="invoice">
    <InvoiceTab job={job} />
  </TabsPanel>
)}
</Tabs> */
}
