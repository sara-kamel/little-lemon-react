import { fireEvent, render, screen, within } from '@testing-library/react'
import BookingForm from './index.js'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))
beforeEach(() => {
  const mockNavigate = jest.fn()
  useNavigate.mockReturnValue(mockNavigate)
})
const onSubmit = jest.fn()
beforeEach(() => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BookingForm
        availableTimes={['17:00', '15:00']}
        dispatch={() => {}}
        onSubmit={onSubmit}
      />
    </LocalizationProvider>
  )
})

describe('test occasion validation ', () => {
  it('Show error message', () => {
    expect(screen.getByText('Occasion is Required')).toBeInTheDocument()
  })
  it('hide error message when choose occasion', () => {
    fireEvent.mouseDown(screen.getByLabelText('Occasion'))
    fireEvent.click(screen.getByText('Birthday'))
    expect(screen.queryByText('Occasion is Required')).toBeNull()
  })
})

describe('test guests validation ', () => {
  it('Show error message', () => {
    expect(screen.getByText('Guests is Required')).toBeInTheDocument()
  })
  it('hide error message when choose guests', () => {
    fireEvent.mouseDown(screen.getByLabelText('Guests'))
    fireEvent.click(screen.getByText('1'))
    expect(screen.queryByText('Guests is Required')).toBeNull()
  })
})

describe('test time validation ', () => {
  it('Show error message', () => {
    expect(screen.getByText('Time is Required')).toBeInTheDocument()
  })
  it('hide error message when choose time', () => {
    fireEvent.click(screen.getByText('17:00'))
    expect(screen.queryByText('Times is Required')).toBeNull()
  })
})

describe('test submit button', () => {
  it('submit is disabled by default', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled()
  })
  it('Submit button should be enabled when all fields are filled', () => {
    const dateInput = screen.getByLabelText(/choose date/i)
    const timeButtons = screen.getAllByTestId('time')
    const occasionSelect = screen.getByTestId('occasion')
    const guestsSelect = screen.getByLabelText(/guests/i)

    fireEvent.change(dateInput, { target: { value: dayjs().add(1, 'day') } })
    fireEvent.click(dateInput)
    fireEvent.keyDown(dateInput, { key: 'Enter', code: 'Enter' })

    fireEvent.click(timeButtons[0])

    fireEvent.mouseDown(within(occasionSelect).getByRole('combobox'))
    const birthdayOption = screen.getByRole('option', { name: /birthday/i })
    fireEvent.click(birthdayOption)

    fireEvent.mouseDown(guestsSelect)
    const guestOption = screen.getByRole('option', { name: '5' })
    fireEvent.click(guestOption)

    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeEnabled()
  })
  it('onSubmit should be called with correct data when form is submitted', () => {
    const dateInput = screen.getByLabelText(/choose date/i)
    const timeButtons = screen.getAllByTestId('time')
    const occasionSelect = screen.getByTestId('occasion')
    const guestsSelect = screen.getByLabelText(/guests/i)
    const submitButton = screen.getByRole('button', { name: /submit/i })

    fireEvent.change(dateInput, { target: { value: dayjs().add(1, 'day') } })
    fireEvent.keyDown(dateInput, { key: 'Enter', code: 'Enter' })

    fireEvent.click(timeButtons[0])

    fireEvent.mouseDown(within(occasionSelect).getByRole('combobox'))
    const birthdayOption = screen.getByRole('option', { name: /birthday/i })
    fireEvent.click(birthdayOption)

    fireEvent.mouseDown(guestsSelect)
    const guestOption = screen.getByRole('option', { name: '5' })
    fireEvent.click(guestOption)

    fireEvent.click(submitButton)

    expect(onSubmit).toHaveBeenCalledWith({
      date: expect.any(dayjs),
      time: '17:00',
      occasion: 'Birthday',
      guests: '5'
    })
  })
})
