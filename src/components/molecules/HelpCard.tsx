import type { ReactNode } from "react";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

interface HelpCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function HelpCard({
  icon,
  title,
  description,
  className = "",
}: HelpCardProps) {
  return (
    <div
      className={`group flex flex-col items-center gap-4 rounded-2xl border border-brand-gray-dark/30 bg-brand-black-light p-6 text-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-brand-green/30 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-colors duration-200 group-hover:bg-brand-green/20">
        {icon}
      </div>
      <Heading level={5} className="text-brand-white">
        {title}
      </Heading>
      <Text size="sm" color="muted">
        {description}
      </Text>
    </div>
  );
}
