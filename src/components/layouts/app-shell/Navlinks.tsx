"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NavLink, Title } from "@mantine/core";
import classes from "./Navlinks.module.css";

import routes, { NavLinkRoute } from "./routes";
import { ButtonHTMLAttributes, Fragment } from "react";
import { useProfileContext } from "@/context/profile.context";

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
  const {
    data: { role }
  } = useProfileContext();

  const onParentNavlinkClick = (item: NavLinkRoute) => {
    if (!!item.children?.length && item?.href) {
      router.push(item.href);
    }
  };

  return routes.map((item, i) => {
    if (role && !!item?.role?.length && !item?.role?.includes(role?.name)) {
      return <Fragment key={`${item.href}-${i}`}></Fragment>;
    }

    return !!item.children?.length ? (
      <NavLink
        key={`${item.href}-${i}`}
        classNames={classes}
        {...navlinkProps(item)}
        active={pathname === item?.href}
        onClick={() => onParentNavlinkClick(item)}
      >
        {item.children.map((subItem, j) => {
          if (role && !!subItem?.role?.length && !subItem?.role?.includes(role?.name)) {
            return <Fragment key={`${subItem.href}-${j}`} />;
          }

          return (
            <NavLink
              key={`${subItem.href}-${j}`}
              classNames={classes}
              {...navlinkProps(subItem)}
              active={pathname === subItem?.href}
            />
          );
        })}
      </NavLink>
    ) : (
      <NavLink key={i} classNames={classes} {...navlinkProps(item)} />
    );
  });
};

export default Navlinks;
