import { NavLink } from "../atoms/NavLink";

interface FooterLinkGroupProps {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}

export function FooterLinkGroup({
  title,
  links,
  className = "",
}: FooterLinkGroupProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="text-sm font-semibold text-brand-white">{title}</span>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
