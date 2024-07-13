import './App.css'
import Header from './component/header'
import Footer from './component/footer'
import HomePage from './component/home-page'
import HeroSection from './component/hero-section'
import Highlights from './component/highlights'
import About from './component/about'
import { Route, Routes } from 'react-router-dom'
import BookingPage from './component/booking-page'
function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home/about' element={<About />} />
        <Route path='/home/menu' element={<Highlights />} />
        <Route path='/home/reserve' element={<HeroSection />} />
        <Route path='/reserve-table' element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
