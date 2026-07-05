import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  '/images/gallery-col-1.jpg',
  '/images/gallery-col-2.jpg',
  '/images/gallery-col-3.jpg',
  '/images/gallery-col-4.jpg',
  '/images/gallery-col-5.jpg',
  '/images/gallery-col-6.jpg',
  '/images/gallery-col-7.jpg',
  '/images/gallery-col-8.jpg',
  '/images/gallery-col-9.jpg',
  '/images/gallery-col-10.jpg',
];

const leftColImages = galleryImages.slice(0, 5);
const rightColImages = galleryImages.slice(5, 10);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Gallery infinite scroll animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate gallery columns with continuous scroll
      const leftCol = leftColRef.current;
      const rightCol = rightColRef.current;

      if (leftCol) {
        gsap.to(leftCol, {
          y: '-50%',
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }

      if (rightCol) {
        gsap.fromTo(
          rightCol,
          { y: '-50%' },
          {
            y: '0%',
            duration: 20,
            ease: 'none',
            repeat: -1,
          }
        );
      }

      // Content entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll('.animate-in'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          company: '',
          serviceInterest: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-gallery min-h-screen flex items-center"
    >
      {/* Gallery Columns */}
      <div className="gallery-wrap">
        <div className="gallery gallery--vertical" ref={leftColRef}>
          {[...leftColImages, ...leftColImages].map((img, i) => (
            <div
              key={`left-${i}`}
              className="gallery__item"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
      <div className="gallery-wrap">
        <div className="gallery gallery--vertical" ref={rightColRef}>
          {[...rightColImages, ...rightColImages].map((img, i) => (
            <div
              key={`right-${i}`}
              className="gallery__item"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      {/* Contact Content */}
      <div ref={contentRef} className="contact-content w-full">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <div>
              <h2 className="animate-in text-hero text-white font-heading mb-6">
                Partner With Us
              </h2>
              <p className="animate-in text-body-large text-warm-stone max-w-lg mb-12">
                Schedule a structured introductory evaluation with our principal
                advisory desk to review your venture&apos;s transaction readiness.
              </p>

              <div className="animate-in space-y-6">
                <div className="flex items-start gap-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A67C00"
                    strokeWidth="2"
                    className="mt-1 flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="text-caption text-warm-stone mb-1">Office</p>
                    <p className="text-body text-white">
                      Westlands, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A67C00"
                    strokeWidth="2"
                    className="mt-1 flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <p className="text-caption text-warm-stone mb-1">Phone</p>
                    <p className="text-body text-white">+254 729 004 596</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A67C00"
                    strokeWidth="2"
                    className="mt-1 flex-shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <p className="text-caption text-warm-stone mb-1">Email</p>
                    <p className="text-body text-white">solodesita2@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A67C00"
                    strokeWidth="2"
                    className="mt-1 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="text-caption text-warm-stone mb-1">Hours</p>
                    <p className="text-body text-white">
                      Monday – Friday: 8:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="animate-in">
              {submitted ? (
                <div className="bg-deep-navy/50 backdrop-blur-sm border border-rich-gold/30 p-8 text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A67C00"
                    strokeWidth="2"
                    className="mx-auto mb-4"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="text-subheading text-white font-heading mb-2">
                    Thank You
                  </h3>
                  <p className="text-body text-warm-stone">
                    We have received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>
                      Don&apos;t fill this out if you&apos;re human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label className="text-caption text-warm-stone mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-caption text-warm-stone mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-caption text-warm-stone mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="text-caption text-warm-stone mb-2 block">
                      Service Interest
                    </label>
                    <select
                      name="serviceInterest"
                      value={formState.serviceInterest}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a service</option>
                      <option value="Investment Banking">
                        Investment Banking
                      </option>
                      <option value="Valuation & Modeling">
                        Valuation & Modeling
                      </option>
                      <option value="M&A Advisory">M&A Advisory</option>
                      <option value="Financial Infrastructure">
                        Financial Infrastructure
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-caption text-warm-stone mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Tell us about your venture..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
