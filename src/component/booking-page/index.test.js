import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from './index.js'

const mockDispatch = jest.fn()
it('test date label', () => {
  render(
    <BookingForm avalibleTimes={['1:10', '2:20']} dispatch={mockDispatch} />
  )
  const avalibleTimesBtn = screen.getByTestId(/avalible-times/i)
  expect(avalibleTimesBtn).toBeInTheDocument()
})
it('render avalible Times', () => {
  render(
    <BookingForm avalibleTimes={['1:10', '2:20']} dispatch={mockDispatch} />
  )
  const avalibleTimesBtn = screen.getByTestId(/avalible-times/i)
  fireEvent.click(avalibleTimesBtn)
  expect(mockDispatch).toHaveBeenCalled()
})

it('render initialize times ', () => {
  render(
    <BookingForm avalibleTimes={['1:10', '2:20']} dispatch={mockDispatch} />
  )
  const times = screen.getByText(`1:10 pm`)
  expect(times).toBeInTheDocument()
})
