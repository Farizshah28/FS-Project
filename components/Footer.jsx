import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image src={assets.logo} alt="TechMart Logo" className="w-32" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              TechMart is your trusted destination for premium electronics and tech accessories. 
              We offer the latest smartphones, laptops, audio equipment, and gaming gear with 
              exceptional customer service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image src={assets.twitter_icon} alt="Twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image src={assets.instagram_icon} alt="Instagram" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/all-products" className="hover:text-white transition">Shop</a></li>
              <li><a href="/cart" className="hover:text-white transition">Cart</a></li>
              <li><a href="/my-orders" className="hover:text-white transition">My Orders</a></li>
              <li><a href="/seller" className="hover:text-white transition">Seller Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechMart. All rights reserved. Premium electronics store.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;