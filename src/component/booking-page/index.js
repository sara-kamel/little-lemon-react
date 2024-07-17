import { useState } from 'react'
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

export default function BookingForm ({ avalibleTimes, dispatch }) {
  const [date, setDate] = useState(dayjs())
  const [time, setTime] = useState('')
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState(1)
  const tomorrow = dayjs().add(1, 'day')

  return (
    <>
      <Box display='flex' flexDirection='column' gap={3} alignItems='center'>
        <Box className='form'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <InputLabel>Choose Date:</InputLabel>
            <DatePicker
              label='Date'
              value={date}
              onChange={newValue => {
                setDate(newValue)
                dispatch({ type: 'UPDATE_TIMES', date: newValue })
              }}
              defaultValue={tomorrow}
              minDate={tomorrow}
              views={['year', 'month', 'day']}
            />
          </LocalizationProvider>
          <Stack
            direction='row'
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {avalibleTimes.map(hour => (
              <Button
                data-testid='times'
                onClick={() => {
                  setTime(hour)
                  console.log(time, hour)
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
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={occasion}
              label='Occasion'
              onChange={e => setOccasion(e.target.value)}
            >
              <MenuItem value='birthday'>Birthday</MenuItem>
              <MenuItem value='anniversary'>Anniversary</MenuItem>
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
            onClick={() => {
              console.log(date, time, occasion, guests)
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  )
}
