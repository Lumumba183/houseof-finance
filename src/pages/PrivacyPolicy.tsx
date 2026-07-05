import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-navy/95 backdrop-blur-xl h-16">
        <div className="content-container h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/hof-logo.jpg"
              alt="House of Finance Logo"
              className="h-10 w-auto"
            />
          </Link>
          <Link
            to="/"
            className="text-nav text-warm-stone hover:text-white transition-colors duration-250"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="content-container max-w-4xl">
          <div className="mb-12">
            <span className="text-caption text-rich-gold tracking-widest mb-4 block">
              LEGAL
            </span>
            <h1 className="text-section-heading text-deep-navy font-heading mb-4">
              Privacy Policy
            </h1>
            <p className="text-body text-warm-stone">
              Last updated: July 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-body text-deep-navy/90 leading-relaxed">
            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">1. Introduction</h2>
              <p>
                House of Finance (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last updated&rdquo; date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">2. Information We Collect</h2>
              <p className="font-medium mb-2">Personal Data</p>
              <p>
                We may collect personally identifiable information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Name and surname</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and position</li>
                <li>Information about your business and financial needs</li>
              </ul>

              <p className="font-medium mb-2 mt-4">Derivative Data</p>
              <p>
                Our servers may automatically collect information when you access the website, such as your browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">3. Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Respond to your inquiries and provide advisory services</li>
                <li>Email you regarding your account or services</li>
                <li>Compile anonymous statistical data for our internal use</li>
                <li>Increase the efficiency and operation of the website</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Notify you of updates to the website</li>
                <li>Request feedback and contact you about your use of the website</li>
                <li>Resolve disputes and troubleshoot problems</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">4. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">6. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">7. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact us at solodesita2@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">8. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>House of Finance</strong></p>
                <p>Westlands, Nairobi, Kenya</p>
                <p>Email: solodesita2@gmail.com</p>
                <p>Phone: +254 729 004 596</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal py-8 border-t border-warm-stone/10">
        <div className="content-container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-caption text-warm-stone/50">
            &copy; {new Date().getFullYear()} House of Finance. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-caption text-warm-stone/50 hover:text-warm-stone transition-colors">
              Privacy Policy
            </Link>
            <span className="text-warm-stone/30">|</span>
            <Link to="/terms" className="text-caption text-warm-stone/50 hover:text-warm-stone transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
