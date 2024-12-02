import { useEffect, useTransition } from "react";
import { Drawer, Group, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { PartModel } from "@/lib/models/part.model";
import { createPartAction, updatePartAction } from "@/lib/actions/part.action";

const PartDrawer = ({
        opened,
        close,
        title,
        selectedPart
      }: {
        opened: boolean;
        close: () => void;
        title?: string;
        selectedPart?: PartModel;
      }) => {
        const router = useRouter();
        const [isPending, startTransition] = useTransition();
        const { state, formAction, getFieldErrorProps } = useFormAction(
          !!selectedPart ? updatePartAction : createPartAction,
          {}
        );
        const handleSubmit = async (formData: FormData) => {
            startTransition(() => {
              formAction(formData);
            });
          };
          useEffect(() => {
            if (!isPending && typeof state?.success === "string") {
              close();
              router.push("/dashboard/settings/part");
              router.refresh();
            }
          }, [isPending, state]);
          return (
            <Drawer opened={opened} title={title ?? "Add New Part"} position="right" onClose={close}>
              <form action={handleSubmit}>
                <Stack>
                  <IproTextInput
                    type="text"
                    label="Name"
                    name="name"
                    defaultValue={selectedPart?.name}
                    placeholder="Screen"
                    {...getFieldErrorProps("name")}
                  />
                  <IproTextInput
                    type="text"
                    label="Description"
                    name="description"
                    defaultValue={selectedPart?.description ?? ""}
                    placeholder="Phone Screen"
                    {...getFieldErrorProps("description")}
                  />
                  {selectedPart && (
                    <IproTextInput
                      type="number"
                      name="id"
                      defaultValue={selectedPart.id}
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

export default PartDrawer;