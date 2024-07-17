import { Box, Typography } from '@mui/material'
import BookingForm from './BookingForm'

export default function BookingPage ({ avalibleTimes, dispatch }) {
  return (
    <>
      <Box m={5}>
        <BookingForm avalibleTimes={avalibleTimes} dispatch={dispatch} />
      </Box>
    </>
  )
}
