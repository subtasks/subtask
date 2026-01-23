import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[A-Za-z\s.'-]+$/, 'Name can only contain letters and spaces'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(255),

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[0-9]{10,15}$/.test(val),
      'Phone number must contain only digits (10–15)'
    ),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  // console.log('contact try')
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let sanitizedValue = value;

    if (name === 'name') {
      sanitizedValue = value.replace(/[^A-Za-z\s.'-]/g, '');
    }

    if (name === 'phone') {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    // console.log('submit fired')
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          // console.log('submit error:', err.message)
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          time: new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
          form_data: JSON.stringify(formData, null, 2),
        },
        EMAILJS_PUBLIC_KEY
      );
      // console.log('submit success:')
      setIsSubmitted(true);
      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: unknown) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
                  Get In Touch
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-xl mb-6">
                  Let's Build Something{' '}
                  <span className="text-gold-gradient">Amazing Together</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-lg">
                  Have a project in mind? We'd love to hear about it.
                  Drop us a message and we'll get back to you within 24 hours.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <AnimatedSection className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="heading-md mb-6">Contact Information</h3>
                    <p className="body-md">
                      Reach out through any channel that works best for you.
                      We're here to help.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a
                      href="mailto:subtask.info@gmail.com"
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Email</div>
                        <div className="font-medium text-foreground">subtask.info@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="tel:+918709952821"
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Phone</div>
                        <div className="font-medium text-foreground">8709952821</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Office</div>
                        <div className="font-medium text-foreground">Karond, Bhopal (M.P), 462038</div>
                        <div className="text-sm text-muted-foreground">Mon - Fri, 9am - 6pm IST.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2} className="lg:col-span-2">
                <div className="p-8 md:p-10 bg-card rounded-3xl border border-border">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="heading-md mb-4">Thank You!</h3>
                      <p className="body-md mb-8">
                        Your message has been sent successfully.
                        We'll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="gold-outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', message: '' });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Atharva Verma"
                            autoComplete="name"
                            maxLength={200}
                            className={errors.name ? 'border-destructive' : ''}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="atharva65@example.com"
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="8888888888"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={6}
                          className={errors.message ? 'border-destructive' : ''}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
