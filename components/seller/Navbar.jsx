'use client'
import React from "react";
import { assets } from "@/assets/assets";
import { useSafeAppContext } from '@/context/AppContext'
import Image from "next/image";

const Navbar = () => {
    const { router } = useSafeAppContext()

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
            <Image
                className="cursor-pointer w-28 md:w-32"
                onClick={() => router?.push('/seller')}
                src={assets.logo}
                alt="logo"
            />
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <button onClick={() => router?.push('/seller')} className="hover:text-gray-900 transition">
                    Dashboard
                </button>
                <button onClick={() => router?.push('/seller/product-list')} className="hover:text-gray-900 transition">
                    Products
                </button>
                <button onClick={() => router?.push('/seller/orders')} className="hover:text-gray-900 transition">
                    Orders
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button onClick={() => router?.push('/')} className="text-xs border px-4 py-1.5 rounded-full">
                    Back to Store
                </button>
            </div>
        </nav>
    );
};

export default Navbar;