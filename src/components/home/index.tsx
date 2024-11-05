"use client";

import { Flex, Grid, rem, Stack, Text, Title } from "@mantine/core";
import IproButton from "../core/IproButton";
import {
  IconCircleKeyFilled,
  IconLayoutDashboardFilled
} from "@tabler/icons-react";
import Link from "next/link";

const Home = () => {
  return (
    <Flex justify="center" align="center" h="100vh" ta="center">
      <Stack gap={4}>
        <Title>Welcome to Ipro Fix</Title>
        <Text>Click on either of the button below to visit the portal.</Text>
        <Grid mt={20}>
          <Grid.Col span={6}>
            <Link href={"/auth"}>
              <IproButton fullWidth h={rem(100)}>
                <Stack gap={6} align="center">
                  <IconCircleKeyFilled
                    style={{ width: rem(35), height: rem(35) }}
                  />
                  <Text tt={"uppercase"} size="sm" lts={1}>
                    Login
                  </Text>
                </Stack>
              </IproButton>
            </Link>
          </Grid.Col>
          <Grid.Col span={6}>
            <Link href={"/dashboard"}>
              <IproButton fullWidth h={rem(100)}>
                <Stack gap={6} align="center">
                  <IconLayoutDashboardFilled
                    style={{ width: rem(35), height: rem(35) }}
                  />
                  <Text tt={"uppercase"} size="sm" lts={1}>
                    Dashboard
                  </Text>
                </Stack>
              </IproButton>
            </Link>
          </Grid.Col>
        </Grid>
      </Stack>
    </Flex>
  );
};

export default Home;
