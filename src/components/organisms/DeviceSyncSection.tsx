import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function DeviceSyncSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="bg-brand-green/5 px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      style={{ contain: "content" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Dashboard mockup */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-brand-gray-dark/20 bg-brand-black-light p-6">
              {/* Dashboard UI mock */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 rounded bg-brand-green/20" />
                  <div className="flex gap-2">
                    {["D", "W", "M"].map((label) => (
                      <span
                        key={label}
                        className={`rounded-md px-3 py-1 text-xs font-medium ${label === "W" ? "bg-brand-green text-brand-black" : "text-brand-gray"}`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chart area */}
                <div className="h-48 rounded-xl bg-brand-black p-4">
                  <svg
                    viewBox="0 0 400 120"
                    className="h-full w-full"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#22c55e"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#22c55e"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 80 Q50 60 100 70 T200 40 T300 55 T400 20"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 80 Q50 60 100 70 T200 40 T300 55 T400 20 V120 H0Z"
                      fill="url(#chartGrad)"
                    />
                  </svg>
                </div>

                {/* Stat cards overlaid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "1,847", label: "Avg. Calories", trend: "-12%" },
                    { value: "142g", label: "Avg. Protein", trend: "+8%" },
                    { value: "4.2k", label: "Steps Today", trend: "+24%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-brand-black p-3"
                    >
                      <div className="text-lg font-bold text-brand-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-brand-gray">
                        {stat.label}
                      </div>
                      <div
                        className={`mt-1 text-xs font-medium ${stat.trend.startsWith("+") ? "text-brand-green" : "text-red-400"}`}
                      >
                        {stat.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal order-1 flex flex-col items-start gap-6 lg:order-2 reveal-delay-1">
            <Text size="sm" color="green" weight="semibold">
              Dashboard
            </Text>
            <Heading level={2} className="text-brand-white">
              Syncs with your favorite devices
            </Heading>
            <Text color="muted" size="lg" className="max-w-lg">
              Connect your smartwatch, fitness tracker, or phone to
              automatically sync your activity data. Get a unified view of your
              calories in and calories out, all in one dashboard.
            </Text>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Apple Watch", "Fitbit", "Garmin", "Google Fit"].map(
                (device) => (
                  <span
                    key={device}
                    className="rounded-full border border-brand-gray-dark/30 px-4 py-1.5 text-xs font-medium text-brand-gray"
                  >
                    {device}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
