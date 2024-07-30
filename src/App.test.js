import { fetchAPI } from './api'
import { initializeTimes, updateTimes } from './App'

jest.mock('./api', () => ({
  fetchAPI: jest.fn()
}))

describe('initializeTimes', () => {
  it('fetchApi is called', () => {
    const mockDate = new Date('2023-07-01T00:00:00Z')
    global.Date = jest.fn(() => mockDate)
    fetchAPI.mockImplementation(() => ['1', '2'])
    initializeTimes()
    expect(fetchAPI).toHaveBeenCalledWith(mockDate)
  })
  it('return whatever fetchApi returns', () => {
    fetchAPI.mockImplementation(() => ['1', '2'])
    expect(initializeTimes()).toEqual(['1', '2'])
  })
})
describe('updateTimes', () => {
  it('return state if action.type is not UPDATE_TIMES', () => {
    const result = updateTimes('test state', { type: 'SOMETHING_ELSE' })
    expect(fetchAPI).not.toHaveBeenCalled()
    expect(result).toBe('test state')
  })
  it('call fetchApi if action.type is UPDATE_TIMES', () => {
    fetchAPI.mockImplementation(() => ['1', '2'])
    const result = updateTimes('test state', {
      type: 'UPDATE_TIMES',
      date: '2023-07-01T00:00:00Z'
    })
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-07-01T00:00:00Z'))
    expect(result).toEqual(['1', '2'])
  })
  it('should return state if action.date is invalid', () => {
    fetchAPI.mockImplementation(() => ['1', '2'])
    const result = updateTimes('test state', {
      type: 'UPDATE_TIMES',
      date: ''
    })
    expect(fetchAPI).not.toHaveBeenCalled()
    expect(result).toEqual('test state')
  })
})
