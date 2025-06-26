import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">TechMart</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Your premier destination for cutting-edge electronics and tech accessories. 
              Discover the latest smartphones, laptops, audio gear, and gaming equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Image 
                    src={assets.header_macbook_image} 
                    alt="MacBook" 
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-center mt-2 font-medium">Premium Laptops</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Image 
                    src={assets.header_headphone_image} 
                    alt="Headphones" 
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-center mt-2 font-medium">Audio Excellence</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Image 
                    src={assets.header_playstation_image} 
                    alt="Gaming" 
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-center mt-2 font-medium">Gaming Gear</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Image 
                    src={assets.samsung_s23phone_image} 
                    alt="Smartphones" 
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-center mt-2 font-medium">Smartphones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;