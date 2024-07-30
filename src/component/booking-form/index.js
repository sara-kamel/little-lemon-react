import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  Button,
  Stack
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { MenuItem } from '@mui/material'
import './styles.css'

let guestsNumber = []
for (let i = 1; i <= 50; i++) {
  guestsNumber.push(`${i}`)
}

export default function BookingForm ({ availableTimes, dispatch, onSubmit }) {
  const navigate = useNavigate()
  const [date, setDate] = useState(dayjs())
  const [time, setTime] = useState('')
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState('')
  const today = dayjs()

  let bookingData = []

  const errorMessage = message => {
    return <span style={{ color: 'red', textAlign: 'center' }}>{message}</span>
  }
  return (
    <>
      <Box display='flex' flexDirection='column' gap={3} alignItems='center'>
        <Box className='form'>
          <h1>Reserve Table</h1>
          <InputLabel>Choose Date:</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              data-testid='date'
              label='Date'
              value={date}
              onChange={newValue => {
                setDate(newValue)
                dispatch({ type: 'UPDATE_TIMES', date: newValue })
                setTime('')
              }}
              minDate={today}
              views={['year', 'month', 'day']}
            />
          </LocalizationProvider>
          <InputLabel>Available Times In This Date :</InputLabel>
          <Stack
            name='time'
            direction='row'
            border={!time ? ' 1px solid red' : ' 1px solid green'}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            {availableTimes.map(hour => (
              <Button
                role='button'
                data-testid='time'
                onClick={() => {
                  setTime(hour)
                }}
                kay={hour.id}
                value={hour}
                variant={hour === time ? 'contained' : 'outlined'}
              >
                {hour}
              </Button>
            ))}
          </Stack>
          {!time && errorMessage('Time is Required')}
          <br />
          <FormControl fullWidth>
            <InputLabel id='occasion'>Occasion</InputLabel>
            <Select
              aria-required='true'
              labelId='occasion'
              data-testid='occasion'
              value={occasion}
              label='Occasion'
              onChange={e => setOccasion(e.target.value)}
              error={!occasion ? true : false}
            >
              <MenuItem value='Birthday'>Birthday</MenuItem>
              <MenuItem value='Anniversary'>Anniversary</MenuItem>
            </Select>
          </FormControl>
          {!occasion && errorMessage('Occasion is Required')}
          <FormControl fullWidth>
            <InputLabel id='guests'>Guests</InputLabel>
            <Select
              aria-required='true'
              labelId='guests'
              value={guests}
              label='Guests'
              onChange={e => setGuests(e.target.value)}
              error={!guests ? true : false}
            >
              {guestsNumber.map(num => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {!guests && errorMessage('Guests is Required')}
          <Button
            role='button'
            type='submit'
            aria-label='Submit'
            variant='contained'
            disabled={date && time && occasion && guests ? false : true}
            onClick={() => {
              if (date && time && occasion && guests) {
                bookingData = {
                  date: date,
                  time: time,
                  occasion: occasion,
                  guests: guests
                }
                onSubmit(bookingData)
                navigate('/home/confirmed-booking')
              } else alert('Please fill all fields')
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  )
}
