import { Stack } from "@mantine/core";
import DayBookList from "@/components/accounting/daybook/DayBookTable";
import TopCards from "@/components/accounting/daybook/TopDaybookCards";

const DayBookPage = async () => {
  return (
    <Stack>
      <TopCards />
      <DayBookList />
    </Stack>
  );
};
export default DayBookPage;
