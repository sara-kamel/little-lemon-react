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
  const [date, setDate] = useState()
  const [time, setTime] = useState('')
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState(1)

  const tomorrow = dayjs().add(1, 'day')
  return (
    <>
      <Box display='flex' flexDirection='column' gap={3} alignItems='center'>
        <Box
          className='form'
          sx={{
            Width: 270,
            display: 'flex',
            gap: 3,
            flexDirection: 'column',
            '& button': { m: 1 }
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label='Date'
              value={date}
              onChange={newValue => setDate(newValue)}
              defaultValue={tomorrow}
              minDate={tomorrow}
              views={['year', 'month', 'day']}
            />
          </LocalizationProvider>
          <Button
            data-testid='avalible-times'
            variant='contained'
            onClick={() => dispatch('avalible-times')}
          >
            Check avalible times
          </Button>
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
