import { render, screen } from '@testing-library/react'
import OrderCartItem from '~/components/order-cart-item'
import { OrderItem } from '~/types/store'

describe('OrderCartItem Component', () => {
  const mockItem: OrderItem = {
    id: 1,
    imageUrl: 'img1.jpg',
    name: 'Product 1',
    quantity: 2,
    price: 10,
  }

  test('renders product image with correct src and alt text', () => {
    render(<OrderCartItem {...mockItem} />)

    const image = screen.getByRole('img', { name: mockItem.name })
    expect(image).toHaveAttribute('src', mockItem.imageUrl)
    expect(image).toHaveAttribute('alt', mockItem.name)
  })

  test('displays product name', () => {
    render(<OrderCartItem {...mockItem} />)

    expect(screen.getByText(mockItem.name)).toBeInTheDocument()
  })

  test('displays product quantity', () => {
    render(<OrderCartItem {...mockItem} />)

    expect(
      screen.getByText(`Quantity: ${mockItem.quantity}`),
    ).toBeInTheDocument()
  })

  test('displays product price formatted correctly', () => {
    render(<OrderCartItem {...mockItem} />)

    expect(
      screen.getByText(`$${mockItem.price.toFixed(2)}`),
    ).toBeInTheDocument()
  })
})
