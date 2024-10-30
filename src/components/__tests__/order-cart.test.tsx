import { render, screen } from '@testing-library/react'
import OrderCart from '~/components/order-cart'
import { Orders } from '~/types/store'
import { format } from 'date-fns'

describe('OrderCart Component', () => {
  const mockOrder: Orders = {
    orderId: '12345',
    date: new Date(2024, 10, 28, 14, 30).toISOString(),
    items: [
      {
        id: 1,
        name: 'Product 1',
        quantity: 2,
        price: 10,
        imageUrl: 'img1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        quantity: 1,
        price: 20,
        imageUrl: 'img2.jpg',
      },
    ],
    totalPrice: 40,
  }

  test('renders order ID and formatted date', () => {
    render(<OrderCart {...mockOrder} />)

    expect(screen.getByText(`#${mockOrder.orderId}`)).toBeInTheDocument()
    expect(
      screen.getByText(format(new Date(mockOrder.date), 'Pp')),
    ).toBeInTheDocument()
  })

  test('renders total price', () => {
    render(<OrderCart {...mockOrder} />)

    expect(
      screen.getByText(`Total: $${mockOrder.totalPrice.toFixed(2)}`),
    ).toBeInTheDocument()
  })
})
