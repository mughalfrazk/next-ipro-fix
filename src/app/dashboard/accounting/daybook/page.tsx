import DayBookList from "@/components/accounting/daybook/dayBookList";
import TopCards from "@/components/accounting/daybook/topCards";
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
