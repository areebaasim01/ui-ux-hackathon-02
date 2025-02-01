"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./MenuBar";

export default function Navbar() {

  return (
    <>
      <div className="bg-black py-2 text-white text-sx flex items-center gap-2 px-2 justify-center md:hidden ">
        <p className="text-xs"> Sign up and get 20% off your first order.</p>
        <span className="text-xs border-b-2 border-white"> Sign Up Now</span>
      </div>
      <div className="flex justify-between md:hidden p-5">
        <div>
         <div className="flex gap-4 "> <Dropdown />
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/SHOP.CO.png"
                alt="Shop.co Logo"
                width={120}
                height={26}
                className="sm:hidden md:hidden lg:hidden"
              />
            </Link>
          </div>
          </div>
          
        </div>
        <div className="flex items-center gap-4">
          <Image src="/searchicon.png" alt="Search" height={22} width={22} />

          <Link href="/Cart">
            <Image
              src="/Frame1.png"
              alt="Cart"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Image
            src="/Frame2.png"
            alt="User Icon"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>
      <div className="md:block hidden">
        {/* Top Notification Bar */}
        <div className="bg-black flex items-center justify-between w-full h-[36px] sm:h-[38px] px-10 ">
          {/* Text Section */}
          <p className="text-white text-xs sm:text-sm text-center w-full sm:w-auto sm:ml-[400px]">
            Sign up and get 20% off your first order.{" "}
            <span className="underline font-bold cursor-pointer">
              Sign Up Now
            </span>
          </p>
          {/* Image Section */}
          <div className="hidden sm:flex items-center justify-center sm:mr-[50px]">
            <Image
              src="/Vector1.png"
              alt="Vector"
              width={13.3}
              height={13.13}
              className="object-contain"
            />
          </div>
        </div>

        <div className=" ml-[20px]  ">
          {/* Image visible only on mobile screens */}
          <Image
            src="/Vector9.png"
            alt="Vector"
            width={15}
            height={15}
            className="object-contain block sm:hidden" // Show on mobile screens and hide on larger screens
          />
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white flex w-full h-[48px] m-[5px] items-center justify-between p-[25px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/SHOP.CO.png"
                alt="Shop.co Logo"
                width={120}
                height={22}
                className="sm:w-[160px] h-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex gap-[20px]">
            <div className="relative group">
              <Link
                href="/"
                className="text-black text-sm hover:underline flex items-center"
              >
                Shop
                <Image
                  src="/Vector.png"
                  alt="Dropdown Arrow"
                  height={6.5}
                  width={11.5}
                  className="ml-1"
                />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden w-40 bg-white shadow-md rounded group-hover:block">
                <Link
                  href="/Tshirts"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  T-shirts
                </Link>
                
                <Link
                  href="#Accessories"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  Accessories
                </Link>
              </div>
            </div>
            <Link
              href="/OnSale"
              className="text-black text-sm hover:underline"
            >
              On Sale
            </Link>
            <Link
              href="#newArrivals"
              className="text-black text-sm hover:underline"
            >
              New Arrivals
            </Link>
            <Link href="" className="text-black text-sm hover:underline">
              Brands
              </Link>
             
          </div>

          {/* Search Bar */}
          <div
            id="inputmain"
            className="flex items-center bg-[#F0F0F0] justify-center gap-2 rounded-full pl-1 w-full sm:w-auto"
          >
            <div id="input1">
              <Image
                src="/searchicon.png"
                alt="Search"
                height={22}
                width={22}
              />
            </div>
           
            <input
              type="text"
              placeholder="Search for products..."
             
              id="input"
              className=" bg-[#F0F0F0]  sm:w-[330px] h-[43px] rounded-r-full focus:outline-none "
            />
           
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center gap-4">
            <Link href="/Cart">
              <Image
                src="/Frame1.png"
                alt="Cart"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
            <Image
              src="/Frame2.png"
              alt="User Icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
