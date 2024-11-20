import DayBookList from "@/components/accounting/daybook/DayBookTable";
import TopCards from "@/components/accounting/daybook/TopDaybookCards";
import { Stack } from "@mantine/core";
const DayBookPage = async () => {
  return (
    <Stack>
      <TopCards />
      <DayBookList />
    </Stack>
  );
};
export default DayBookPage;
