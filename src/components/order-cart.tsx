import { format } from 'date-fns'
import { Orders } from '~/types/store'
import OrderCartItem from './order-cart-item'

const OrderCart = ({ orderId, date, items, totalPrice }: Orders) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white">
      <div className="flex flex-wrap justify-between items-center mb-4 border-b pb-3">
        <h3 className="text-xl font-semibold text-gray-800">#{orderId}</h3>
        <span className="text-gray-500">{format(date, 'Pp')}</span>
      </div>
      <div className="space-y-4">
        {items.map((product) => (
          <OrderCartItem key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-end mt-4 font-semibold text-gray-800 text-xl border-t pt-3">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  )
}

export default OrderCart
