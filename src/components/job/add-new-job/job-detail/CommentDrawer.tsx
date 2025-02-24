"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Center, Drawer, rem, Text } from "@mantine/core";
import { IconMessageDots } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import IproButton from "@/components/core/IproButton";
import CommentDrawerBody from "./CommentDrawerBody";
import { JobModel } from "@/lib/models/job.model";
import { useZIndex } from "@/hooks/use-z-index";

const CommentDrawer = ({ job }: { job: JobModel }) => {
  const z = useZIndex();
  const queryParams = useSearchParams();
  const [opened, { open, close }] = useDisclosure();

  useEffect(() => {
    const tab = queryParams.get("tab");
    if (tab === "comment") open();
  }, []);

  return (
    <Box pos="relative">
      <Box
        style={{
          zIndex: z.baseOverlay,
          borderRadius: "1rem",
          boxShadow: "-2px 2px 6px 1px #2424245c"
        }}
        pos="absolute"
        top={-78}
        right={-8}
        bg="var(--mantine-color-red-6)"
        h={25}
        w={25}
      >
        <Center pt={3}>
          <Text fw="600" size="sm" c="white">
            {job.comments?.length}
          </Text>
        </Center>
      </Box>
      <IproButton
        pos="absolute"
        onClick={open}
        style={{ zIndex: z.base }}
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
