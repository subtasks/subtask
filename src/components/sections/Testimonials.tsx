import { Quote } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const testimonials = [
  {
    quote: "Subtasks transformed our outdated systems into a modern, efficient platform. The results exceeded our expectations.",
    author: "Sonal Rungta",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "Professional, responsive, and incredibly skilled. They delivered our project on time and within budget.",
    author: "Shankar Singh",
    role: "Founder, Innovate Labs",
  },
  {
    quote: "Their automation solutions saved us hundreds of hours. The ROI was visible within the first month.",
    author: "Hemayush Darshan",
    role: "COO, Scale Digital",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg mb-6">
              What Our Clients{' '}
              <span className="text-gold-gradient">Say About Us</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors h-full flex flex-col">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <blockquote className="text-foreground mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
