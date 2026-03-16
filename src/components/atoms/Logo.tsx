interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const fill = variant === "light" ? "#fafafa" : "#0a0a0a";
  const accent = "#22c55e";

  return (
    <a
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="CalTrack home"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill={accent} />
        <path
          d="M10 22V10h4l4 7 4-7h4v12h-3.5v-7.5L19 19h-2.5l-3.5-4.5V22H10Z"
          fill={fill === "#fafafa" ? "#0a0a0a" : "#fafafa"}
        />
      </svg>
      <span className="text-lg font-bold" style={{ color: fill }}>
        Cal<span style={{ color: accent }}>Track</span>
      </span>
    </a>
  );
}
