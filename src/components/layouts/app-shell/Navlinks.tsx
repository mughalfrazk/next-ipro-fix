"use client"

import Link from "next/link"
import { NavLink, Title } from "@mantine/core"
import { useRouter, usePathname } from "next/navigation"
import classes from "./Navlinks.module.css"

import routes, { NavLinkRoute } from "./routes"

const navlinkProps = (item: NavLinkRoute) => ({
  component: Link,
  href: item.href,
  label: (
    <Title order={5} fw={500} ms={6} opacity={0.8}>
      {item.label}
    </Title>
  ),
  px: 25,
  py: 12,
  leftSection: <item.icon />,
})

const Navlinks = () => {
  const router = useRouter()
  const pathname = usePathname()

  const onParentNavlinkClick = (item: NavLinkRoute) => {
    if (!!item.children?.length && item.href) {
      router.push(item.href)
    }
  }

  return routes.map((item, i) =>
    !!item.children?.length ? (
      <NavLink
        key={i}
        classNames={classes}
        {...navlinkProps(item)}
        active={pathname === item.href}
        onClick={() => onParentNavlinkClick(item)}
      >
        {item.children.map((subItem, j) => (
          <NavLink
            key={j}
            classNames={classes}
            {...navlinkProps(subItem)}
            active={pathname === subItem.href}
          />
        ))}
      </NavLink>
    ) : (
      <NavLink key={i} classNames={classes} {...navlinkProps(item)} />
    ),
  )
}

export default Navlinks
