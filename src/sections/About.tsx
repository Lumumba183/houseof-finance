import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PerspectiveTextReveal from '../components/PerspectiveTextReveal';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '200+', label: 'Transactions Advised' },
  { value: '$2B+', label: 'Capital Deployed' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // SVG stroke draw animation
      if (monogramRef.current) {
        const paths = monogramRef.current.querySelectorAll('.hf-monogram path');
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.inOut',
          stagger: 0.2,
          scrollTrigger: {
            trigger: monogramRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 1,
          },
        });
      }

      // Body text fade in
      if (bodyRef.current) {
        const paragraphs = bodyRef.current.querySelectorAll('p, blockquote');
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: bodyRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Metrics count up
      if (metricsRef.current) {
        const metricItems = metricsRef.current.querySelectorAll('.metric-item');
        metricItems.forEach((item) => {
          const valueEl = item.querySelector('.metric-value');
          if (valueEl) {
            const finalText = valueEl.textContent || '';
            const numericValue = parseFloat(finalText.replace(/[^0-9.]/g, ''));
            const prefix = finalText.match(/^[^0-9]*/)?.[0] || '';
            const suffix = finalText.match(/[^0-9]*$/)?.[0] || '';

            gsap.fromTo(
              { val: 0 },
              { val: 0 },
              {
                val: numericValue,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 85%',
                },
                onUpdate: function () {
                  const current = Math.floor(this.targets()[0].val);
                  valueEl.textContent = `${prefix}${current}${suffix}`;
                },
              }
            );
          }
        });

        gsap.fromTo(
          metricItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-parchment section-padding relative overflow-hidden"
    >
      {/* SVG Monogram */}
      <div ref={monogramRef} className="hf-monogram-wrapper">
        <svg
          className="hf-monogram"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40,160 L40,40 L40,100 L100,100" />
          <path d="M100,100 L100,160" />
          <path d="M130,160 L130,40" />
          <path d="M130,40 L180,40" />
          <path d="M130,90 L170,90" />
        </svg>
      </div>

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - 55% */}
          <div className="lg:col-span-7">
            <span className="text-caption text-rich-gold mb-6 block tracking-widest">
              ABOUT US
            </span>

            <PerspectiveTextReveal
              text="Execution Before Capital"
              tag="h2"
              className="text-section-heading text-deep-navy font-heading mb-8"
            />
          </div>

          {/* Right Column - 45% */}
          <div ref={bodyRef} className="lg:col-span-5">
            <p className="text-body-large text-[#2D2D3A] mb-6">
              House of Finance is a premium financial advisory and investment
              boutique firm based in Nairobi, Kenya. Founded on the principle
              that robust operational execution takes precedence over raw
              capital, we bridge the gap between ambitious local enterprises and
              sophisticated global investment networks.
            </p>

            <blockquote className="border-l-[3px] border-rich-gold pl-6 my-8">
              <p className="text-body italic text-deep-navy mb-4">
                &ldquo;In the modern African economic landscape, capital is rarely
                the primary bottleneck — it is execution. True sustainable growth
                requires a fortress of financial infrastructure, accurate
                corporate valuations, and data-driven strategy. At House of
                Finance, we partner with visionary entrepreneurs to build that
                exact foundation, ensuring they are investment-ready from day
                one.&rdquo;
              </p>
              <cite className="text-caption text-deep-navy not-italic">
                — Omondi Solomon, Chief Executive Officer
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Key Metrics */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-mist"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-item text-center">
              <div className="metric-value text-5xl font-heading text-rich-gold font-medium mb-2">
                {metric.value}
              </div>
              <div className="text-caption text-deep-navy">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
