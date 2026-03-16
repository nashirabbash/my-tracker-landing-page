import { LandingTemplate } from "../templates/LandingTemplate";
import { Navbar } from "../components/organisms/Navbar";
import { HeroSection } from "../components/organisms/HeroSection";
import { FeaturesSection } from "../components/organisms/FeaturesSection";
import { DeviceSyncSection } from "../components/organisms/DeviceSyncSection";
import { HelpSection } from "../components/organisms/HelpSection";
import { SocialProofSection } from "../components/organisms/SocialProofSection";
import { Footer } from "../components/organisms/Footer";

export function HomePage() {
  return (
    <LandingTemplate
      navbar={<Navbar />}
      hero={<HeroSection />}
      features={<FeaturesSection />}
      deviceSync={<DeviceSyncSection />}
      help={<HelpSection />}
      socialProof={<SocialProofSection />}
      footer={<Footer />}
    />
  );
}
