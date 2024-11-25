import { Drawer, Group, Stack } from "@mantine/core";
import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useFormAction } from "@/hooks/use-form-action";
import { createProblemAction } from "@/lib/actions/problem.action";
import { updateBrandAction } from "@/lib/actions/brand.action";
import { ProblemModel } from "@/lib/models/problem.model";
const IssueDrawer = ({
  opened,
  close,
  title,
  selectedProblem
}: {
  opened: boolean;
  close: () => void;
  title?: string;
  selectedProblem?: ProblemModel;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state, formAction, getFieldErrorProps } = useFormAction(
    !!selectedProblem ? updateBrandAction : createProblemAction,
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
      router.push("/dashboard/settings/issue");
      router.refresh();
    }
  }, [isPending, state]);
  return (
    <Drawer opened={opened} title={title ?? "Add New Brand"} position="right" onClose={close}>
      <form action={handleSubmit}>
        <Stack>
          <IproTextInput
            type="text"
            label="Name"
            name="name"
            defaultValue={selectedProblem?.name}
            placeholder="Broken Glass"
            {...getFieldErrorProps("name")}
          />
          <IproTextInput
            type="text"
            label="Description"
            name="description"
            defaultValue={selectedProblem?.description ?? ""}
            placeholder="A very expensive brand"
            {...getFieldErrorProps("description")}
          />
          {selectedProblem && (
            <IproTextInput
              type="number"
              name="id"
              defaultValue={selectedProblem.id}
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

export default IssueDrawer;
