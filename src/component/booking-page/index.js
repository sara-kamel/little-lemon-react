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
import '../booking-page/styles.css'

export default function BookingForm ({ availableTimes, dispatch, onSubmit }) {
  const navigate = useNavigate()
  const [date, setDate] = useState(dayjs())
  const [time, setTime] = useState('')
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState(1)

  const today = dayjs()

  let bookingData = []

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
                data-testid='times'
                onClick={() => {
                  setTime(hour)
                }}
                kay={hour.id}
                value={hour}
                variant={hour === time ? 'contained' : 'outlined'}
              >
                {hour} pm
              </Button>
            ))}
          </Stack>

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Occasion</InputLabel>
            <Select
              name='occasion'
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={occasion}
              label='Occasion'
              onChange={e => setOccasion(e.target.value)}
              error={!occasion ? true : false}
            >
              <MenuItem value='Birthday'>Birthday</MenuItem>
              <MenuItem value='Anniversary'>Anniversary</MenuItem>
            </Select>
          </FormControl>

          <InputLabel>Guests Count:</InputLabel>
          <input
            className='guests-field'
            type='number'
            value={guests}
            min={1}
            max={10}
            placeholder='Number of guests'
            onChange={e => {
              setGuests(e.target.value)
            }}
          />
          <Button
            type='submit'
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
