import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PerspectiveTextReveal from '../components/PerspectiveTextReveal';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'House of Finance transformed how we approach capital structure. Their valuation methodology gave us the credibility we needed to close our Series B.',
    author: 'James Ochieng',
    role: 'CEO, Agritech Solutions',
  },
  {
    quote:
      'The M&A advisory was exceptional. They managed the entire due diligence process with precision that exceeded our expectations.',
    author: 'Dr. Amina Hassan',
    role: 'Founder, Mediva Health',
  },
  {
    quote:
      'Their financial infrastructure team cleaned up years of accounting backlog in months. We were investor-ready within one quarter.',
    author: 'Peter Njoroge',
    role: 'CFO, LogiChain Africa',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current!.querySelectorAll('.testimonial-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-parchment section-padding"
    >
      <div className="content-container">
        <div className="text-center mb-16">
          <span className="text-caption text-rich-gold mb-6 block tracking-widest">
            CLIENT SUCCESS
          </span>
          <PerspectiveTextReveal
            text="Trusted by East Africa's Most Ambitious Enterprises"
            tag="h2"
            className="text-section-heading text-deep-navy font-heading max-w-3xl mx-auto"
          />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card border border-mist bg-[#F5F0E4] p-8 hover:shadow-card transition-shadow duration-300"
            >
              {/* Quote mark */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-rich-gold mb-6"
              >
                <path
                  d="M4 10c0-3.31 2.69-6 6-6v2c-2.21 0-4 1.79-4 4h4v6H4v-6zm10 0c0-3.31 2.69-6 6-6v2c-2.21 0-4 1.79-4 4h4v6h-6v-6z"
                  fill="currentColor"
                />
              </svg>

              <p className="text-body text-deep-navy mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div>
                <p className="font-heading font-medium text-deep-navy">
                  {testimonial.author}
                </p>
                <p className="text-caption text-warm-stone mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
