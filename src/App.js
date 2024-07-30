import { useReducer, useState } from 'react'
import Header from './component/header'
import Footer from './component/footer'
import HomePage from './component/home-page'
import HeroSection from './component/hero-section'
import Highlights from './component/highlights'
import About from './component/about'
import { Route, Routes } from 'react-router-dom'
import BookingForm from './component/booking-form'
import { fetchAPI, submitAPI } from './api'
import ConfirmedBooking from './ConfirmedBooking'

export const initializeTimes = () => {
  const today = new Date()
  return fetchAPI(today)
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (!action.date) return state
      return fetchAPI(new Date(action.date))
    default:
      return state
  }
}

function App () {
  const [times, dispatch] = useReducer(updateTimes, [], initializeTimes)
  const [bookingData, setBookingData] = useState([])

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
          element={
            <BookingForm
              availableTimes={times}
              dispatch={dispatch}
              onSubmit={value => {
                submitAPI(value)
                setBookingData(value)
              }}
            />
          }
        />
        <Route
          path='/home/confirmed-booking'
          element={<ConfirmedBooking bookingData={bookingData} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
