import Link from "next/link";
import { NavLink, Title } from "@mantine/core";
import routes, { NavLinkRoute } from "./routes";

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
  leftSection: <item.icon opacity={0.4} />,
});

const Navlinks = () => {
  return routes.map((item, i) =>
    !!item.children?.length ? (
      <NavLink key={i} {...navlinkProps(item)}>
        {item.children.map((subItem, j) => (
          <NavLink key={j} {...navlinkProps(subItem)} />
        ))}
      </NavLink>
    ) : (
      <NavLink key={i} {...navlinkProps(item)} />
    )
  );
};

export default Navlinks;
