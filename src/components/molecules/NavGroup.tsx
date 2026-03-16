import { NavLink } from "../atoms/NavLink";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroupProps {
  items: NavItem[];
  className?: string;
}

export function NavGroup({ items, className = "" }: NavGroupProps) {
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
