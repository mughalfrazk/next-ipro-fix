
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { NavLink, Title } from "@mantine/core";
import {
  IconHome,
  IconTool,
  IconFocus,
  IconCalculator,
  IconUserCircle,
  IconBuildingWarehouse,
  IconProps,
  Icon,
} from "@tabler/icons-react";
import Link from "next/link";

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
    icon: IconHome,
  },
  {
    href: "/dashboard",
    label: "User",
    icon: IconUserCircle,
  },
  {
    href: "/dashboard",
    label: "Job",
    icon: IconTool,
    children: [
      {
        href: "/dashboard",
        label: "Add New Job",
        icon: IconFocus,
      },
      {
        href: "/dashboard",
        label: "Purchases",
        icon: IconFocus,
      }
    ],
  },
  {
    href: "/dashboard",
    label: "Inventory",
    icon: IconBuildingWarehouse,
  },
  {
    href: "/dashboard",
    label: "Accounting",
    icon: IconCalculator,
  },
];

export default routes