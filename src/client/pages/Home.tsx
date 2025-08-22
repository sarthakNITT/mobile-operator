import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import VideoSection from '@/components/VideoSection';
import AdvancedSection from '@/components/AdvancedSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden scroll-snap-container">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <AdvancedSection />
      <Footer />
    </div>
  );
}
