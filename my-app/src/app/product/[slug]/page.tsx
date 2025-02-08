
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "@/app/Types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Customer from "@/app/components/customer";
import ProductA from "@/app/components/product";


interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0] {
      _id,
      name,
      _type,
      image,
      price,
      discountPercent,
      description,
      colors,
      sizes,
      category
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  // Calculate discounted price if a discount is available
  const discountedPrice =
    product.discountPercent && product.discountPercent > 0 
      ? (product.price * (1 - product.discountPercent / 100)).toFixed(2)
      : null;

        

  return (
    <div>
    
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="aspect-square">
        <div className="flex ">  
            <div className="flex flex-col gap-4 ml-30">
            {product.image && (
                
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={130}
                  height={130}
                  className="border-y-black rounded-md cursor-pointer sm:ml-20  object-cover"
                />
              )}
              {product.image && (
                
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={130}
                  height={130}
                  className="border rounded-md  sm:ml-20  object-cover"
                />
              )}
              {product.image && (
                
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={130}
                  height={130}
                  className="border rounded-md  sm:ml-20  object-cover"
                />
              )}
              </div>
            {product.image && (
                
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={350}
                height={320}
                className="rounded-lg ml-10   shadow-lg object-cover"
              />
            )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="mt-2 text-3xl font-semibold text-gray-800">{product.name}</h1>

            <div className="flex  gap-4">
            <p className="font text-xl font-bold text-black">
                {discountedPrice
                  ? `$${discountedPrice} `
                  : `Price: $${product.price}`}
              </p>
            
              {discountedPrice && (
                <p className="text-lg font-medium text-gray-500 line-through">
                  Price: ${product.price}
                </p>
              )}
              
              {product.discountPercent > 0 && (
                <p className="  text-base text-red-500 font-semibold">
                  {`-${product.discountPercent}% `}
                </p>
              )}
            </div>
            <p className=" text-sm text-gray-500">{product.description}</p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="font-thin text-gray-600">Select Colors</h3>
                <div className="flex gap-3 mt-1">
                  {product.colors.map((color: string) => (
                    <span
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 border-gray-300`}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-thin text-gray-600">Choose Size</h3>
                <div className="flex gap-3 mt-1">
                  {product.sizes.map((size: string) => (
                    <span
                      key={size}
                      className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
          
          </div>
          
        </div>
       
      </div>
      <Customer />
      <ProductA />
     
    </div>
  );
}
