import React from "react";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="mt-20 px-4">
      <h1 className="text-5xl font-bold items-start text-center ">
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="mt-8 flex flex-wrap justify-center md:justify-center gap-5">
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
          <Image src="/r1.png" alt="img1" width={400} height={239.58} />
        </div>
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
          <Image src="/r2.png" alt="img2" width={400} height={239.58} />
        </div>
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
          <Image src="/r3.png" alt="img3" width={400} height={239.58} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
