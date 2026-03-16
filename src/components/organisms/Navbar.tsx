import { useState, useEffect, useCallback } from "react";
import { Logo } from "../atoms/Logo";
import { NavGroup } from "../molecules/NavGroup";
import { AuthActions } from "../molecules/AuthActions";
import { MobileMenuPanel } from "../molecules/MobileMenuPanel";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-[background-color,backdrop-filter] duration-300 ${scrolled ? "bg-brand-black/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <NavGroup items={NAV_ITEMS} className="hidden md:flex" />

        <AuthActions className="hidden md:flex" />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="inline-flex items-center justify-center text-brand-gray hover:text-brand-white md:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenuPanel
        items={NAV_ITEMS}
        isOpen={menuOpen}
        onClose={closeMenu}
      />
    </header>
  );
}
