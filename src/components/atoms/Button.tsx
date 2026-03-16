import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonOwnProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-brand-black font-semibold hover:bg-brand-green-light active:bg-brand-green-dark",
  secondary:
    "border border-brand-green text-brand-green font-semibold hover:bg-brand-green/10 active:bg-brand-green/20",
  ghost: "text-brand-gray hover:text-brand-white",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-150 ease-out hover:-translate-y-0.5 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
