import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import CategoryCards from "@/components/site/CategoryCards";
import About from "@/components/site/About";
import WhyChoose from "@/components/site/WhyChoose";
import Lifestyle from "@/components/site/Lifestyle";
import Rooms from "@/components/site/Rooms";
import Gallery from "@/components/site/Gallery";
import Pricing from "@/components/site/Pricing";
import Amenities from "@/components/site/Amenities";
import Reviews from "@/components/site/Reviews";
import FAQ from "@/components/site/FAQ";
import Location from "@/components/site/Location";
import Contact from "@/components/site/Contact";
import FloatingActions from "@/components/site/FloatingActions";
import Footer from "@/components/site/Footer";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="bg-cloud">
      <Navbar />
      <Hero />
      <CategoryCards />
      <About />
      <WhyChoose />
      <Lifestyle />
      <Rooms />
      <Gallery />
      <Pricing />
      <Amenities />
      <Reviews />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}
