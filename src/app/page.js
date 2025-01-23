import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/heroSection";
import ProfileSection from "@/components/profileSection";
import SkillSection from "@/components/skillsSection";
import BestProjectSection from "@/components/bestprojectsection";
import OtherProjectSection from "@/components/otherprojectsection";
import DesignPortSection from "@/components/DesignPortSection";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact/contactsection";
import ExperienceSection from "@/components/experiencesection";

export default function Home() {
  return (
    <main>
    <Header />
    <Hero />
    <ProfileSection/>
    <SkillSection />
    <ExperienceSection/>
    <BestProjectSection/>
    <OtherProjectSection />
    <DesignPortSection />
    <ContactSection />
    <Footer />
    </main>
  );
}
