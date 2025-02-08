"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/app/Types/products";
import { client } from "@/sanity/lib/client";
import { eightpro } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal  from "sweetalert2"

const Selling = () => {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(eightpro);
      setProduct(fetchedProduct);
    }
    fetchProduct();
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center mt-8">Top Selling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug.current}`}>
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              {/* Product Name */}
              <h1 className="text-lg font-semibold mt-4">{product.name}</h1>
            

            {/* Price and Discount */}
            <div className="flex gap-4 items-center">
              <p className="text-lg font-semibold text-gray-500">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>

              {/* Discount Percentage */}
              {product.discountPercent > 0 && (
                <p className="px-2 py-1 text-sm font-medium bg-red-100 text-red-600 rounded-full border border-red-200">
                  {`${product.discountPercent}% OFF`}
                </p>
              )}
            </div>
            <div className="pt-2">
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
    </div>
  );
};

export default Selling;
