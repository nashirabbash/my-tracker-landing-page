import { Logo } from "../atoms/Logo";
import { Text } from "../atoms/Text";
import { FooterLinkGroup } from "../molecules/FooterLinkGroup";

const FOOTER_LINKS = [
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-dark/20 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo />
            <Text size="sm" color="muted" className="max-w-xs">
              The smart way to track your calories, macros, and fitness goals.
              Built for people who care about what they eat.
            </Text>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <FooterLinkGroup
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-gray-dark/20 pt-8 sm:flex-row">
          <Text size="sm" color="muted">
            &copy; {new Date().getFullYear()} CalTrack. All rights reserved.
          </Text>
          <div className="flex gap-4">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-brand-gray transition-colors duration-150 hover:text-brand-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
