import { fireEvent, render, screen, act } from '@testing-library/react'
import BookingForm from './index.js'
import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))
beforeEach(() => {
  const mockNavigate = jest.fn()
  useNavigate.mockReturnValue(mockNavigate)
})
describe('validation', () => {
  it('Show error message', () => {
    render(
      <BookingForm
        availableTimes={['17:00']}
        dispatch={() => {}}
        onSubmit={() => {}}
      />
    )
    expect(screen.getByText('Occasion is Required')).toBeInTheDocument()
  })
  it('hide error message when choose occasion', () => {
    render(
      <BookingForm
        availableTimes={['17:00']}
        dispatch={() => {}}
        onSubmit={() => {}}
      />
    )
    fireEvent.mouseDown(screen.getByLabelText('Occasion'))
    fireEvent.click(screen.getByText('Birthday'))
    expect(screen.queryByText('Occasion is Required')).toBeNull()
  })
})
