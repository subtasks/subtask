import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { CTASection } from '@/components/sections/CTASection';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every decision we make is focused on delivering measurable outcomes for your business.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication and honest assessments at every stage of our partnership.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We invest in understanding your unique challenges.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies to keep you ahead of the competition.',
  },
];

const About = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-custom">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                  About SubTask
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-xl mb-6">
                  Building the Future of{' '}
                  <span className="text-gold-gradient">Digital Business</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-lg max-w-2xl">
                  We're a team of passionate technologists, designers, and strategists
                  united by a single mission: to help businesses thrive in the digital age.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection>
                <div className="space-y-6">
                  <h2 className="heading-lg">
                    Our <span className="text-gold-gradient">Story</span>
                  </h2>
                  <p className="body-md">
                    Subtask was founded with a simple belief: technology should empower
                    businesses, not complicate them. Too often, we saw companies struggling
                    with outdated systems, fragmented solutions, and vendors who didn't
                    understand their needs.
                  </p>
                  <p className="body-md">
                    We set out to change that. Today, Subtask is a trusted partner to
                    businesses of all sizes, from ambitious startups to established
                    enterprises. We don't just deliver projects—we build lasting
                    relationships and solutions that grow with you.
                  </p>
                  <Button variant="gold-outline" asChild>
                    <Link to="/contact">
                      Work With Us
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl bg-secondary border border-border overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-gold-gradient flex items-center justify-center glow-gold">
                        {!imgError ? (
                          <img src="/favicon.png" alt="Subtask" className="rounded-lg bg-gold-gradient h-32 w-32 flex items-center justify-center object-cover" />) : (<span className="text-5xl font-bold text-primary-foreground">S</span>)}
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 w-28 h-28 rounded-xl bg-primary/10 animate-float" />
                    <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-primary/15" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="p-10 bg-card rounded-3xl border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-md mb-4">Our Mission</h3>
                  <p className="body-md">
                    To empower businesses with innovative technology solutions that drive
                    growth, efficiency, and competitive advantage. We believe every
                    organization deserves access to world-class digital tools and expertise.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-10 bg-card rounded-3xl border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-md mb-4">Our Vision</h3>
                  <p className="body-md">
                    To be the most trusted technology partner for businesses worldwide,
                    known for our exceptional quality, innovative solutions, and unwavering
                    commitment to client success.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                  Our Values
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="heading-lg">
                  What <span className="text-gold-gradient">Drives Us</span>
                </h2>
              </AnimatedSection>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
