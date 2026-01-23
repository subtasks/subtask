import { Link } from 'react-router-dom';
import { Globe, Code, TrendingUp, Cloud, ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { CTASection } from '@/components/sections/CTASection';

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Create stunning, high-performance websites and web applications that captivate your audience and drive conversions.',
    features: [
      'Custom website design and development',
      'Responsive and mobile-first approach',
      'E-commerce solutions',
      'Content management systems',
      'Performance optimization',
      'SEO-friendly architecture',
    ],
    technologies: ['React', 'Java', 'TypeScript', 'HTML-5', 'CSS-3', 'REST API', 'Redux', 'Node.js'],
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Development & Automation',
    description: 'Build custom software solutions that streamline your operations and automate repetitive tasks for maximum efficiency.',
    features: [
      'Custom software development',
      'Business process automation',
      'API development and integration',
      'Legacy system modernization',
      'Quality assurance and testing',
      'Ongoing maintenance and support',
    ],
    technologies: ['Java', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & IT Solutions',
    description: 'Scalable cloud infrastructure and IT consulting services that prepare your business for growth and digital transformation.',
    features: [
      'Cloud setup',
      'Infrastructure as code',
      'DevOps implementation',
      'Security and compliance',
      'Disaster recovery planning',
      'IT consulting and strategy',
    ],
    technologies: ['AWS', 'Docker', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing Solutions',
    description: 'Data-driven marketing strategies that increase your visibility, attract qualified leads, and grow your customer base.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing',
      'Content marketing strategy',
      'Email marketing campaigns',
      'Analytics and reporting',
    ],
    technologies: ['Google Ads', 'Meta Ads', 'Analytics', 'HubSpot', 'Mailchimp'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                  Our Services
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-xl mb-6">
                  Solutions That Drive{' '}
                  <span className="text-gold-gradient">Real Results</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-lg">
                  From concept to deployment, we offer comprehensive services designed
                  to accelerate your digital journey and maximize ROI.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-20">
          <div className="container-custom space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div
                  id={service.id}
                  className="scroll-mt-24 p-8 md:p-12 bg-card rounded-3xl border border-border"
                >
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="heading-md">{service.title}</h2>
                      </div>
                      <p className="body-md mb-8">{service.description}</p>

                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} className="text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="gold" asChild>
                        <Link to="/contact">
                          Get a Quote
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    </div>

                    {/* Technologies */}
                    <div className="lg:flex lg:items-center">
                      <div className="p-8 bg-background rounded-2xl border border-border w-full">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                          Technologies We Use
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
