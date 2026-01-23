import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: 'https://subtasks.medium.com/' },
    // { name: 'Careers', path: '/careers' },
  ],
  services: [
    { name: 'Web Development', path: '/services#web-development' },
    { name: 'Software Solutions', path: '/services#software' },
    { name: 'Cloud & IT Solutions', path: '/services#cloud' },
    { name: 'Digital Marketing', path: '/services#marketing' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/subtasks-team-b71a08397', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586894243982&mibextid=rS40aB7S9Ucbxw6v', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/subtaskinfo?igsh=MTc1dXYxb2lhZm53Yg==', label: 'Instagram' },
];

export const Footer = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              {!imgError ? (<img src="/favicon.png" alt="Subtask" className="rounded-lg bg-gold-gradient h-10 w-10 flex items-center justify-center object-cover" />) :
                (<div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">S</span>
                </div>)}
              <span className="text-xl font-semibold text-foreground">SubTask</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming ideas into digital excellence. We craft innovative solutions
              that drive business growth and digital transformation.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:subtask.info@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>subtask.info@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span>Karond, Bhopal (M.P), 462038</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-muted-foreground" />
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <a
                    href="tel:+918709952821"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    8709952821
                  </a>
                  <span className="text-muted-foreground hidden sm:inline">|</span>

                  <a
                    href="tel:+919973565868"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    9973565868
                  </a>

                  <span className="text-muted-foreground hidden sm:inline">|</span>

                  <a
                    href="tel:+919617432190"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    9617432190
                  </a>
                </div>
              </div>


            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SubTask. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
