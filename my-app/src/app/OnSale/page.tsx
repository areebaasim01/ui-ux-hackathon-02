"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Product } from "@/app/Types/products";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { icons } from "@sanity/icons";
import Swal  from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

const OnSale = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);


  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      Swal.fire({
        position : "top-right",
        icon : "success",
        title : `${product.name} Added to cart`,
        showConfirmButton : false,
        timer : 1000
      })
      addToCart(product)
      
    }

  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row p-4 gap-6 max-w-7xl mx-auto">
        {/* Filters Section */}
        <aside className="w-full md:w-1/4 bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          {/* Product Categories */}
          <div className="flex flex-col gap-2 mt-2">
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((style) => (
              <button
                key={style}
                className="flex justify-between items-center border rounded px-4 py-2 hover:bg-gray-800 hover:text-white"
              >
                <span>{style}</span>
                <span>&gt;</span>
              </button>
            ))}
          </div>
          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mt-4">Price</h3>
            <input type="range" min="50" max="200" className="w-full mt-2" />
            <div className="flex justify-between text-sm text-black">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>
          {/* Color Filter */}
          <div className="mb-6">
            <h3 className="font-semibold">Colors</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["green-700", "red-700", "yellow-500", "purple-900", "orange-500", "sky-700"].map(
                (color) => (
                  <span
                    key={color}
                    className={`w-6 h-6 rounded-full bg-${color}`}
                  ></span>
                )
              )}
            </div>
          </div>
          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="font-semibold"></h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className="border rounded-full px-4 py-2 bg-gray-100 hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800">
            Apply Filter
          </button>
        </aside>

        {/* Products Section */}
        <section className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold mb-3 text-left mt-8">Casual</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg">
                <Link href={`/product/${product.slug.current}`}>
                  {/* Product Image */}
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url() || "/placeholder.png"}
                      alt={product.name || "Product Image"}
                      width={350}
                      height={350}
                      className="w-full h-60 object-cover rounded-md"
                    />
                  )}
                  {/* Product Name */}
                  <h1 className="text-xl font-bold mt-2 mb-1">{product.name}</h1>
                  {/* Product Price */}
                  <div className="flex gap-6 items-center mt-2">
  
  <p className="text-xl font-semibold text-gray-500">
    {product.price ? `$${product.price}` : "Price not available"}
  </p>

  {/* Discount Percentage */}
  {product.discountPercent> 0 && (
    <p className="px-2 py-1 text-sm font-medium bg-red-100 text-red-600 rounded-full border border-red-200">
      {`${product.discountPercent}% OFF`}
    </p>
  )}
</div>
 


{product.sizes && product.sizes.length  && (
      <div className="mt-2">

        <ul className="flex flex-wrap gap-2 mt-1">
          {product.sizes.map((size) => (
            <li
              key={size}
              className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700 border"
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="pt-3">
    <button className="bg-gradient-to-r from-blue-500 to-purple-500  text-white font-semibold py-2 w-full rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            
            onClick={(e) => handleAddToCart(e, product)}
            >
            
                Add To Cart
                </button>
                </div>
                  

                 

                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default OnSale;
