"use client";

import { Divider, Group, NumberFormatter, Stack, Text, Title } from "@mantine/core";
import { IconPrinter } from "@tabler/icons-react";

import IproButton from "@/components/core/IproButton";
import IproModal from "@/components/core/IproModal";
import { InvoiceModel } from "@/lib/models/invoice.model";
import { showDateNicely } from "@/utils/functions";
import classes from "./InvoiceViewDialog.module.css";

type InvoiceViewDialogProps = {
  opened: boolean;
  onClose: () => void;
  invoice: InvoiceModel;
};

const moneyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const formatMoney = (value: number) => `AED ${moneyFormatter.format(value || 0)}`;

const escapeHtml = (value: string | null | undefined) =>
  String(value ?? "-")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const InvoiceViewDialog = ({ opened, onClose, invoice }: InvoiceViewDialogProps) => {
  const created = invoice.created_at ? showDateNicely(invoice.created_at) : "";
  const [issuedDate = "-", issuedTime = "-"] = created ? created.split(" - ") : [];

  const printInvoice = () => {
    const issueItemsMarkup = invoice.issues
      .map((issue) => {
        const details = `${escapeHtml(issue.brand?.name)} / ${escapeHtml(issue.model?.name)} / ${escapeHtml(issue.problem?.name)}`;
        return `
          <div class="item">
            <div class="item-name">${details}</div>
            <div class="item-row">
              <span>${issue.quantity} x ${formatMoney(issue.charges)}</span>
              <span>${formatMoney(issue.total)}</span>
            </div>
          </div>
        `;
      })
      .join("");

    const technicianName = invoice.technician
      ? `${escapeHtml(invoice.technician.first_name)} ${escapeHtml(invoice.technician.last_name)}`
      : "Not assigned";

    const printMarkup = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Invoice ${escapeHtml(invoice.id || "UNSAVED-INVOICE")}</title>
          <style>
            @page { size: 80mm auto; margin: 4mm; }
            html, body { margin: 0; padding: 0; }
            body {
              width: 72mm;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 11px;
              line-height: 1.35;
              color: #000;
            }
            .wrap { width: 72mm; }
            .center { text-align: center; }
            .title { font-size: 14px; font-weight: 700; margin: 0; }
            .invoice-no { font-size: 12px; font-weight: 700; margin-top: 2px; }
            .line { border-top: 1px dashed #000; margin: 8px 0; }
            .row { display: flex; justify-content: space-between; gap: 6px; }
            .muted { color: #222; }
            .section { margin: 0; font-weight: 700; }
            .item { margin: 0 0 6px 0; }
            .item-name { font-weight: 700; font-size: 10.5px; }
            .item-row { display: flex; justify-content: space-between; gap: 6px; }
            .strong { font-weight: 700; }
            .thanks { margin-top: 8px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="center">
              <p class="title">INVOICE</p>
              <div class="invoice-no">${escapeHtml(invoice.id || "UNSAVED-INVOICE")}</div>
            </div>

            <div class="line"></div>

            <div class="row"><span class="muted">Date</span><span class="strong">${escapeHtml(issuedDate)}</span></div>
            <div class="row"><span class="muted">Time</span><span class="strong">${escapeHtml(issuedTime)}</span></div>

            <div class="line"></div>

            <p class="section">Customer</p>
            <div>${escapeHtml(invoice.customer.name)}</div>
            <div>${escapeHtml(invoice.customer.phone)}</div>
            <div>${escapeHtml(invoice.customer.company_name)}</div>

            <div class="line"></div>

            <div class="row strong"><span>Issue Details</span><span>Amount</span></div>
            ${issueItemsMarkup}

            <div class="line"></div>

            <div class="row"><span>Issue Total</span><span class="strong">${formatMoney(invoice.issue_total)}</span></div>
            <div class="row"><span>Purchases Total</span><span class="strong">${formatMoney(invoice.purchase_total)}</span></div>
            <div class="line"></div>
            <div class="row strong"><span>Grand Total</span><span>${formatMoney(invoice.total)}</span></div>

            <div class="line"></div>

            <div class="row"><span>Technician</span><span class="strong">${technicianName}</span></div>

            <div class="thanks">Thank you for your business</div>
          </div>
        </body>
      </html>
    `;

    const printFrame = document.createElement("iframe");
    printFrame.style.position = "fixed";
    printFrame.style.right = "0";
    printFrame.style.bottom = "0";
    printFrame.style.width = "0";
    printFrame.style.height = "0";
    printFrame.style.border = "0";
    printFrame.setAttribute("aria-hidden", "true");

    const cleanup = () => {
      setTimeout(() => {
        if (document.body.contains(printFrame)) {
          document.body.removeChild(printFrame);
        }
      }, 1000);
    };

    printFrame.onload = () => {
      const frameWindow = printFrame.contentWindow;

      if (!frameWindow) {
        cleanup();
        window.print();
        return;
      }

      frameWindow.focus();
      frameWindow.print();
      cleanup();
    };

    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentDocument;
    if (!frameDoc) {
      cleanup();
      window.print();
      return;
    }

    frameDoc.open();
    frameDoc.write(printMarkup);
    frameDoc.close();
  };

  return (
    <IproModal
      title="Invoice"
      opened={opened}
      onClose={onClose}
      centered
      size="md"
      hideActions
      classNames={{ body: classes.dialogBody }}
    >
      <Stack gap={12}>
        <div className={classes.printScope}>
          <Stack gap={8}>
            <Stack gap={2} align="center">
              <Title order={4}>INVOICE</Title>
              <Text fw={600} size="sm">
                {invoice.id || "UNSAVED-INVOICE"}
              </Text>
            </Stack>

            <Divider />

            <Group justify="space-between" gap={4}>
              <Text size="xs" c="dimmed">
                Date
              </Text>
              <Text size="xs" fw={600}>
                {issuedDate}
              </Text>
            </Group>
            <Group justify="space-between" gap={4}>
              <Text size="xs" c="dimmed">
                Time
              </Text>
              <Text size="xs" fw={600}>
                {issuedTime}
              </Text>
            </Group>

            <div className={classes.invoiceLine} />

            <Stack gap={4}>
              <Text fw={700} size="sm">
                Customer
              </Text>
              <Text size="xs">{invoice.customer.name || "-"}</Text>
              <Text size="xs">{invoice.customer.phone || "-"}</Text>
              <Text size="xs">{invoice.customer.company_name || "-"}</Text>
            </Stack>

            <div className={classes.invoiceLine} />

            <Stack gap={6}>
              <Group justify="space-between" gap={4}>
                <Text fw={700} size="sm">
                  Issue Details
                </Text>
                <Text fw={700} size="sm">
                  Amount
                </Text>
              </Group>

              {invoice.issues.map((issue, index) => (
                <Stack key={issue.id ?? `${issue.model?.id}-${index}`} gap={1}>
                  <Text size="xs" fw={500}>
                    {issue.brand?.name || "-"} / {issue.model?.name || "-"} /{" "}
                    {issue.problem?.name || "-"}
                  </Text>
                  <Group justify="space-between" gap={4}>
                    <Text size="xs" c="dimmed">
                      {issue.quantity} x{" "}
                      <NumberFormatter prefix="AED " value={issue.charges} thousandSeparator />
                    </Text>
                    <Text size="xs" fw={600}>
                      <NumberFormatter prefix="AED " value={issue.total} thousandSeparator />
                    </Text>
                  </Group>
                </Stack>
              ))}
            </Stack>

            <div className={classes.invoiceLine} />

            <Stack gap={4}>
              <Group justify="space-between" gap={4}>
                <Text size="xs">Issue Total</Text>
                <Text size="xs" fw={600}>
                  <NumberFormatter prefix="AED " value={invoice.issue_total} thousandSeparator />
                </Text>
              </Group>
              <Group justify="space-between" gap={4}>
                <Text size="xs">Purchases Total</Text>
                <Text size="xs" fw={600}>
                  <NumberFormatter prefix="AED " value={invoice.purchase_total} thousandSeparator />
                </Text>
              </Group>
              <Divider my={2} />
              <Group justify="space-between" gap={4}>
                <Text fw={700} size="sm">
                  Grand Total
                </Text>
                <Text fw={700} size="sm">
                  <NumberFormatter prefix="AED " value={invoice.total} thousandSeparator />
                </Text>
              </Group>
            </Stack>

            <div className={classes.invoiceLine} />

            <Group justify="space-between" gap={4}>
              <Text size="xs" c="dimmed">
                Technician
              </Text>
              <Text size="xs" fw={600} ta="right">
                {invoice.technician
                  ? `${invoice.technician.first_name} ${invoice.technician.last_name}`
                  : "Not assigned"}
              </Text>
            </Group>

            <Text ta="center" size="xs" c="dimmed" mt={6}>
              Thank you for your business
            </Text>
          </Stack>
        </div>

        <Group justify="flex-end" gap={10} className={classes.noPrint}>
          <IproButton variant="outline" onClick={onClose}>
            Close
          </IproButton>
          <IproButton leftSection={<IconPrinter size={16} />} onClick={printInvoice}>
            Print
          </IproButton>
        </Group>
      </Stack>
    </IproModal>
  );
};

export default InvoiceViewDialog;
