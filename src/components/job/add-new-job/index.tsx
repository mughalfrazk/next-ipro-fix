"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";

import { JobModel } from "@/lib/models/job.model";
import JobDetailTab from "@/components/job/add-new-job/job-detail";
import JobPurchasesTab from "@/components/job/add-new-job/job-purchases";
import InvoiceTab from "@/components/job/add-new-job/invoice";
import classes from "./add-new.module.css";

const TABS = {
  detail: "detail",
  purchase: "purchases",
  invoice: "invoice"
};

type TabType = keyof typeof TABS;

const AddNewJobClient = ({ job }: { job: JobModel }) => {
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
    },
    {
      title: "Invoice",
      value: "invoice"
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

export default AddNewJobClient;
