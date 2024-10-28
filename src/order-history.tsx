import '~/order-history.css'
import useAppSelector from '~/utils/use-app-selector'
import EmptyOrderHistory from './components/empty-orders'
import navigate from './utils/navigate'
import OrderCart from './components/order-cart'
import { useEffect } from 'react'

const OrderHistory = () => {
  const orders = useAppSelector((state) => state.order.orders)
  const token = useAppSelector((state) => state.auth.user?.token)

  useEffect(() => {
    if (!token) navigate('/')
  }, [token])

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Orders
      </h2>
      <div className="space-y-8">
        {orders.length === 0 && <EmptyOrderHistory />}
        {orders.map((order) => (
          <OrderCart key={order.orderId} {...order} />
        ))}
      </div>
    </div>
  )
}

export default OrderHistory
