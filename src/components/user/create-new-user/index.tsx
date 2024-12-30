"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Flex,
  Box,
  ProgressRoot,
  ProgressSection,
  ProgressLabel,
  Title,
  Paper
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";

import IproTextInput from "../../core/IproTextInput";
import IproButton from "../../core/IproButton";
import Heading from "../../common/Heading";
import RoleSelect from "./RoleSelect";
import { useFormAction } from "@/hooks/use-form-action";
import { createUserAction } from "@/lib/actions/user.action";
import { ProfileModel } from "@/lib/models/user.model";

const CreateOrUpdateUser = ({ user }: { user?: ProfileModel }) => {
  const { formAction, getFieldErrorProps } = useFormAction(createUserAction, {});
  const [progressPercentage, setProgressPercentage] = useState<string>("");

  useEffect(() => {
    if (user?.progress && user.target) {
      const perc = (((user.progress ?? 0) / (user.target ?? 0)) * 100).toFixed(2);
      setProgressPercentage(perc);
    }
    setProgressPercentage;
  }, [progressPercentage, user]);

  return (
    <form action={formAction}>
      <Stack gap={0}>
        <Grid>
          <Grid.Col span={9}>
            <Card pb={100}>
              <Group justify="space-between">
                <Stack>
                  <Heading
                    title={user?.id ? "User Details" : "Add New User"}
                    description={
                      user?.id
                        ? "User profile in detail"
                        : "Fill out the form to create any kind of new user."
                    }
                  ></Heading>
                </Stack>
                <IproButton variant="outline">Remove User</IproButton>
              </Group>
              <Divider mt={10} mb={20} />
              <Grid>
                <GridCol span={4}>
                  <IproTextInput
                    name="first_name"
                    label="First Name"
                    defaultValue={user?.first_name}
                    {...getFieldErrorProps("first_name")}
                  />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput
                    name="last_name"
                    label="Last Name"
                    defaultValue={user?.last_name}
                    {...getFieldErrorProps("last_name")}
                  />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput
                    name="phone"
                    label="Phone"
                    defaultValue={user?.phone ?? ""}
                    {...getFieldErrorProps("phone")}
                  />
                </GridCol>
                <GridCol span={8}>
                  <RoleSelect user={user} getFieldErrorProps={getFieldErrorProps} />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput
                    type="number"
                    name="target"
                    label="Assign Target"
                    defaultValue={user?.target ?? 0}
                    {...getFieldErrorProps("target")}
                  />
                </GridCol>
                {!user && (
                  <Fragment>
                    <GridCol span={6}>
                      <IproTextInput
                        type="email"
                        name="email"
                        label="Email"
                        {...getFieldErrorProps("email")}
                      />
                    </GridCol>
                    <GridCol span={6}>
                      <IproTextInput
                        type="password"
                        name="password"
                        label="Password"
                        {...getFieldErrorProps("password")}
                      />
                    </GridCol>
                  </Fragment>
                )}
                <GridCol span={12}>
                  <IproTextInput
                    type="text"
                    name="address"
                    label="Address"
                    defaultValue={user?.address ?? ""}
                    {...getFieldErrorProps("address")}
                  />
                </GridCol>
                {user && (
                  <GridCol span={12} mt={10}>
                    <Paper p={18} withBorder style={{ backgroundColor: "transparent" }}>
                      <Title order={5} mb={10}>
                        Progress
                      </Title>
                      <ProgressRoot size="xl">
                        <ProgressSection value={+progressPercentage} color="primary.6">
                          <ProgressLabel>{progressPercentage}%</ProgressLabel>
                        </ProgressSection>
                      </ProgressRoot>
                    </Paper>
                  </GridCol>
                )}
              </Grid>
              {!user && (
                <Group justify="flex-end" mt={20}>
                  <IproButton variant="outline">Cancal</IproButton>
                  <IproButton isSubmit={true}>Save User</IproButton>
                </Group>
              )}
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card h={"100%"} bg="var(--mantine-color-primary-6)">
              <Flex justify="center" align="center" h="100%">
                <Stack justify="center">
                  <Button
                    color="white"
                    leftSection={<IconRefresh size={20} />}
                    variant="transparent"
                  >
                    Reset Image
                  </Button>
                  <Box py="lg">
                    <Image
                      radius={400}
                      w={200}
                      h={200}
                      src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1730317491~exp=1730321091~hmac=746e33b631e0260e55f509d7000a63a365bb62c36824057115c99266383490f4&w=740"
                    />
                  </Box>
                  <Button mb={10} variant="outline" color="white">
                    Change Image
                  </Button>
                </Stack>
              </Flex>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </form>
  );
};

export default CreateOrUpdateUser;
