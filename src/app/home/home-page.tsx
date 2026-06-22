import AboutSection from "./sections/about-section";
import BuildSection from "./sections/build-section";
import CaseStudySection from "./sections/case-study-section";
import ContactSection from "./sections/contact-section";
import FeaturedWorkSection from "./sections/featured-work-section";
import HeroSection from "./sections/hero-section";
import SkillsSection from "./sections/skills-section";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedWorkSection />
      <BuildSection />
      <SkillsSection />
      <CaseStudySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
