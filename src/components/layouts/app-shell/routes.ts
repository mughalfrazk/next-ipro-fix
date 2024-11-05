import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react"
import {
  IconHome,
  IconTool,
  IconFocus,
  IconCalculator,
  IconUserCircle,
  IconBuildingWarehouse,
  IconProps,
  Icon,
} from "@tabler/icons-react"

export type NavLinkRoute = {
  href: string
  label: ReactNode
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  children?: NavLinkRoute[]
}

const routes: NavLinkRoute[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: IconHome,
  },
  {
    href: "/dashboard/user",
    label: "User",
    icon: IconUserCircle,
    children: [
      {
        href: "/dashboard/user/add-new",
        label: "Add New User",
        icon: IconFocus,
      },
    ],
  },
  {
    href: "/dashboard/job",
    label: "Job",
    icon: IconTool,
    children: [
      {
        href: "/dashboard/job/add-new",
        label: "Add New Job",
        icon: IconFocus,
      },
      {
        href: "/dashboard/job/purchases",
        label: "Purchases",
        icon: IconFocus,
      },
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
]

export default routes
