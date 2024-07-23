import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from './index.js'

// dispatch({ type: 'UPDATE_TIMES', date: newValue })

const mockDispatch = jest.fn()
const mockOnSubmit = jest.fn()
// it('test date label', () => {
//   render(
//     <BookingForm availableTimes={['1:10', '2:20']} dispatch={mockDispatch} onSubmit={mockOnSubmit} />
//   )
//   const avalibleTimesBtn = screen.getByTestId(/times/i)
//   expect(avalibleTimesBtn).toBeInTheDocument()
// })
// it('render available Times', () => {
//   render(
//     <BookingForm
//       availableTimes={['1:10', '2:20']}
//       dispatch={mockDispatch}
//       onSubmit={mockOnSubmit}
//     />
//   )
//   const chooseDate = screen.getByTestId(/date/i)
//   fireEvent.click(chooseDate)
//   expect(mockDispatch).toHaveBeenCalled()
// })

// it('render initialize times ', () => {
//   render(
//     <BookingForm availableTimes={['1:10', '2:20']} dispatch={mockDispatch} onSubmit={mockOnSubmit} />
//   )
//   const times = screen.getByText(`1:10 pm`)
//   expect(times).toBeInTheDocument()
// })
