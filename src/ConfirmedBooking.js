import { Box, Typography } from '@mui/material'
export default function ConfirmedBooking ({ bookingData }) {
  function formatDate (dateObj) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    return dateObj.$d.toLocaleDateString('en-US', options)
  }
  const date = formatDate(bookingData.date)
  const boxStyles = {
    textAlign: 'center',
    m: '16px',
    color: '#357a38',
    border: '1px solid #357a38',
    padding: '25px'
  }
  return (
    <>
      <Box style={boxStyles}>
        <Typography variant='h5'>
          You reserved a table successfully, Congratulations!
        </Typography>
        <Typography variant='h6'>Date : {date} </Typography>
        <Typography variant='h6'>Time :{bookingData.time} </Typography>
        <Typography variant='h6'>Occasion : {bookingData.occasion} </Typography>
        <Typography variant='h6'>
          Guests Count :{bookingData.guests}{' '}
        </Typography>
      </Box>
    </>
  )
}
