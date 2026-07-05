import Header from '../sections/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
