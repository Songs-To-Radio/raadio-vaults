import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import BodySection from "./BodySection"
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className={`relative max-w-[2500px]`}>
      <Navbar />
      <HeroSection/>
      <BodySection/>
      <Footer/>
    </div>
  );
}
