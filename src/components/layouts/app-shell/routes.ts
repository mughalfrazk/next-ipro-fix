import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import {
  IconHome,
  IconTool,
  IconFocus,
  IconCalculator,
  IconUserCircle,
  IconProps,
  Icon
} from "@tabler/icons-react";

export type NavLinkRoute = {
  href: string;
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
    href: "",
    label: "User",
    icon: IconUserCircle,
    children: [
      {
        href: "/dashboard/user/users-list",
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
    href: "",
    label: "Job",
    icon: IconTool,
    children: [
      {
        href: "/dashboard/job/jobs-list",
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
    href: "/dashboard",
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
  }
];

export default routes;
