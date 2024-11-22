import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Drawer, Group, Stack } from "@mantine/core";

import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { createModelAction, updateModelAction } from "@/lib/actions/model.action";
import { ModelModel } from "@/lib/models/model.model";

const ModelDrawer = ({
  opened,
  close,
  title,
  selectedModel
}: {
  opened: boolean;
  close: () => void;
  title?: string;
  selectedModel?: ModelModel;
}) => {
  const router = useRouter();
  const { formAction, getFieldErrorProps } = useFormAction(
    !!selectedModel ? updateModelAction : createModelAction,
    {}
  );

  return (
    <Drawer opened={opened} title={title ?? "Add New Model"} position="right" onClose={close}>
      <form
        action={async (formData) => {
          await formAction(formData);

          // TODO: doesn't always work, user have to refresh manually first time.
          router.push("/dashboard/settings/model");
          router.refresh();
          close();
        }}
      >
        <Stack>
          <IproTextInput
            type="text"
            label="Name"
            name="name"
            defaultValue={selectedModel?.name}
            placeholder="14 pro max"
            {...getFieldErrorProps("name")}
          />
          <IproTextInput
            type="text"
            label="Description"
            name="description"
            defaultValue={selectedModel?.description}
            placeholder="A very expensive phone"
            {...getFieldErrorProps("description")}
          />
          {selectedModel && (
            <IproTextInput
              type="number"
              name="id"
              defaultValue={selectedModel.id}
              style={{ display: "none" }}
            />
          )}
          <Group justify="flex-end" gap={10}>
            <IproButton variant="outline" onClick={close}>
              Cancel
            </IproButton>
            <IproButton isSubmit={true}>Submit</IproButton>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
};

export default ModelDrawer;
