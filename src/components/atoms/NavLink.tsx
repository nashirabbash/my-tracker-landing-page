import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export function NavLink({
  href,
  children,
  active = false,
  className = "",
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative text-sm font-medium transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-green after:transition-transform after:duration-200 hover:text-brand-white hover:after:scale-x-100 ${active ? "text-brand-white after:scale-x-100" : "text-brand-gray"} ${className}`}
    >
      {children}
    </a>
  );
}
