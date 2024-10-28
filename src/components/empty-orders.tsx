import React from 'react'
import navigate from '~/utils/navigate'

const EmptyOrderHistory = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-gray-400 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18M3 12h18M4 21h16"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Order History is Empty
        </h2>
        <p className="text-gray-600 text-center mb-6">
          You haven&apos;t placed any orders yet. Start shopping now to fill up
          your order history!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </button>
      </div>
    </div>
  )
}

export default EmptyOrderHistory
