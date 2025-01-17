import Image from "next/image";

export default function NewArrivals() {
  return (
    <div className="bg-white pt-[90px] py-10 px-4 md:px-8 lg:px-16 xl:px-32">
      {/* Header */}
      <h1 className="text-center font-integral text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 md:mb-12">
        New Arrivals
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {[
          {
            src: "/arrival1.png",
            alt: "T-Shirt with Tape Details",
            title: "T-Shirt with Tape Details",
            rating: 4.5,
            currentPrice: 120,
            oldPrice: null,
            discount: null,
          },
          {
            src: "/arrival2.png",
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
            alt: "Sleeve Striped T-Shirt",
            title: "Sleeve Striped T-Shirt",
            rating: 4.5,
            currentPrice: 130,
            oldPrice: 160,
            discount: 30,
          },
        ].map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg overflow-hidden "
          >
            <div className="w-full aspect-square relative">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 w-full flex flex-col items-start">
              <h2 className="capitalize text-[32px] font-satoshi text-lg font-bold leading-tight mb-1 w-full truncate">
                {product.title}
              </h2>
              <div className="flex items-center mb-2">
                <Image src="/stars.png" alt="Rating Stars" width={80} height={15} />
                <div className="flex items-center ml-2 text-sm text-gray-600">
                  <span>{product.rating}</span>
                  <span>/5</span>
                </div>
              </div>
              <div className="flex items-center w-full justify-between">
                {/* Combined Price Section - flex-wrap added here */}
                <div className="flex flex-wrap items-center"> {/* Added items-center here */}
                  <p className="text-xl font-bold text-black">${product.currentPrice}</p>
                  {product.oldPrice && (
                    <span className="flex items-center ml-2 text-gray-400 ">
                      <p className="mr-2 line-through">${product.oldPrice}</p>
                      <div className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap"> {/* Added whitespace-nowrap */}
                        -{product.discount}%
                      </div>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <button className="bg-white border border-gray-300 rounded-full py-2 px-20 hover:bg-gray-100 transition duration-300">
          View All
        </button>
      </div>
    </div>
  );
}