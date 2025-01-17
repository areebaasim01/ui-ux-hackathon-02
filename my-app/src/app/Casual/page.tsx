import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";


const products = [
  {
    src: "/shirt2.png",
    alt: "Gradient Graphic T-shirt",
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    currentPrice: 145,
    oldPrice: null,
    discount: null,
  },

  {
    src: "/shirt3.png",
    alt: "Polo with Tipping Details",
    title: "Polo with Tipping Details",
    rating: 4.5,
    currentPrice: 180,
    oldPrice: null,
    discount: null,
  },
  {
    src: "/shirt4.png",
    alt: "Black Striped T-shirt",
    title: "Black Striped T-shirt",
    rating: 5.0,
    currentPrice: 120,
    oldPrice: 150,
    discount: 30,
  },
  {
    src: "/image10.png",
    alt: "Skinny Fit Jeans",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    currentPrice: 240,
    oldPrice: 260,
    discount: 20,
  },
  {
    src: "/arrival3.png",
    alt: "Checkered Shirt",
    title: "Checkered Shirt",
    rating: 4.5,
    currentPrice: 180,
    oldPrice: null,
    discount: null,
  },
  {
    src: "/arrival4.png",
    alt: "Sleeve Striped T-shirt",
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    currentPrice: 130,
    oldPrice: 160,
    discount: 30,
  },
  {
    src: "/image7.png",
    alt: "Vertical Striped Shirt",
    title: "Vertical Striped Shirt",
    rating: 5.0,
    currentPrice: 212,
    oldPrice: 232,
    discount: 20,
  },
  {
    src: "/image8.png",
    alt: "Courage Graphic T-shirt",
    title: "Courage Graphic T-shirt",
    rating: 4.0,
    currentPrice: 145,
    oldPrice: null,
    discount: null,
  },
  {
    src: "/image9.png",
    alt: "Loose Fit Bermuda Shorts",
    title: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    currentPrice: 80,
    oldPrice: null,
    discount: null,
  },
];


export default function Casual() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col md:flex-row p-4 gap-4">
        {/* Filters Section */}
        <aside className="w-full md:w-1/4 bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="flex flex-col gap-2 mt-2">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(style => (
                <button
                  key={style}
                  className="flex justify-between items-center border rounded-[1000px] px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
                >
                  <span>{style}</span>
                  <span>&gt;</span>
                </button>
              ))}
            </div>


          <div className="mb-6">
            <h3 className="font-semibold mt-[20px]">Price</h3>
            <input type="range" min="50" max="200" className="w-full mt-2 " />
            <div className="flex justify-between text-sm text-black">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Colors</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              
            <span className="w-6 h-6 rounded-full bg-green-700"></span>
              <span className="w-6 h-6 rounded-full bg-red-500"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
              <span className="w-6 h-6 rounded-full bg-purple-900"></span>
              <span className="w-6 h-6 rounded-full bg-orange-500"></span>
              <span className="w-6 h-6 rounded-full bg-sky-700"></span>
              <span className="w-6 h-6 rounded-full bg-white-700"></span>
              <span className="w-6 h-6 rounded-full bg-purple-500"></span>
              <span className="w-6 h-6 rounded-full bg-pink-500"></span>
              <span className="w-6 h-6 rounded-full bg-blue-500"></span>
              <span className="w-6 h-6 rounded-full bg-red-900"></span>
              <span className="w-6 h-6 rounded-full bg-black"></span>
            
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Size</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(size => (
                <button
                  key={size}
                  className="border rounded-full px-4 py-2 bg-gray-100 hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Dress Style</h3>
            <div className="flex flex-col gap-2 mt-2">
              {["Casual", "Formal", "Party", "Gym"].map(style => (
                <button
                  key={style}
                  className="flex justify-between items-center border px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
                >
                  <span>{style}</span>
                  <span>&gt;</span>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black rounded-[250px] text-white py-2 rounded-lg mt-4 hover:bg-gray-800">
            Apply Filter
          </button>
        </aside>

        {/* Product Grid */}
        <section className="w-full md:w-3/4">
          <h1 className="text-2xl font-bold mb-6">Casual</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={300}
                  height={300}
                  className="w-full  object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>
                  <div className="flex items-center mb-2">
                    <Image src="/stars.png" alt="Rating Stars" width={80} height={15} />
                    <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-lg font-bold text-black">${product.currentPrice}</p>
                    {product.oldPrice && (
                      <span className="text-gray-400 ml-2 line-through">${product.oldPrice}</span>
                    )}
                    {product.discount && (
                      <span className="ml-2 bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-lg">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



           