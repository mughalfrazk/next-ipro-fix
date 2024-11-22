import { Drawer, Stack } from "@mantine/core";

const ModelDrawer = ({ opened, close }: { opened: boolean; close: () => void }) => {
  return (
    <Drawer opened={opened} title="Add New Model" position="right" onClose={close}>
      <Stack></Stack>
    </Drawer>
  );
};

export default ModelDrawer;
