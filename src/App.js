import './App.css'
import Header from './component/header'
import Footer from './component/footer'
import HomePage from './component/home-page'
import HeroSection from './component/hero-section'
import Highlights from './component/highlights'
import CustomersSay from './component/customers-say'
import About from './component/about'
import { Route, Routes } from 'react-router-dom'
function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/home/about' element={<About />} />
        <Route path='/home/menu' element={<Highlights />} />
        <Route path='/home/reserve' element={<HeroSection />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
