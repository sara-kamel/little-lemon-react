import './App.css';
import Header from './component/nav';
import HeroSection from './component/hero-section';
import Highlights from './component/highlights';
import Testimonials from './component/testimonials';
import About from './component/about';
import Footer from './component/footer';
function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
