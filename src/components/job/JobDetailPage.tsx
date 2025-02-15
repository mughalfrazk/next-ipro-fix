"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";

import JobDetailTab from "@/components/job/add-new-job/job-detail";
import JobPurchasesTab from "@/components/job/add-new-job/job-purchases";
import InvoiceTab from "@/components/job/add-new-job/invoice";
import { useProfileContext } from "@/context/profile.context";
import { JobModel } from "@/lib/models/job.model";
import { RoleTypes } from "@/types/roles.types";
import classes from "./job-detail-page.module.css";

const TABS = {
  detail: "detail",
  purchase: "purchases",
  invoice: "invoice"
};

type TabType = keyof typeof TABS;

const JobDetailPage = ({ job }: { job: JobModel }) => {
  const queryParams = useSearchParams();
  const {
    data: { role }
  } = useProfileContext();

  const [activeTab, setActiveTab] = useState<string | null>("detail");

  const tabs = [
    {
      title: "Job Details",
      value: "detail",
      component: <JobDetailTab job={job} />
    },
    {
      title: "Job Purchases",
      value: "purchases",
      component: <JobPurchasesTab jobId={job.id} purchases={job?.purchases ?? []} />
    },
    {
      title: "Invoice",
      value: "invoice",
      component: <InvoiceTab job={job} />,
      role: [
        RoleTypes.SUPER_ADMIN,
        RoleTypes.ADMIN,
        RoleTypes.ACCOUNTANT,
        RoleTypes.RECEPTIONIST,
        RoleTypes.TECHNICIAN
      ]
    }
  ];

  const isTabPermitted = (tab: string) => {
    const tabProps = tabs.filter((i) => i.value === tab)[0];
    return !tabProps?.role?.length || tabProps?.role?.includes(role.name);
  };

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
          {tabs.map(
            (item) =>
              (!item.role?.length || item.role?.includes(role.name)) && (
                <TabsTab key={item.title} value={item.value} py={15}>
                  <Title order={4} fw={600}>
                    {item.title}
                  </Title>
                </TabsTab>
              )
          )}
        </TabsList>
      </Box>

      {isTabPermitted("detail") && (
        <TabsPanel value="detail">
          <JobDetailTab job={job} />
        </TabsPanel>
      )}
      {isTabPermitted("purchases") && (
        <TabsPanel value="purchases">
          <JobPurchasesTab jobId={job.id} purchases={job?.purchases ?? []} />
        </TabsPanel>
      )}
      {isTabPermitted("invoice") && (
        <TabsPanel value="invoice">
          <InvoiceTab job={job} />
        </TabsPanel>
      )}
    </Tabs>
  );
};

export default JobDetailPage;
