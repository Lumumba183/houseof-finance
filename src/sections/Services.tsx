import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    number: '01',
    title: 'Investment Banking',
    fullTitle: 'Investment Banking & Advisory',
    description:
      'We act as the strategic link between high-growth ventures and private capital markets. Our team advises founders, family offices, and funds on capital structure optimization, deal sourcing, and regional positioning within the hospitality, technology, and logistics ecosystems.',
    image: '/images/service-cube-texture-1.jpg',
  },
  {
    number: '02',
    title: 'Valuation & Modeling',
    fullTitle: 'Corporate Valuation & Modeling',
    description:
      'We build institutional-grade financial models and perform exhaustive business valuations. Whether you are prepping for a capital injection, resolving partner disputes, or benchmarking performance, our mathematical projections give you an unassailable data room for investor reviews.',
    image: '/images/service-cube-texture-2.jpg',
  },
  {
    number: '03',
    title: 'M&A Advisory',
    fullTitle: 'M&A Support & Transaction Advisory',
    description:
      'Navigating Mergers and Acquisitions requires deep transactional foresight. We provide end-to-end support for buy-side and sell-side transactions, managing corporate due diligence, structuring deal terms, and optimizing asset pricing to protect stakeholder value.',
    image: '/images/service-cube-texture-3.jpg',
  },
  {
    number: '04',
    title: 'Financial Infrastructure',
    fullTitle: 'SME Financial Infrastructure',
    description:
      'Long-term corporate growth relies on pristine daily accounting. We clean up and manage small and medium enterprise financial ecosystems, handling corporate bookkeeping, rigorous tax compliance, management reporting, and scalable regional payment solutions.',
    image: '/images/service-cube-texture-4.jpg',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current || !progressRef.current)
      return;

    const ctx = gsap.context(() => {
      // Pin the sticky container and drive progress
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: stickyRef.current,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * 4),
            3
          );
          setActiveIndex(newIndex);

          // Update progress bar
          if (progressRef.current) {
            progressRef.current.style.width = `${progress * 100}%`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-deep-navy"
      style={{ height: '400vh' }}
    >
      <div
        ref={stickyRef}
        className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      >
        {/* Section Label */}
        <span className="absolute top-8 left-8 text-caption text-rich-gold tracking-widest z-20">
          WHAT WE DO
        </span>

        {/* Central Visual */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative w-[70vmin] h-[70vmin] max-w-[600px] max-h-[600px]">
            {/* Rotating cube faces */}
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: `rotateY(${activeIndex === i ? 0 : 90}deg) scale(${activeIndex === i ? 1 : 0.8})`,
                }}
              >
                <img
                  src={pillar.image}
                  alt={pillar.fullTitle}
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    filter: 'brightness(0.7)',
                  }}
                />
              </div>
            ))}

            {/* Center overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <span className="text-8xl font-heading text-rich-gold/30 font-bold">
                  {pillars[activeIndex].number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Navigation - Left */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6">
          {pillars.map((pillar, i) => (
            <button
              key={pillar.number}
              onClick={() => {
                const section = sectionRef.current;
                if (section) {
                  const sectionHeight = section.offsetHeight;
                  const targetScroll =
                    section.offsetTop + (sectionHeight / 4) * i;
                  gsap.to(window, {
                    duration: 0.8,
                    scrollTo: targetScroll,
                    ease: 'power2.inOut',
                  });
                }
              }}
              className={`text-left transition-all duration-300 ${
                activeIndex === i
                  ? 'text-white'
                  : 'text-warm-stone/50 hover:text-warm-stone'
              }`}
            >
              <span className="text-caption block mb-1">{pillar.number}</span>
              <span className="font-heading text-lg">{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Description - Bottom Right */}
        <div className="absolute bottom-24 right-8 z-20 max-w-md text-right hidden md:block">
          <div className="relative overflow-hidden">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className="transition-all duration-400"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: `translateY(${activeIndex === i ? 0 : 20}px)`,
                  position: activeIndex === i ? 'relative' : 'absolute',
                  pointerEvents: activeIndex === i ? 'auto' : 'none',
                }}
              >
                <h3 className="text-subheading text-parchment mb-3">
                  {pillar.fullTitle}
                </h3>
                <p className="text-body text-warm-stone">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Description */}
        <div className="md:hidden absolute bottom-20 left-4 right-4 z-20 text-center">
          <h3 className="text-subheading text-parchment mb-2">
            {pillars[activeIndex].fullTitle}
          </h3>
          <p className="text-sm text-warm-stone line-clamp-3">
            {pillars[activeIndex].description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
          <div
            ref={progressRef}
            className="h-full bg-rich-gold transition-none"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </section>
  );
}
