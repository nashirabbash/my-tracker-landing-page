import { Button } from "../atoms/Button";

interface AuthActionsProps {
  className?: string;
}

export function AuthActions({ className = "" }: AuthActionsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Button as="a" href="#login" variant="ghost" size="sm">
        Log in
      </Button>
      <Button as="a" href="#signup" variant="primary" size="sm">
        Sign Up
      </Button>
    </div>
  );
}
