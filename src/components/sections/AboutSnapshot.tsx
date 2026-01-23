import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                About SubTask
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-lg mb-6">
                Your Partner in{' '}
                <span className="text-gold-gradient">Digital Transformation</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-md mb-6">
                SubTask is a premium IT solutions company dedicated to turning complex
                challenges into elegant digital solutions. We don't just build products;
                we craft experiences that drive growth and innovation.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="body-md mb-8">
                Our mission is to empower businesses with technology that scales. Whether
                you're a startup finding your footing or an enterprise seeking optimization,
                we're the technical partner you can trust.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <Button variant="gold-outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>

          {/* Stats Grid */}
          <AnimatedSection delay={0.3} direction="right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '50+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '7+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
