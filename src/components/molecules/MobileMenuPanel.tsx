import { useEffect, useRef } from "react";
import { NavLink } from "../atoms/NavLink";
import { Button } from "../atoms/Button";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuPanelProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuPanel({
  items,
  isOpen,
  onClose,
}: MobileMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 bg-brand-black-light p-6 transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClose}
          className="self-end text-brand-gray hover:text-brand-white transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-4">
          {items.map((item) => (
            <NavLink key={item.href} href={item.href} className="text-base">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Button
            as="a"
            href="#login"
            variant="secondary"
            size="md"
            className="w-full"
          >
            Log in
          </Button>
          <Button
            as="a"
            href="#signup"
            variant="primary"
            size="md"
            className="w-full"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}
