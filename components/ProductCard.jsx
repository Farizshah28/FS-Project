import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useSafeAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router } = useSafeAppContext()

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => router?.push(`/product/${product._id}`)}>
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-800">{currency}{product.offerPrice}</span>
                        <span className="text-sm text-gray-500 line-through">{currency}{product.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src={assets.star_icon} alt="star" />
                        <span className="text-sm text-gray-600">4.5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard