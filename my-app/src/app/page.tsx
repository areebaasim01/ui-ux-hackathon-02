import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import NewArrivals from "@/app/components/newArrivals/newArrivals";
import Selling from "./components/selling/selling";
import DressStyle from "./components/DressStyle/dress";
import Reviews from "./components/reviews";

const Home = () => {
  return (
    <div className="no-scroll">
      <Navbar />

      <section className="w-full h-auto bg-[#F2F0F1] flex flex-col md:flex-row justify-between font-sans flex-wrap">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 sm:gap-6 p-6 sm:p-8 md:px-[100px] lg:px-[120px] xl:px-[140px]">
          <h1 className="w-full sm:w-[315px] md:w-[577px] text-black text-2xl sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-extrabold leading-tight sm:leading-8 md:leading-[1.2] lg:leading-[64px] mb-2 sm:mb-3 md:mb-5 font-integral">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="w-full sm:w-[358px] md:w-[545px] text-sm sm:text-[16px] leading-snug sm:leading-[22px] text-[#00000099] mb-3 sm:mb-5 font-satoshi">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full sm:w-[358px] md:w-[210px] h-[52px] flex justify-center items-center px-4 sm:px-[54px] py-2 bg-black text-white rounded-[62px] hover:bg-gray-800 mb-2 sm:mb-[1px]">
            Shop Now
          </button>
          <div className="flex flex-row md:flex-row gap-4 md:gap-8 mt-7 items-center md:items-start">
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#000000]">
                200+
              </p>
              <p className="text-[#00000099] text-sm md:text-base">
                International Brands
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#000000]">
                2,000+
              </p>
              <p className="text-[#00000099] text-sm md:text-base">
                High-Quality Products
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#000000]">
                30,000+
              </p>
              <p className="text-[#00000099] text-sm md:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Background */}
        <div className="relative overflow-hidden w-full h-[600px] sm:h-[700px] md:h-[750px] lg:h-[550px] xl:h-[600px] md:flex-1">
          <Image
            src={"/hero.png"}
            alt="hero image"
            fill
            objectFit="cover "
            className="absolute top-0 left-0 h-[500px] w-[200px] md:object-cover  "
          />
          <Image
            src={"/star.png"}
            alt={"star image"}
            width={60}
            height={56}
            className=" md:flex absolute top-[150px] sm:top-[200px] md:top-[250px] lg:top-[300px]  xl:top-[331px] left-[30px] sm:left-[40px] md:left-[1px]"
          />
          <Image
            src={"/star2.png"}
            alt={"star image"}
            width={104}
            height={104}
            className="absolute  md:flex top-[20px] sm:top-[27px] md:top-[50px] lg:top-[75px] xl:top-[100px] right-3 sm:right-5"
          />
        </div>
      </section>

      <div className="w-full h-full min-h-[146px] md:h-[122px] bg-black flex flex-wrap items-center justify-around py-4 px-2 sm:px-4 md:px-6 lg:px-8">
        <Image
          src={"/brand1.png"}
          alt="Brand Logo 1"
          width={166}
          height={33}
          className="m-2 sm:m-3 md:m-0"
        />
        <Image
          src={"/brand2.png"}
          alt="Brand Logo 2"
          width={91}
          height={38}
          className="m-2 sm:m-3 md:m-0"
        />
        <Image
          src={"/brand3.png"}
          alt="Brand Logo 3"
          width={156}
          height={36}
          className="m-2 sm:m-3 md:m-0"
        />
        <Image
          src={"/brand4.png"}
          alt="Brand Logo 4"
          width={194}
          height={32}
          className="m-2 sm:m-3 md:m-0"
        />
        <Image
          src={"/brand5.png"}
          alt="Brand Logo 5"
          width={206}
          height={33}
          className="m-2 sm:m-3 md:m-0"
        />
      </div>

      <NewArrivals />
      <Selling />
      <DressStyle />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
