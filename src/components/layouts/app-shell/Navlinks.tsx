"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NavLink, Title } from "@mantine/core";
import classes from "./Navlinks.module.css";

import routes, { NavLinkRoute } from "./routes";
import { ButtonHTMLAttributes } from "react";

const navlinkProps = (item: NavLinkRoute) => ({
  renderRoot: (props: LinkProps) =>
    item.href ? (
      <Link {...(props as LinkProps)} href={item.href ?? "#"} />
    ) : (
      <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
    ),
  label: (
    <Title order={5} fw={500} ms={6} opacity={0.8}>
      {item.label}
    </Title>
  ),
  px: 25,
  py: 12,
  leftSection: <item.icon />
});

const Navlinks = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onParentNavlinkClick = (item: NavLinkRoute) => {
    if (!!item.children?.length && item?.href) {
      router.push(item.href);
    }
  };

  return routes.map((item, i) =>
    !!item.children?.length ? (
      <NavLink
        key={i}
        classNames={classes}
        {...navlinkProps(item)}
        active={pathname === item?.href}
        onClick={() => onParentNavlinkClick(item)}
      >
        {item.children.map((subItem, j) => (
          <NavLink
            key={j}
            classNames={classes}
            {...navlinkProps(subItem)}
            active={pathname === subItem?.href}
          />
        ))}
      </NavLink>
    ) : (
      <NavLink key={i} classNames={classes} {...navlinkProps(item)} />
    )
  );
};

export default Navlinks;
