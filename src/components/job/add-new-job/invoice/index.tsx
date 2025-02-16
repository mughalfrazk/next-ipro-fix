"use client";

import { useEffect, useState } from "react";
import { Card, Grid, GridCol, Image, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

import { getInvoiceDetailByIdApi } from "@/lib/services/api/invoice.service";
import { JobModel } from "@/lib/models/job.model";
import { InvoiceModel } from "@/lib/models/invoice.model";
import { mapJobToInvoice, showErrorNotification } from "@/utils/functions";
import IproButton from "@/components/core/IproButton";
import Heading from "@/components/common/Heading";
import MainInvoiceCard from "./MainInvoiceCard";
import TechnicianInfoCard from "./TechnicianInfoCard";
import { generateInvoiceAction } from "@/lib/actions/invoice.action";
import { getFormattedError } from "@/utils/format-error";

const InvoiceTab = ({ job }: { job: JobModel }) => {
  const router = useRouter();
  const [invoice, setInvoice] = useState<InvoiceModel>();

  const getJobInvoice = async () => {
    const invoice = await getInvoiceDetailByIdApi(job.id);

    if (invoice) setInvoice(invoice);
    else setInvoice({ ...mapJobToInvoice(job) });
  };

  const createJobInvoice = async (job_id: string, invoice: InvoiceModel) => {
    try {
      await generateInvoiceAction(job_id, invoice);
      router.push(`/dashboard/job/${job_id}?tab=invoice`);
      router.refresh();
    } catch (error) {
      showErrorNotification(
        getFormattedError(error)?.errors?.formErrors?.[0] ??
          "Something went wrong, please try again."
      );
    }
  };

  useEffect(() => {
    if (!!job.id) getJobInvoice();
  }, [job]);

  return (
    invoice && (
      <Grid>
        <GridCol span={8}>
          <MainInvoiceCard invoice={invoice} />
        </GridCol>
        <GridCol span={4}>
          <Card>
            <Heading title="Actions" mb={20} />
            {!!invoice.id ? (
              <>
                <IproButton mb={10}>Print Invoice</IproButton>
                <IproButton variant="outline">Edit Invoice</IproButton>
              </>
            ) : job.job_status.name === "Job Done" ? (
              <IproButton mb={10} onClick={() => createJobInvoice(job.id, invoice)}>
                Generate Invoice
              </IproButton>
            ) : (
              <Text fs="italic" opacity={0.6}>
                Cannot generate invoice, job is still in progress.
              </Text>
            )}
          </Card>
          <TechnicianInfoCard invoice={invoice} />
          {!!invoice.id && (
            <Card mt={15}>
              <Heading title="Job Barcode" mb={20} />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__zUYSKisjapIoQLxoKwojgUSoZsRDSODAQ&s"
                height={30}
                mb={20}
              />
              <IproButton>Print Barcode</IproButton>
            </Card>
          )}
        </GridCol>
      </Grid>
    )
  );
};

export default InvoiceTab;
