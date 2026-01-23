import { Check } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { useState } from 'react';

const features = [
  {
    title: 'Customized Solutions',
    description: 'Every project is tailored to your unique business needs and goals.',
  },
  {
    title: 'Scalability First',
    description: 'We build systems designed to grow with your business, not against it.',
  },
  {
    title: 'Modern Tech Stack',
    description: 'Leveraging cutting-edge technologies for optimal performance and security.',
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication and visibility at every stage of development.',
  },
  {
    title: 'Dedicated Support',
    description: 'Ongoing maintenance and support to keep your systems running smoothly.',
  },
  {
    title: 'Proven Results',
    description: 'Track record of delivering projects that exceed client expectations.',
  },
];

export const WhyChooseUs = () => {
  const [imgError, setImgError] = useState(false)
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Feature visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 animate-pulse-gold" />
                </div>
                <div className="absolute top-8 left-8 w-24 h-24 rounded-2xl bg-primary/20 animate-float" />
                <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-primary/15" />
                <div className="absolute top-1/3 right-8 w-16 h-16 rounded-xl bg-primary/25" />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gold-gradient flex items-center justify-center glow-gold">
                    {!imgError ? (<img src="/favicon.png" alt="Subtask" className="rounded-lg bg-gold-gradient h-24 w-24 flex items-center justify-center object-cover" />) :
                      (<div className="rounded-lg bg-gold-gradient flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-5xl">S</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div>
            <AnimatedSection>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Subtasks
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-lg mb-6">
                Built Different,{' '}
                <span className="text-gold-gradient">Delivered Better</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-md mb-8">
                We're not just another IT company. We're strategic partners committed
                to your long-term success.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
