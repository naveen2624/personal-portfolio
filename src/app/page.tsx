import CertificatePage from "@/components/CertificatePage";
import ContactPage from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <CertificatePage />
      <Resume />
      <ContactPage />
    </>
  );
};

export default Home;
