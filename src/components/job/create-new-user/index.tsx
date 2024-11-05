"use client";

import {
  Center,
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";

import IproSelect from "@/components/core/IproSelect";
import IproTextInput from "@/components/core/IproTextInput";
import IproButton from "@/components/core/IproButton";
import Heading from "@/components/common/Heading";

const AddNewUser = () => {
  return (
    <Stack gap={0}>
      <Grid>
        <Grid.Col span={9}>
          <Card>
            <Group justify="space-between">
              <Stack>
                <Heading
                  title="New User Details"
                  description="Add new User by filling out the form"
                ></Heading>
              </Stack>
              <IproButton variant="outline">Remove User</IproButton>
            </Group>
            <Divider mt={10} mb={20} />
            <Grid>
              <GridCol span={4}>
                <IproTextInput name="" label="User Name" />
              </GridCol>
              <GridCol span={4}>
                <IproTextInput name="" label="Email" />
              </GridCol>
              <GridCol span={4}>
                <IproTextInput name="" label="Phone" />
              </GridCol>
              <GridCol span={6}>
                <IproSelect name="" label="User Role" />
              </GridCol>
              <GridCol span={6}>
                <IproTextInput name="" label="Assign Target" />
              </GridCol>
              <GridCol span={12}>
                <IproTextInput name="" label="Phone" />
              </GridCol>
            </Grid>
            <Group justify="flex-end" mt={20}>
              <IproButton variant="outline">Cancal</IproButton>
              <IproButton isSubmit={true}>Save</IproButton>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={3}>
          <Card bg="var(--mantine-color-primary-6)">
            <Center>
              <Stack h={360} justify="space-between">
                <Button
                  color="white"
                  leftSection={<IconRefresh size={20} />}
                  variant="transparent"
                >
                  Reset Image
                </Button>
                <Image
                  radius={400}
                  w={200}
                  h={200}
                  alt="usr image"
                  src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1730317491~exp=1730321091~hmac=746e33b631e0260e55f509d7000a63a365bb62c36824057115c99266383490f4&w=740"
                />
                <Button mb={10} variant="outline" color="white">
                  Change Image
                </Button>
              </Stack>
            </Center>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default AddNewUser;
