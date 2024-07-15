import { useReducer } from 'react'
import './App.css'
import Header from './component/header'
import Footer from './component/footer'
import HomePage from './component/home-page'
import HeroSection from './component/hero-section'
import Highlights from './component/highlights'
import About from './component/about'
import { Route, Routes } from 'react-router-dom'
import BookingPage from './component/booking-page'

const initializeTimes = ['2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00']
const avalibleTimes = ['2:30', '4:30', '6:30']

const reducer = (state, action) => {
  switch (action) {
    case 'avalible-times':
      return avalibleTimes
    default:
      return state
  }
}

function App () {
  const [times, dispatch] = useReducer(reducer, initializeTimes)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home/about' element={<About />} />
        <Route path='/home/menu' element={<Highlights />} />
        <Route path='/home/reserve' element={<HeroSection />} />
        <Route
          path='/reserve-table'
          element={<BookingPage avalibleTimes={times} dispatch={dispatch} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
