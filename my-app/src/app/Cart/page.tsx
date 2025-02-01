"use client";

import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import { Product } from '../Types/products'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Swal from "sweetalert2";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Cart = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        setCartItems(getCartItems())
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Item has been removed.", "success");
            }
        })
    }

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    }

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product)
            handleQuantityChange(id, product.inventory + 1)
    }

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1)
            handleQuantityChange(id, product.inventory - 1)
    }

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
    }



const router = useRouter();


    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to Checkout",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "Your Order has been successfully processed", "success");
                router.push("/checkout")
                setCartItems([])
            }
        })
    }

    return (
        <div className="min-h-screen flex flex-col">
          

            <div className="flex-1 flex-row justify-between container mx-auto py-8 px-4 md:px-8">
                <h1 className="text-3xl font-semibold text-start mb-8">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center text-xl font-semibold">Your cart is empty</div>
                ) : (
                    <div className="overflow-x-auto shadow-xl border rounded-lg">
                        <table className="w-full table-auto text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600">Product</th>
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600">Price</th>
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600">Quantity</th>
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600">Total</th>
                                    <th className="py-3 px-4 text-sm font-medium text-gray-600">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item._id} className="border-b">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center">
                                                {item.image && (
                                                  <Image 
                                                  src={urlFor(item.image).url()}
                                                  className="w-16 h-16 object-cover rounded-lg"
                                                  alt="image"
                                                  width={500}
                                                  height={500}
                                                  
                                                  />
                                                )}
                                                <span className="text-sm ml-3 font-bold">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-600"> ${item.price ? item.price.toFixed(2) : "0.00"}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-2">
                                                <button onClick={() => handleDecrement(item._id)} className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400">
                                                    -
                                                </button>
                                                <span className="text-sm font-medium">{item.inventory}</span>
                                                <button onClick={() => handleIncrement(item._id)} className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-600"> ${item.price && item.inventory ? (item.price * item.inventory).toFixed(2) : "0.00"} </td>
                                        <td className="py-3 px-4">
                                            <button onClick={() => handleRemove(item._id)} className="w-[70px] h-[30px]  rounded bg-red-600 text-center text-white hover:text-gray-300">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex justify-between items-center py-6 px-4 bg-gray-50 border-t">
                            <div className="text-lg font-semibold">Total: ${calculatedTotal().toFixed(2)} </div>
                            <button onClick={handleProceed} className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>

           
        </div>
    )
}

export default Cart;
