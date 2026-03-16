import type { ReactNode } from "react";

interface LandingTemplateProps {
  navbar: ReactNode;
  hero: ReactNode;
  features: ReactNode;
  deviceSync: ReactNode;
  help: ReactNode;
  socialProof: ReactNode;
  footer: ReactNode;
}

export function LandingTemplate({
  navbar,
  hero,
  features,
  deviceSync,
  help,
  socialProof,
  footer,
}: LandingTemplateProps) {
  return (
    <div className="min-h-screen bg-brand-black w-screen overflow-hidden">
      <header>{navbar}</header>

      <main>
        <section>{hero}</section>
        <section>{features}</section>
        <section>{deviceSync}</section>
        <section>{help}</section>
        <section>{socialProof}</section>
      </main>

      {footer}
    </div>
  );
}
