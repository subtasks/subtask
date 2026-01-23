import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutSnapshot />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
