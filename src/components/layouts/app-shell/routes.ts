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
  role?: string[];
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
    role: ["super_admin", "admin"],
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
    role: ["super_admin", "admin", "receptionist", "technician"],
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
    role: ["super_admin", "admin"],
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
        icon: IconFocus,
        role: ["super_admin", "admin"]
      }
    ]
  },

  {
    label: "Accounting",
    icon: IconCalculator,
    role: ["super_admin", "admin", "accountant"],
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
    role: ["super_admin", "admin"],
    children: [
      {
        href: "/dashboard/settings/model",
        label: "Models",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/brand",
        label: "Brands",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/issue",
        label: "Issues",
        icon: IconFocus
      },
      {
        href: "/dashboard/settings/part",
        label: "Parts",
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
