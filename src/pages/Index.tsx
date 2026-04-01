import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background page-fade-in">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
