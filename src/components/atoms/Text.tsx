import type { CSSProperties, ReactNode } from "react";

interface TextProps {
  size?: "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold";
  color?: "default" | "muted" | "green";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const sizeMap: Record<string, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const weightMap: Record<string, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const colorMap: Record<string, string> = {
  default: "text-brand-white",
  muted: "text-brand-gray",
  green: "text-brand-green",
};

export function Text({
  size = "base",
  weight = "normal",
  color = "muted",
  children,
  className = "",
  style,
}: TextProps) {
  return (
    <p
      className={`${sizeMap[size]} ${weightMap[weight]} ${colorMap[color]} ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}
