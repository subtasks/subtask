import { Link } from 'react-router-dom';
import { Globe, Code, TrendingUp, Cloud, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Beautiful, responsive websites and web applications that captivate users and drive conversions.',
    link: '/services#web-development',
  },
  {
    icon: Code,
    title: 'Software & Automation',
    description: 'Custom software solutions that streamline operations and automate repetitive tasks.',
    link: '/services#software',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility and grow your customer base.',
    link: '/services#marketing',
  },
  {
    icon: Cloud,
    title: 'Cloud & IT Solutions',
    description: 'Scalable cloud infrastructure and IT consulting for modern businesses.',
    link: '/services#cloud',
  },
];

export const ServicesOverview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg mb-6">
              Comprehensive Solutions for{' '}
              <span className="text-gold-gradient">Every Need</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-md">
              From concept to deployment, we offer end-to-end services designed to 
              accelerate your digital journey and maximize ROI.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link 
                to={service.link}
                className="group block p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
