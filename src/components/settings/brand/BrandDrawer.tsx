import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Drawer, Group, Stack } from "@mantine/core";
import { BrandModel } from "@/lib/models/brand.model";
import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { updateBrandAction, createBrandAction } from "@/lib/actions/brand.action";

const BrandDrawer = ({
  opened,
  close,
  title,
  selectedBrand
}: {
  opened: boolean;
  close: () => void;
  title?: string;
  selectedBrand?: BrandModel;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state, formAction, getFieldErrorProps } = useFormAction(
    !!selectedBrand ? updateBrandAction : createBrandAction,
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
      router.push("/dashboard/settings/brand");
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
            defaultValue={selectedBrand?.name}
            placeholder="Iphone"
            {...getFieldErrorProps("name")}
          />
          <IproTextInput
            type="text"
            label="Description"
            name="description"
            defaultValue={selectedBrand?.description ?? ""}
            placeholder="A very expensive brand"
            {...getFieldErrorProps("description")}
          />
          {selectedBrand && (
            <IproTextInput
              type="number"
              name="id"
              defaultValue={selectedBrand.id}
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

export default BrandDrawer;
