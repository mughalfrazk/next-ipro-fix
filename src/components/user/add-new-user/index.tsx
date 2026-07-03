"use client";

import { Fragment } from "react";
import {
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Title,
  Paper,
  Slider,
  Badge,
  NumberFormatter,
  Text
} from "@mantine/core";

import IproTextInput from "../../core/IproTextInput";
import IproButton from "../../core/IproButton";
import Heading from "../../common/Heading";
import RoleSelect from "./RoleSelect";
import { createUserAction, updateUserAction } from "@/lib/actions/user.action";
import { useFormAction } from "@/hooks/use-form-action";
import { ProfileModel } from "@/lib/models/user.model";
import { useDisclosure } from "@mantine/hooks";
import ChangePasswordModel from "../ChangePasswordModel";

const CreateOrUpdateUser = ({ user }: { user?: ProfileModel }) => {
  const [openedPasswordDialog, { open: openPasswordDialog, close: closePasswordDialog }] =
    useDisclosure(false);
  const { formAction, getFieldErrorProps } = useFormAction(
    user ? updateUserAction : createUserAction,
    {}
  );

  const isTechnician = user?.role?.name?.toLowerCase() === "technician";
  const hasTarget = !!user?.target && user.target > 0;
  const progressPercentage = hasTarget
    ? +(((user?.progress ?? 0) / (user?.target ?? 1)) * 100).toFixed(2)
    : 0;

  return (
    <Fragment>
      <ChangePasswordModel
        title="Set new password"
        userId={user?.id}
        opened={openedPasswordDialog}
        onClose={closePasswordDialog}
      />
      <form action={formAction}>
        <Stack gap={0}>
          <Grid>
            <Grid.Col span={12}>
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
                  {!!user && (
                    <IproButton
                      variant="outline"
                      color="var(--mantine-color-red-5)"
                      style={{ borderColor: "var(--mantine-color-red-5)" }}
                    >
                      Deactivate User
                    </IproButton>
                  )}
                </Group>
                <Divider mt={10} mb={20} />
                <Grid>
                  {user?.email && (
                    <GridCol span={12}>
                      Email: {user?.email} <Divider mt={20} />
                    </GridCol>
                  )}
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
                  {user && isTechnician && (
                    <GridCol span={12} mt={10}>
                      <Paper p={18} withBorder style={{ backgroundColor: "transparent" }}>
                        <Group align="center" justify="space-between">
                          <Title order={5} mb={10}>
                            Progress
                          </Title>
                          {hasTarget && (
                            <Badge color="primary.6" mb={10}>
                              <NumberFormatter suffix="%" value={progressPercentage} />
                            </Badge>
                          )}
                        </Group>
                        <Slider
                          color={hasTarget ? "primary.6" : "gray.4"}
                          value={hasTarget ? (user.progress ?? 0) : 0}
                          max={hasTarget ? (user.target ?? 0) : 100}
                          disabled={!hasTarget}
                          thumbSize={hasTarget ? undefined : 0}
                          styles={!hasTarget ? { thumb: { display: "none" } } : undefined}
                        />
                        <Divider mt={20} mb={15} />
                        <Group>
                          <Text size="sm">Progress:</Text>
                          <Text fw="bold">{user.progress ?? 0}</Text>
                          <Text size="sm">/</Text>
                          <Text size="sm">Target:</Text>
                          <Text fw="bold">{user.target ?? 0}</Text>
                        </Group>
                        {!hasTarget && (
                          <Text size="xs" c="dimmed" mt={10}>
                            No target assigned yet.
                          </Text>
                        )}
                      </Paper>
                    </GridCol>
                  )}
                  {!!user && <input type="text" name="id" defaultValue={user.id} hidden />}
                </Grid>
                <Group justify="flex-end" mt={20}>
                  <IproButton variant="outline">Cancal</IproButton>
                  <IproButton variant="filled" onClick={openPasswordDialog}>
                    Change Password
                  </IproButton>
                  <IproButton isSubmit={true}>{user ? "Update" : "Save"} User</IproButton>
                </Group>
              </Card>
            </Grid.Col>
            {/* <Grid.Col span={3}>
              <Card h={"100%"} bg="var(--mantine-color-primary-6)">
                <Flex justify="center" align="center" h="100%">
                  <Stack justify="center">
                    <Box py="lg">
                      <Image
                        radius={400}
                        w={200}
                        h={200}
                        src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1730317491~exp=1730321091~hmac=746e33b631e0260e55f509d7000a63a365bb62c36824057115c99266383490f4&w=740"
                      />
                    </Box>
                  </Stack>
                </Flex>
              </Card>
            </Grid.Col> */}
          </Grid>
        </Stack>
      </form>
    </Fragment>
  );
};

export default CreateOrUpdateUser;
