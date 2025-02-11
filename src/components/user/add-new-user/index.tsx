"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Flex,
  Box,
  Title,
  Paper,
  Slider,
  Badge,
  NumberFormatter,
  Text,
  ActionIcon
} from "@mantine/core";

import IproTextInput from "../../core/IproTextInput";
import IproButton from "../../core/IproButton";
import Heading from "../../common/Heading";
import RoleSelect from "./RoleSelect";
import { createUserAction, updateUserAction } from "@/lib/actions/user.action";
import { IconCircleCheckFilled, IconEdit } from "@tabler/icons-react";
import { useFormAction } from "@/hooks/use-form-action";
import { ProfileModel } from "@/lib/models/user.model";
import { useInputState } from "@mantine/hooks";

const CreateOrUpdateUser = ({ user }: { user?: ProfileModel }) => {
  const { formAction, getFieldErrorProps } = useFormAction(
    user ? updateUserAction : createUserAction,
    {}
  );
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  const [progress, setProgress] = useInputState<number>(0);
  const [editProgress, setEditProgress] = useState<boolean>();

  useEffect(() => {
    if (user?.progress && user.target) {
      const perc = (((user.progress ?? 0) / (user.target ?? 0)) * 100).toFixed(2);
      setProgressPercentage(+perc);
      setProgress(user?.progress);
    }
  }, [progressPercentage, user]);

  useEffect(() => {
    if (!!user?.target) setProgress(user.progress);
  }, [user]);

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
                <IproButton variant="outline" color="red">Deactivate User</IproButton>
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
                <GridCol span={12}>
                  <RoleSelect user={user} getFieldErrorProps={getFieldErrorProps} />
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
                {user && !!user.target && (
                  <GridCol span={12} mt={10}>
                    <Paper p={18} withBorder style={{ backgroundColor: "transparent" }}>
                      <Group align="center" justify="space-between">
                        <Title order={5} mb={10}>
                          Progress
                        </Title>
                        <Badge color="primary.6" mb={10}>
                          <NumberFormatter suffix="%" value={progressPercentage} />
                        </Badge>
                      </Group>
                      <Slider
                        color="primary.6"
                        defaultValue={user.progress ?? 0}
                        value={progress}
                        onChange={setProgress}
                        max={user.target}
                      />
                      <Divider mt={20} mb={15} />
                      <Group>
                        <Text size="sm">Progress:</Text>
                        <Group align="center">
                          {editProgress && (
                            <IproTextInput
                              type="number"
                              name="progress"
                              value={progress}
                              onChange={setProgress}
                              size="sm"
                              width="100"
                            />
                          )}

                          {!editProgress && <Text fw="bold">{progress ?? 0}</Text>}
                          <ActionIcon
                            color="primary.6"
                            onClick={() =>
                              setEditProgress((prevState) => {
                                if (!progress && prevState) setProgress(user.progress);
                                return !prevState;
                              })
                            }
                          >
                            {editProgress ? (
                              <IconCircleCheckFilled style={{ width: "70%", height: "70%" }} />
                            ) : (
                              <IconEdit style={{ width: "70%", height: "70%" }} />
                            )}
                          </ActionIcon>
                        </Group>
                        /<Text size="sm">Target:</Text>
                        <Text fw="bold">{user.target}</Text>
                      </Group>
                    </Paper>
                  </GridCol>
                )}
                {!!user && user.target && (
                  <IproTextInput
                    type="number"
                    name="progress"
                    value={progress}
                    onChange={setProgress}
                    size="sm"
                    width="100"
                    display="none"
                  />
                )}
                {!!user && <input type="text" name="id" defaultValue={user.id} hidden />}
              </Grid>
              <Group justify="flex-end" mt={20}>
                <IproButton variant="outline">Cancal</IproButton>
                <IproButton isSubmit={true}>{user ? "Update" : "Save"} User</IproButton>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card h={"100%"} bg="var(--mantine-color-primary-6)">
              <Flex justify="center" align="center" h="100%">
                <Stack justify="center">
                  {/* <Button
                    color="white"
                    leftSection={<IconRefresh size={20} />}
                    variant="transparent"
                  >
                    Reset Image
                  </Button> */}
                  <Box py="lg">
                    <Image
                      radius={400}
                      w={200}
                      h={200}
                      src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1730317491~exp=1730321091~hmac=746e33b631e0260e55f509d7000a63a365bb62c36824057115c99266383490f4&w=740"
                    />
                  </Box>
                  {/* <Button mb={10} variant="outline" color="white">
                    Change Image
                  </Button> */}
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
