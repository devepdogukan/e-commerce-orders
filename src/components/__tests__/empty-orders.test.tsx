import { fireEvent, render, screen } from '@testing-library/react'
import navigate from '~/utils/navigate'

jest.mock('~/utils/navigate', () => jest.fn())

import EmptyOrderHistory from '../empty-orders'

describe('EmptyOrders Component', () => {
  test('renders EmptyOrders without crash', () => {
    render(<EmptyOrderHistory />)
    expect(screen.getByText('Your Order History is Empty')).toBeInTheDocument()
  })

  test('navigate to home page', () => {
    render(<EmptyOrderHistory />)

    fireEvent.click(screen.getByRole('button', { name: /Start Shopping/ }))

    expect(navigate).toHaveBeenCalledWith('/')
  })
})
