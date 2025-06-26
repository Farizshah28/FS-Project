'use client'
import React from "react";
import { useSafeAppContext } from '@/context/AppContext'
import { assets } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OrderPlaced = () => {
  const { router } = useSafeAppContext()

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <Image
              src={assets.checkmark}
              alt="Order placed"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed!</h1>
            <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => router?.push('/my-orders')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Orders
            </button>
            <button
              onClick={() => router?.push('/')}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPlaced;