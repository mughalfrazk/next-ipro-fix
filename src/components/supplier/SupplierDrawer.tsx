"use client";

import { useEffect, useTransition } from "react";
import { Drawer, Group, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { SupplierModel } from "@/lib/models/supplier.model";
import { createSupplierAction, updateSupplierAction } from "@/lib/actions/supplier.action";

const SupplierDrawer = ({
  opened,
  close,
  title,
  selectedSupplier
}: {
  opened: boolean;
  close: () => void;
  title?: string;
  selectedSupplier?: SupplierModel;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state, formAction, getFieldErrorProps } = useFormAction(
    !!selectedSupplier ? updateSupplierAction : createSupplierAction,
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
      router.push("/dashboard/supplier");
      router.refresh();
    }
  }, [isPending, state]);
  return (
    <Drawer opened={opened} title={title ?? "Add New Supplier"} position="right" onClose={close}>
      <form action={handleSubmit}>
        <Stack>
          <IproTextInput
            type="text"
            label="Name"
            name="name"
            defaultValue={selectedSupplier?.name}
            placeholder="Ahmad"
            {...getFieldErrorProps("name")}
          />
          <IproTextInput
            type="text"
            label="Description"
            name="description"
            defaultValue={selectedSupplier?.description ?? ""}
            placeholder="Phone Screen"
            {...getFieldErrorProps("description")}
          />
          {selectedSupplier && (
            <IproTextInput
              type="number"
              name="id"
              defaultValue={selectedSupplier.id}
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

export default SupplierDrawer;
