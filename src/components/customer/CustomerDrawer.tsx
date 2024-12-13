import { useEffect, useTransition } from "react";
import { Drawer, Group, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { CustomerModel } from "@/lib/models/customer.model";
import { createCustomerAction, updateCustomerAction } from "@/lib/actions/customer.action";

const CustomerDrawer = ({
  opened,
  close,
  title,
  selectedCustomer
}: {
  opened: boolean;
  close: () => void;
  title?: string;
  selectedCustomer?: CustomerModel;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state, formAction, getFieldErrorProps } = useFormAction(
    !!selectedCustomer ? updateCustomerAction : createCustomerAction,
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
      router.push("/dashboard/customer");
      router.refresh();
    }
  }, [isPending, state]);
  return (
    <Drawer opened={opened} title={title ?? "Add New Customer"} position="right" onClose={close}>
      <form action={handleSubmit}>
        <Stack>
          <IproTextInput
            type="text"
            label="Name"
            name="name"
            defaultValue={selectedCustomer?.name}
            placeholder="Jhon Doe"
            {...getFieldErrorProps("name")}
          />
          <IproTextInput
            type="text"
            label="Phone"
            name="phone"
            defaultValue={selectedCustomer?.phone ?? ""}
            placeholder="xxx xxxx xxxx"
            {...getFieldErrorProps("phone")}
          />
          <IproTextInput
            type="text"
            label="Company Name"
            name="company_name"
            defaultValue={selectedCustomer?.company_name ?? ""}
            placeholder="Contour Software Ltd"
            {...getFieldErrorProps("company_name")}
          />
          {selectedCustomer && (
            <IproTextInput
              type="number"
              name="id"
              defaultValue={selectedCustomer.id}
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

export default CustomerDrawer;
