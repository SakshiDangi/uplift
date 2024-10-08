import FaqSection from "./Components/Sections/FaqSection/FaqSection";
import ScrollingText from "./Components/ScrollingText/ScrollingText";
import ContactSection from "./Components/Sections/ContactSection/ContactSection";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import PorfoliosSection from "./Components/Sections/PorfoliosSection/PorfoliosSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <ServicesSection /> */}
      <div className="py-10 border-y-2">
        <ScrollingText direction="left" />
        <ScrollingText />
      </div>
      {/* <PorfoliosSection /> */}
      <FaqSection />
      <ContactSection />
    </main>
  );
}
