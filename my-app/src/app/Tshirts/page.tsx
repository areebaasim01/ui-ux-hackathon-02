import Image from "next/image";
import Customer from "../components/customer";
import Link from "next/link"
import ProductA from "../components/product";

const Tshirts = () => {
  return (
    <div>
     

      {/* Product Card Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden mt-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-2 md:px-0">
          {/* Small Images Section */}
          <div className="flex gap-3">
            <div className="flex flex-col  md:gap-16">
              <div className=" h-16  border rounded-md cursor-pointer">
                <Image
                  src="/image2.png"
                  alt="Thumbnail 1"
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="w- h-16 border rounded-md cursor-pointer">
                <Image
                  src="/image5.png"
                  alt="Thumbnail 2"
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="w- h-16 border rounded-md cursor-pointer">
                <Image
                  src="/image6.png"
                  alt="Thumbnail 3"
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
              </div>
            </div>

            {/* Main Image Section */}
            <div className="flex justify-center items-center">
              <Image
                src="/image1.png"
                alt="Main Product Image"
                width={300}
                height={300}
                className="object-contain rounded-md"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="col-span-1 mt-0 w-1/2">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900">
              ONE LIFE GRAPHIC T-SHIRT
            </h2>

            {/* Price */}
            <div className="flex items-center mt-4 space-x-2">
              <span className="text-xl font-bold text-gray-900">$260</span>
              <span className="text-base text-gray-500 line-through">$300</span>
              <span className="text-sm text-red-500 font-semibold">-40%</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-lg">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700">
                Select Colors
              </h3>
              <div className="flex space-x-4 mt-2">
                <div className="w-6 h-6 rounded-full bg-green-700 border border-gray-300 cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-gray-900 border border-gray-300 cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-blue-900 border border-gray-300 cursor-pointer"></div>
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700">Choose Size</h3>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
                  Small
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
                  Medium
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md bg-gray-100">
                  Large
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
                  X-Large
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
             <Link href="Cart"> <button className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Customer />
     

     
    </div>
  );
};

export default Tshirts;
