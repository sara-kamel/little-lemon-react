import HeroSection from '../hero-section'
import Highlights from '../highlights'
import CustomersSay from '../customers-say'
import About from '../about'
export default function HomePage () {
  return (
    <main role='main'>
      <HeroSection />
      <Highlights />
      <CustomersSay />
      <About />
    </main>
  )
}
