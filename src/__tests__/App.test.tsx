import { screen } from '@testing-library/react'
import renderWithRedux from '~/mocks/redux'
import OrderHistory from '~/order-history'
import navigate from '~/utils/navigate'

jest.mock('~/utils/navigate', () => jest.fn())

const authState = {
  user: {
    email: 'user1',
    token: 'test',
    loginDate: new Date().toISOString(),
  },
  loading: true,
  error: null,
}

const orderState = {
  orders: [
    {
      orderId: '1',
      date: new Date().toISOString(),
      items: [],
      totalPrice: 50,
    },
    {
      orderId: '2',
      date: new Date().toISOString(),
      items: [],
      totalPrice: 100,
    },
  ],
}

const mockState = {
  auth: authState,
  order: orderState,
}

describe('OrderHistory App', () => {
  test('redirects to home if user is not authenticated', async () => {
    await renderWithRedux(<OrderHistory />, {
      initialState: { ...mockState, auth: { ...mockState.auth, user: null } },
    })

    expect(navigate).toHaveBeenCalledWith('/')
  })

  test('render no orders', async () => {
    await renderWithRedux(<OrderHistory />, {
      initialState: {
        ...mockState,
        order: {
          orders: [],
        },
      },
    })
    expect(screen.getByText('Your Order History is Empty')).toBeInTheDocument()
  })
})
