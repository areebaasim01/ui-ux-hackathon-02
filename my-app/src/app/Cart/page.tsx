import React from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";

const Cart = () => {
  const items = [
    { 
      id: 1, 
      name: 'Gradient Graphic T-shirt', 
      Size: 'Large',
      color: 'White',
      price: 145, 
      quantity: 1, 
      image: '/shirt2.png' // Image URL
    },
    { 
      id: 2, 
      name: 'Checkered Shirt', 
      Size: 'Medium',
      color: 'Red', 
      price: 180, 
      quantity: 1, 
      image: '/arrival3.png' // Image URL
    },
    { 
      id: 3, 
      name: 'Skinny Fit Jeans', 
      Size: 'Large',
      color: 'Blue', 
      price: 240, 
      quantity: 1, 
      image: '/image10.png' // Image URL
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div>
      <Navbar />
      <h1 className="text-xl text-[45px] mt-[30px] font-bold ml-4 md:ml-[150px]">YOUR CART</h1>
      <div className="p-4 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cart Items */}
          <div className="border-2 border-gray-200 p-4 rounded-lg">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex  sm:flex-row items-center justify-between border-b py-4"
              >
                <div className="flex items-center mb-4 sm:mb-0">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-500"><span className="text-black">Size:</span> {item.Size}</p>
                    <p className="text-sm text-gray-500"><span className="text-black">Color:</span> {item.color}</p>
                    <p className="font-bold mt-1">${item.price}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="/dlt.png"
                      alt="delete"
                      className="ml-0 sm:ml-[60px] mb-4 sm:mb-[30px] w-5 h-5 cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 rounded-[100px]">
                    <button className="px-2 py-1 hover:bg-gray-300 text-[20px]">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button className="px-2 py-1 hover:bg-gray-300 text-[20px]">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-2 border-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Discount (20%)</span>
              <span className="text-red-500">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg py-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Promo Code Input */}
            <div className="flex items-center border-2 rounded-[1000px] w-full mt-4">
              {/* Image as an icon */}
              <div className="px-3">
                <Image
                  src="/last.png"
                  alt="promo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-grow  px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-2 text-sm font-medium rounded-[1000px] hover:bg-gray-800">
                Apply
              </button>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-[100px] mt-4 hover:bg-gray-800">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
