import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { FeatureCard } from "../molecules/FeatureCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const FEATURES = [
  {
    title: "Personalized Daily Calorie Tracking",
    description:
      "Set personal goals and track your daily calorie intake with real-time updates and visual progress indicators.",
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
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "Macronutrient Calculator",
    description:
      "Automatically break down your meals into protein, carbs, and fats to maintain the perfect nutritional balance.",
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
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Exercise & Activity Tracking",
    description:
      "Log your workouts and daily activity to get a complete picture of your caloric balance throughout the day.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="features"
      className="px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ contain: "content" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <Text size="sm" color="green" weight="semibold" className="mb-3">
            Features
          </Text>
          <Heading level={2} className="text-brand-white mb-4">
            Why use our Web?
          </Heading>
          <Text color="muted" size="lg">
            Everything you need to take control of your nutrition in one simple
            platform.
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`reveal reveal-delay-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
