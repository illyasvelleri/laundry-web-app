import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Solutions />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
}
