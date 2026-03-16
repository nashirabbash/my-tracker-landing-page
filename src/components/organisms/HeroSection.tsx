import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col items-start gap-6">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <span className="inline-block rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold text-brand-green">
                Smart Calorie Tracking
              </span>
            </div>

            <Heading
              level={1}
              className="animate-fade-in-up text-brand-white"
              style={{ animationDelay: "0.1s" } as React.CSSProperties}
            >
              Track your calories{" "}
              <span className="text-brand-green">easily</span> with us
            </Heading>

            <Text
              size="lg"
              color="muted"
              className="animate-fade-in-up max-w-lg"
              style={{ animationDelay: "0.2s" } as React.CSSProperties}
            >
              Monitor your daily intake, track macronutrients, and reach your
              body goals with our intelligent calorie tracking platform.
            </Text>

            <div
              className="animate-fade-in-up flex flex-wrap gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <Button as="a" href="#signup" variant="primary" size="lg">
                Get Started
              </Button>
              <Button as="a" href="#features" variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div
            className="animate-fade-in-up relative flex justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-brand-green/10 blur-3xl" />
              <img
                src="/images/SignUp Page 4.png"
                alt="Hero Image"
                height={100}
                className="relative z-10 object-cover h-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
