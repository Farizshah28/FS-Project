import React from "react";
import { useSafeAppContext } from "@/context/AppContext";
import ProductCard from "./ProductCard";

const HomeProducts = () => {
  const { products, router } = useSafeAppContext()

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <button 
          onClick={() => router?.push('/all-products')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
