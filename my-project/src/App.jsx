import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import FeatureSection from "./components/featureSection";


export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <FeatureSection/>
    </>
  );
}
