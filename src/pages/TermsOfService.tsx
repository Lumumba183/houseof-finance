import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-body text-warm-stone">
              Last updated: July 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-body text-deep-navy/90 leading-relaxed">
            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and House of Finance (&ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of the houseoffinance.co.ke website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &ldquo;Site&rdquo;).
              </p>
              <p>
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
              <p>
                Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p>
                The Content and the Marks are provided on the Site &ldquo;AS IS&rdquo; for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Site through automated or non-human means</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Systematically retrieving data or other content from the Site to create or compile a collection, compilation, database, or directory without written permission from us</li>
                <li>Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information</li>
                <li>Circumventing, disabling, or otherwise interfering with security-related features of the Site</li>
                <li>Disparaging, tarnishing, or otherwise harming us and/or the Site</li>
                <li>Using any information obtained from the Site in order to harass, abuse, or harm another person</li>
                <li>Using the Site as part of any effort to compete with us or otherwise using the Site and/or the Content for any revenue-generating endeavor or commercial enterprise</li>
                <li>Attempting to bypass any measures of the Site designed to prevent or restrict access to the Site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">5. Services and Engagement</h2>
              <p>
                The Site provides information about House of Finance&apos;s financial advisory services, including investment banking, corporate valuation, M&A advisory, and SME financial infrastructure services. Any engagement for services shall be governed by a separate written agreement executed between House of Finance and the client.
              </p>
              <p>
                Information provided on the Site is for general informational purposes only and does not constitute financial, investment, legal, or tax advice. Nothing on the Site should be construed as a recommendation to buy, sell, or hold any investment or security, or to engage in any specific transaction.
              </p>
              <p>
                <strong>No Client Relationship:</strong> Submitting an inquiry through our contact form or visiting the Site does not create a client-advisor relationship. A formal engagement letter must be executed before any advisory relationship is established.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">6. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">7. Disclaimer</h2>
              <p>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
              </p>
              <p>
                We make no warranties or representations about the accuracy or completeness of the Site&apos;s content or the content of any websites linked to the Site and we will assume no liability or responsibility for any:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Errors, mistakes, or inaccuracies of content and materials</li>
                <li>Personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Site</li>
                <li>Any unauthorized access to or use of our secure servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Site</li>
                <li>Any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Site by any third party</li>
              </ul>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of Kenya. House of Finance and yourself irrevocably consent that the courts of Kenya shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">9. Dispute Resolution</h2>
              <p>
                Any legal action of whatever nature brought by either you or us shall be commenced or prosecuted in the courts of Nairobi, Kenya, and the parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such courts.
              </p>
            </section>

            <section>
              <h2 className="text-subheading text-deep-navy font-heading mb-4">10. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
