'use client'
import React from "react";
import { useSafeAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderSummary from "@/components/OrderSummary";

const Cart = () => {
  const { products, router, cartItems, addToCart, updateCartQuantity, getCartCount } = useSafeAppContext();

  const getCartItems = () => {
    const items = [];
    for (const productId in cartItems) {
      const product = products.find(p => p._id === productId);
      if (product) {
        items.push({
          ...product,
          quantity: cartItems[productId]
        });
      }
    }
    return items;
  };

  const cartItemsList = getCartItems();

  if (getCartCount() === 0) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="text-center">
            <Image
              src={assets.cart_icon}
              alt="Empty cart"
              className="w-24 h-24 mx-auto mb-4 opacity-50"
            />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to your cart to get started.</p>
            <button
              onClick={() => router?.push('/all-products')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItemsList.map((item) => (
                <div key={item._id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image[0]}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold">${item.offerPrice}</span>
                          <span className="text-gray-500 line-through">${item.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateCartQuantity(item._id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item._id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
