import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import PerspectiveTextReveal from '../components/PerspectiveTextReveal';

gsap.registerPlugin(ScrollToPlugin);

const carouselImages = [
  '/images/carousel-1.jpg',
  '/images/carousel-2.jpg',
  '/images/carousel-3.jpg',
  '/images/carousel-4.jpg',
  '/images/carousel-5.jpg',
  '/images/carousel-6.jpg',
  '/images/carousel-7.jpg',
  '/images/carousel-8.jpg',
  '/images/carousel-9.jpg',
  '/images/carousel-10.jpg',
];

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const cards = carouselRef.current.querySelectorAll('.carousel-card');
    const totalCards = cards.length;
    const radius = 500;
    let angle = 0;
    let targetAngle = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Position cards in 3D ring
    const updatePositions = () => {
      cards.forEach((card, i) => {
        const cardAngle = angle + (i * (Math.PI * 2)) / totalCards;
        const x = Math.sin(cardAngle) * radius;
        const z = Math.cos(cardAngle) * radius;
        const rotateY = -cardAngle * (180 / Math.PI);

        (card as HTMLElement).style.transform =
          `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`;
      });
    };

    // Animation loop
    let rafId: number;
    const animate = () => {
      angle += 0.002;
      angle += (targetAngle - angle) * 0.05;

      // Mouse influence
      const targetRotY = mouseX * 0.3;
      const targetRotX = -mouseY * 0.15;

      if (carouselRef.current) {
        carouselRef.current.style.transform =
          `rotateX(${targetRotX}deg) rotateY(${targetRotY}deg)`;
      }

      updatePositions();
      rafId = requestAnimationFrame(animate);
    };

    updatePositions();
    animate();

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    // Scroll-based rotation speed
    const onScroll = () => {
      const scrollY = window.scrollY;
      targetAngle = scrollY * 0.001;
    };

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Entrance animation for text
  useEffect(() => {
    if (!heroContentRef.current) return;

    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      heroContentRef.current.querySelector('.hero-subheadline'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0.6
    ).fromTo(
      heroContentRef.current.querySelector('.hero-cta'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0.9
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fallback gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #032B43 0%, #0a1f2e 30%, #1a3a52 60%, #032B43 100%)',
        }}
      />

      {/* Animated mesh gradient overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(166, 124, 0, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, 0.2) 0%, transparent 40%), radial-gradient(ellipse at 50% 80%, rgba(3, 43, 67, 0.8) 0%, transparent 60%)',
        }}
      />

      {/* 3D CSS Carousel */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        <div
          ref={carouselRef}
          style={{
            position: 'relative',
            width: '200px',
            height: '200px',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out',
          }}
        >
          {carouselImages.map((img, i) => (
            <div
              key={i}
              className="carousel-card"
              style={{
                position: 'absolute',
                width: '220px',
                height: '220px',
                left: '50%',
                top: '50%',
                marginLeft: '-110px',
                marginTop: '-110px',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                transition: 'transform 0.05s linear',
              }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading={i < 4 ? 'eager' : 'lazy'}
                style={{ filter: 'brightness(0.85)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(3, 43, 67, 0.6) 0%, rgba(3, 43, 67, 0.85) 100%)',
        }}
      />

      {/* Hero Content */}
      <div
        ref={heroContentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ paddingTop: '80px' }}
      >
        <PerspectiveTextReveal
          text="Building Financial Infrastructure for East Africa's Future"
          tag="h1"
          className="text-hero text-white font-heading mb-8"
        />

        <p className="hero-subheadline text-body-large text-warm-stone max-w-2xl mx-auto mb-10 opacity-0">
          We provide institutional financial engineering, corporate valuation,
          and strategic transaction advisory for high-growth enterprises across
          East Africa.
        </p>

        <div className="hero-cta opacity-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('contact');
              if (target) {
                gsap.to(window, {
                  duration: 1.2,
                  scrollTo: { y: target, offsetY: 80 },
                  ease: 'power3.inOut',
                });
              }
            }}
            className="inline-flex items-center gap-2 text-cta text-rich-gold border-b-2 border-rich-gold pb-2 hover:text-pale-gold hover:border-pale-gold transition-all duration-300"
          >
            Schedule a Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="flex flex-col items-center gap-2">
          <span className="text-caption text-warm-stone/60">Scroll</span>
          <div className="w-px h-10 bg-warm-stone/40" />
        </div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FAF6EB)',
        }}
      />
    </section>
  );
}
