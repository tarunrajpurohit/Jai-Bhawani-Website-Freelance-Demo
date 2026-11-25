import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { MenuCategoriesSection } from "@/components/menu-categories-section";
import { StoreLocatorSection } from "@/components/store-locator-section";
import { TwentyFiveYearsSection } from "@/components/twenty-five-years-section";
import { CommunityGridSection } from "@/components/community-grid-section";
import { CateringCtaSection } from "@/components/catering-cta-section";
import { UspSection } from "@/components/usp-section";
import { DirectorSection } from "@/components/director-section";
import { FranchiseSection } from "@/components/franchise-section";
import { ConnectAndFooter } from "@/components/connect-and-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffeed] overflow-x-hidden">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <MenuCategoriesSection />
        <StoreLocatorSection />
        <TwentyFiveYearsSection />
        <CommunityGridSection />
        <CateringCtaSection />
        <UspSection />
        <DirectorSection />
        <FranchiseSection />
      </main>
      <ConnectAndFooter />
    </div>
  );
}
