import { Box } from '@mui/material'
import BookingForm from './BookingForm'

export default function BookingPage ({ avalibleTimes, dispatch }) {
  return (
    <>
      <Box>
        <BookingForm avalibleTimes={avalibleTimes} dispatch={dispatch} />
      </Box>
    </>
  )
}
