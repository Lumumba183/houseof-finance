import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface PerspectiveTextRevealProps {
  text: string;
  tag?: string;
  className?: string;
}

export default function PerspectiveTextReveal({
  text,
  tag: Tag = 'h2',
  className = '',
}: PerspectiveTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const split = new SplitType(el, { types: 'lines,words,chars' });

    document.fonts.ready.then(() => {
      const chars = split.chars;
      if (!chars || chars.length === 0) return;

      const anim = gsap.fromTo(
        chars,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          rotationX: -90,
          yPercent: 50,
        },
        {
          ease: 'power1.inOut',
          opacity: 1,
          rotationX: 0,
          yPercent: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=15%',
            end: 'center center+=15%',
            scrub: true,
          },
        }
      );

      return () => {
        anim.kill();
      };
    });

    return () => {
      split.revert();
    };
  }, [text]);

  const Component = Tag as any;

  return (
    <Component
      ref={containerRef}
      className={className}
      data-text={text}
    >
      {text}
    </Component>
  );
}
