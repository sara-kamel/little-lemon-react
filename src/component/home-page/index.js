import HeroSection from '../hero-section';
import Highlights from '../highlights';
import Testimonials from '../testimonials';
import About from '../about';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
