import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image 
            src={assets.logo} 
            alt="TechMart Logo" 
            className="w-24 h-12 object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Updated with TechMart
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to know about new product launches, exclusive deals, and tech industry insights. 
          Join our newsletter for early access to sales and special offers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from TechMart.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Latest Tech News</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Exclusive Deals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Product Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
