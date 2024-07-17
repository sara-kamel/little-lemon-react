import { useReducer, useState } from 'react'
import Header from './component/header'
import Footer from './component/footer'
import HomePage from './component/home-page'
import HeroSection from './component/hero-section'
import Highlights from './component/highlights'
import About from './component/about'
import { Route, Routes } from 'react-router-dom'
import BookingPage from './component/booking-page'
import dayjs from 'dayjs'
import { fetchAPI } from './api'

const initializeTimes = () => {
  const today = new Date()
  return fetchAPI(today)
}

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date))
    default:
      return state
  }
}

function App () {
  const [times, dispatch] = useReducer(updateTimes, [], initializeTimes)

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
