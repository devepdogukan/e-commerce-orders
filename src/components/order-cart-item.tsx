import { OrderItem } from '~/types/store'

const OrderCartItem = ({ imageUrl, name, quantity, price }: OrderItem) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h4 className="text-lg font-medium text-gray-700">{name}</h4>
          <span className="text-sm text-gray-500">Quantity: {quantity}</span>
        </div>
      </div>
      <span className="text-gray-600 text-lg font-semibold">
        ${price.toFixed(2)}
      </span>
    </div>
  )
}

export default OrderCartItem
