import type { ReactNode } from "react";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
        {icon}
      </div>
      <Heading level={4} className="text-brand-white">
        {title}
      </Heading>
      <Text size="sm" color="muted">
        {description}
      </Text>
    </div>
  );
}
