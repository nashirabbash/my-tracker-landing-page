import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ShowcaseCard } from "../molecules/ShowcaseCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const SHOWCASES = [
  {
    label: "Meal Planning",
    alt: "Person planning meals with fresh ingredients",
    color: "from-brand-green/40",
  },
  {
    label: "Weight Training",
    alt: "Person tracking workouts at the gym",
    color: "from-brand-green/30",
  },
  {
    label: "Healthy Cooking",
    alt: "Fresh healthy meal being prepared",
    color: "from-brand-green/20",
  },
  {
    label: "Active Lifestyle",
    alt: "Person running outdoors with fitness tracker",
    color: "from-brand-green/40",
  },
];

export function SocialProofSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className="px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ contain: "content" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <Text size="sm" color="green" weight="semibold" className="mb-3">
            Community
          </Text>
          <Heading level={2} className="text-brand-white mb-4">
            Whether you're tracking your intake or building new habits
          </Heading>
          <Text color="muted" size="lg">
            Join thousands who have transformed their relationship with food
            through mindful tracking.
          </Text>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="reveal -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scroll-smooth md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0">
          {SHOWCASES.map((item, i) => (
            <ShowcaseCard
              key={item.label}
              src={`https://picsum.photos/seed/${item.label.toLowerCase().replace(" ", "")}/400/500`}
              alt={item.alt}
              label={item.label}
              className={`reveal-delay-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
