import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AchievementsSection from "@/app/components/AchievementsSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import Footer from "@/app/components/Footer";
import SocialSection from "@/app/components/SocialSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className={"container mt-24 mx-auto px-12 py-4"}>
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <SocialSection />
        </div>
        <Footer />
    </main>
  )
}
