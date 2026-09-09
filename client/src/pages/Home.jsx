import { Navbar } from "../components/Navbar";
import { HexagonBackground } from "@/components/HexagonBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HexagonBackground className="absolute inset-0 pointer-events-auto" />
      </div>

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
