import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import HighlightReel from '@/components/HighlightReel';
import TeamPortfolio from '@/components/TeamPortfolio';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* Services */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Highlight Reel */}
      <div id="highlight-reel">
        <HighlightReel />
      </div>

      {/* Team & Portfolio */}
      <div id="team-portfolio">
        <TeamPortfolio />
      </div>

      {/* About Us */}
      <div id="about-us">
        <AboutUs />
      </div>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}