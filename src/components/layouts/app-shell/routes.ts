import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import {
  IconHome,
  IconTool,
  IconFocus,
  IconCalculator,
  IconUserCircle,
  IconProps,
  Icon,
  IconSettings2,
  IconUsers
} from "@tabler/icons-react";

export type NavLinkRoute = {
  href?: string;
  label: ReactNode;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  children?: NavLinkRoute[];
};

const routes: NavLinkRoute[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: IconHome
  },
  {
    label: "User",
    icon: IconUserCircle,
    children: [
      {
        href: "/dashboard/user",
        label: "Users List",
        icon: IconFocus
      },
      {
        href: "/dashboard/user/add-new",
        label: "Add New User",
        icon: IconFocus
      }
    ]
  },
  {
    label: "Customer",
    icon: IconUsers,
    children: [
      {
        href: "/dashboard/customer",
        label: "Customer List",
        icon: IconFocus
      }
    ]
  },
  {
    label: "Supplier",
    icon: IconUsers,
    children: [
      {
        href: "/dashboard/supplier",
        label: "Supplier List",
        icon: IconFocus
      }
    ]
  },
  {
    label: "Job",
    icon: IconTool,
    children: [
      {
        href: "/dashboard/job",
        label: "Jobs List",
        icon: IconFocus
      },
      {
        href: "/dashboard/job/add-new",
        label: "Add New Job",
        icon: IconFocus
      },
      {
        href: "/dashboard/job/purchases",
        label: "Purchases",
        icon: IconFocus
      }
    ]
  },

  {
    label: "Accounting",
    icon: IconCalculator,
    children: [
      {
        href: "/dashboard/accounting/invoices",
        label: "Invoices",
        icon: IconFocus
      },
      {
        href: "/dashboard/accounting/profit-loss",
        label: "Profit Loss",
        icon: IconFocus
      },
      {
        href: "/dashboard/accounting/expenses",
        label: "Expenses",
        icon: IconFocus
      },
      {
        href: "/dashboard/accounting/daybook",
        label: "Day Book",
        icon: IconFocus
      }
    ]
  },
  {
    label: "Settings",
    icon: IconSettings2,
    children: [
      {
        href: "/dashboard/settings/model",
        label: "Model",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/brand",
        label: "Brand",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/issue",
        label: "Issue",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/part",
        label: "Part",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/expense-type",
        label: "Expense Types",
        icon: IconFocus
      }
    ]
  }
];

export default routes;
