import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target, offsetY: 80 },
        ease: 'power3.inOut',
      });
    }
  };

  return (
    <footer className="bg-charcoal py-16">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="brand-wordmark text-parchment mb-2">
              HOUSE OF FINANCE
            </h3>
            <p className="text-caption text-warm-stone mb-2">
              Execution Before Capital
            </p>
            <p className="text-caption text-warm-stone/60">
              Nairobi, Kenya
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="text-caption text-rich-gold mb-6 tracking-widest">
              NAVIGATION
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-nav text-warm-stone hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <p className="text-caption text-rich-gold mb-6 tracking-widest">
              CONTACT
            </p>
            <div className="space-y-3">
              <p className="text-body text-warm-stone">
                +254 729 004 596
              </p>
              <p className="text-body text-warm-stone">
                solodesita2@gmail.com
              </p>
              <p className="text-body text-warm-stone/60">
                Mon – Fri 8:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-stone/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-caption text-warm-stone/50">
            &copy; {new Date().getFullYear()} House of Finance. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-caption text-warm-stone/50 hover:text-warm-stone transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-warm-stone/30">|</span>
            <Link
              to="/terms"
              className="text-caption text-warm-stone/50 hover:text-warm-stone transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
