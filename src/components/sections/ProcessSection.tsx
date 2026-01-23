import { Search, PenTool, Code, Rocket, Headphones } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your requirements, goals, and challenges.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Crafting intuitive interfaces and robust architecture.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building with clean code and industry best practices.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Rigorous testing followed by seamless deployment.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing optimization and dedicated maintenance.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Process
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg mb-6">
              From Idea to{' '}
              <span className="text-gold-gradient">Implementation</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-md">
              A streamlined approach that ensures quality, transparency, 
              and timely delivery at every stage.
            </p>
          </AnimatedSection>
        </div>

        {/* Process Steps */}
        <StaggerContainer className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative text-center group">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border border-primary text-primary text-xs flex items-center justify-center font-semibold z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};
