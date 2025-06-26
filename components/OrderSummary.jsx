import { useSafeAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";
import Image from "next/image";

const OrderSummary = () => {
  const { currency, router, getCartCount, getCartAmount } = useSafeAppContext()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Items ({getCartCount()})</span>
          <span>{currency}{getCartAmount()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{currency}0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{currency}0.00</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{currency}{getCartAmount()}</span>
        </div>
      </div>
      <button 
        onClick={() => router?.push('/order-placed')}
        className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;