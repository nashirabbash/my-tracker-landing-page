import type { CSSProperties, ElementType, ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const levelClasses: Record<number, string> = {
  1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

export function Heading({
  level = 2,
  as,
  children,
  className = "",
  style,
}: HeadingProps) {
  const Component = as || (`h${level}` as ElementType);

  return (
    <Component className={`${levelClasses[level]} ${className}`} style={style}>
      {children}
    </Component>
  );
}
