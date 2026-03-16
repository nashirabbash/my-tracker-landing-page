import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { HelpCard } from "../molecules/HelpCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const HELP_ITEMS = [
  {
    title: "Track food intake",
    description: "Log meals quickly with our smart search and barcode scanner.",
    icon: (
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
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
  {
    title: "Reach body goals",
    description:
      "Set weight targets and get personalized calorie recommendations.",
    icon: (
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
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Balance macros",
    description:
      "Keep your protein, carbs, and fat ratio in check at every meal.",
    icon: (
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
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    title: "Monitor calorie burn",
    description:
      "Track exercise and daily activity to see your total energy expenditure.",
    icon: (
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
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export function HelpSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ contain: "content" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <Text size="sm" color="green" weight="semibold" className="mb-3">
            Solutions
          </Text>
          <Heading level={2} className="text-brand-white mb-4">
            How can we help?
          </Heading>
          <Text color="muted" size="lg">
            Four core pillars that make calorie tracking effortless.
          </Text>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HELP_ITEMS.map((item, i) => (
            <HelpCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className={`reveal reveal-delay-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
