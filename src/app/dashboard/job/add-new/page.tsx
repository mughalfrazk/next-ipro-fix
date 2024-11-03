import { Box, Tabs, TabsList, TabsPanel, TabsTab, Title } from '@mantine/core'

import JobDetailTab from '@/components/add-new-job/job-detail'
import JobPurchasesTab from '@/components/add-new-job/job-purchases'
import InvoiceTab from '@/components/add-new-job/invoice'
import classes from './add-new.module.css'

const AddNewJobPage = () => {
  const tabs = [
    {
      title: 'Job Details',
      value: 'detail',
    },
    {
      title: 'Job Purchases',
      value: 'purchases',
    },
    {
      title: 'Invoice',
      value: 'invoice',
    },
  ]

  return (
    <Tabs variant="unstyled" defaultValue="detail" classNames={classes}>
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
        <JobDetailTab />
      </TabsPanel>
      <TabsPanel value="purchases">
        <JobPurchasesTab />
      </TabsPanel>
      <TabsPanel value="invoice">
        <InvoiceTab />
      </TabsPanel>
    </Tabs>
  )
}

export default AddNewJobPage
