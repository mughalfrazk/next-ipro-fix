import { NumberFormatter, Paper, Stack, Text } from "@mantine/core";

import Table from "@/components/common/Table";
import { SupplierListWithPurchasesModel } from "@/lib/models/supplier.model";
import { PurchaseColumns } from "./purchase-columns";

const PurchasesList = ({ purchases }: { purchases: SupplierListWithPurchasesModel }) => {
  return (
    <Table
      title="Total Purchases"
      columns={PurchaseColumns}
      data={purchases}
      description="All Purchases details"
      search={true}
      drawerTitle="Purchase Filter"
      // filter={<JobPurchaseFilterBody />}
      rightSection={
        <Paper py={5} bg="var(--mantine-color-primary-6)">
          <Stack h="100%" justify="center" align="center" c="white" gap={0}>
            <Text size="xs">Total Purchases</Text>
            <NumberFormatter
              prefix="AED "
              value={purchases.reduce(
                (prev, curr) =>
                  prev + curr.purchases.reduce((subPrev, subCurr) => subPrev + subCurr.total, 0),
                0
              )}
              style={{ fontSize: 15, lineHeight: 1.2, fontWeight: "bold" }}
              thousandSeparator
            />
          </Stack>
        </Paper>
      }
    />
  );
};

export default PurchasesList;
