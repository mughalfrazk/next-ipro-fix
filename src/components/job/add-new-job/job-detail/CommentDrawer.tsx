"use client";

import { Box, Drawer, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMessageDots } from "@tabler/icons-react";

import { useZIndex } from "@/hooks/use-z-index";
import { JobModel } from "@/lib/models/job.model";
import IproButton from "@/components/core/IproButton";
import CommentDrawerBody from "./CommentDrawerBody";

const CommentDrawer = ({ job }: { job: JobModel }) => {
  const z = useZIndex();
  const [opened, { open, close }] = useDisclosure();

  return (
    <Box pos="relative">
      <IproButton
        pos="absolute"
        onClick={open}
        style={{ zIndex: z.docked }}
        top={-75}
        right={0}
        isIconOnly
        radius="xl"
        size="xl"
        h={60}
        w={60}
      >
        <IconMessageDots style={{ width: rem(40), height: rem(40) }} />
      </IproButton>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title="Job Comments"
        lockScroll={false}
        styles={{
          body: { padding: 0, overflowY: "hidden" }
        }}
      >
        <CommentDrawerBody job={job} />
      </Drawer>
    </Box>
  );
};

export default CommentDrawer;
