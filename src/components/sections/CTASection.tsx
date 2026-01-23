import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gold-gradient opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            
            {/* Content */}
            <div className="relative py-16 md:py-24 px-8 md:px-16 text-center">
              <h2 className="heading-lg mb-6">
                Ready to{' '}
                <span className="text-gold-gradient">Transform Your Business?</span>
              </h2>
              <p className="body-lg max-w-2xl mx-auto mb-10">
                Let's discuss how we can help you achieve your digital goals. 
                Get a free consultation and project estimate today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
