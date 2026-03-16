interface IconProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
  label?: string;
}

export function Icon({
  children,
  size = 24,
  className = "",
  label,
}: IconProps) {
  return (
    <span
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={!label}
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}
