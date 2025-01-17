import React from "react";
import Image from "next/image";

const Product = () => {
  const products = [
    {
      name: "Polo with Contrast Trims",
      price: "$212",
      originalPrice: "$242",
      discount: "20%",
      rating: 4.0,
      image: "/shirt1.png", 
    },
    {
      name: "Gradient Graphic T-shirt",
      price: "$145",
      originalPrice: null,
      discount: null,
      rating: 3.5,
      image: "/shirt2.png", 
    },
    {
      name: "Polo with Tipping Details",
      price: "$180",
      originalPrice: null,
      discount: null,
      rating: 4.5,
      image: "/shirt3.png", 
    },
    {
      name: "Black Striped T-shirt",
      price: "$120",
      originalPrice: "$160",
      discount: "25%",
      rating: 5.0,
      image: "/shirt4.png", 
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-sm hover:shadow-md p-4"
          >
            <img
              src= {product.image} 
              alt={product.name}
              className="rounded-lg mb-4 w-full h-64 object-cover" // Fixed height of 16rem (h-64)
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {product.name}
            </h3>
            <div className="flex items-center text-yellow-500 mb-2">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="ml-2 text-gray-600 text-sm">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-bold text-gray-800">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-500">
                  {product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                  {product.discount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
