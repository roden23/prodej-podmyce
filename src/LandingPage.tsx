import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import PlotDetails from "./components/sections/PlotDetails";
import LocationDetails from "./components/sections/LocationDetails";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PlotDetails />
        <LocationDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
