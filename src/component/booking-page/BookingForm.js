import { useState } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Box, Select, FormControl, InputLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoItem } from '@mui/x-date-pickers/internals/demo'
import { MenuItem } from '@mui/material'
import '../booking-page/styles.css'
const avalibleTimes = ['2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00']

export default function BookingForm () {
  const [date, setDate] = useState(dayjs())
  const [time, setTime] = useState('')
  const [occasion, setOccasion] = useState('')

  const handleChange = event => {
    setTime(event.target.value)
  }

  // const errorMassege = (
  //   <div style={{ color: 'red' }}>please filled the field</div>
  // )
  const today = dayjs()
  const tomorrow = dayjs().add(1, 'day')
  return (
    <>
      <Box display='flex' flexDirection='column' gap={3} alignItems='center'>
        <Box sx={{ minWidth: 270 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label='Choose Date'>
              <DatePicker
                label='Date'
                value={date}
                onChange={newValue => setDate(newValue)}
                defaultValue={today}
                minDate={tomorrow}
                views={['year', 'month', 'day']}
              />
            </DemoItem>
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            minWidth: 270,
            display: 'flex',
            gap: 3,
            flexDirection: 'column'
          }}
        >
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Time</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={time}
              label='Time'
              onChange={handleChange}
            >
              {avalibleTimes.map(time => (
                <MenuItem kay={time.id} value={time}>
                  {time} pm
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            min={1}
            max={10}
            placeholder='Number of guests'
          />
        </Box>
      </Box>
    </>
  )
}
