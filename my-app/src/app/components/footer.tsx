import Image from "next/image";

const Footer = () => {
  return (
    <div>
      {/* Subscription Section */}
      <div className="relative top-24 xl:top-1/2 transform xl:translate-y-1/2 mt-0 xl:mt-[40px] flex flex-col lg:flex-row w-full h-auto lg:h-[180px] rounded-[20px] items-center justify-between py-[30px] px-[40px] xl:py-[36px] xl:px-[64px] bg-[#000000]">
        <h1 className="w-full lg:w-[540px] text-white text-[32px] lg:text-[38px] leading-[35px] lg:leading-[45px] font-extrabold text-center lg:text-left">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h1>
        <div className="relative w-full lg:w-[349px] flex flex-col space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email address"
              className="placeholder-[#00000066] h-[50px] bg-white rounded-full py-[12px] pl-[50px] pr-[16px] w-full text-[14px] lg:text-[16px] font-[400] leading-[21.6px] border"
            />
            <div className="absolute left-[16px] top-[15px]">
              <Image
                src="/envelpoe.png"
                alt="Envelope Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Subscribe Button */}
          <button className="h-[50px] bg-white rounded-full py-[12px] px-[16px] w-full text-center text-[14px] lg:text-[16px] font-[400] leading-[21.6px] border">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Add Space Between Navbar and Footer */}
      <div className="h-[60px] lg:h-[80px] bg-[#F0F0F0]"></div>

      {/* Footer Section */}
      <footer className="bg-[#F0F0F0] text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap">
          {/* Company Information */}
          <div className="w-full md:w-64 flex-shrink-0 text-center md:text-left">
            <div className="flex flex-col space-y-[35px]">
              {/* Logo */}
              <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
                <span className="ml-3 text-3xl font-bold text-black">
                  SHOP.CO
                </span>
              </a>
              {/* Description */}
              <p className="text-sm text-gray-500">
                We have clothes that suit your style and make you proud to wear
                them. From women to men.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <Image src="/1.png" alt="Facebook" height={28} width={28} />
                <Image src="/2.png" alt="Twitter" height={28} width={28} />
                <Image src="/3.png" alt="Instagram" height={28} width={28} />
                <Image src="/4.png" alt="LinkedIn" height={28} width={28} />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow flex flex-wrap md:pl-20 mt-10 md:mt-0 text-center md:text-left">
            {["COMPANY", "HELP", "FAQ", "RESOURCES"].map((section, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-black text-bold text-[20px] tracking-widest text-sm mb-3">
                  {section}
                </h2>
                <nav className="list-none mb-10">
                  {section === "COMPANY" &&
                    ["About", "Features", "Works", "Career"].map((link, i) => (
                      <li key={i}>
                        <a className="text-gray-600 hover:text-gray-800">
                          {link}
                        </a>
                      </li>
                    ))}
                  {section === "HELP" &&
                    [
                      "Customer Support",
                      "Delivery Details",
                      "Terms & Conditions",
                      "Privacy Policy",
                    ].map((link, i) => (
                      <li key={i}>
                        <a className="text-gray-600 hover:text-gray-800">
                          {link}
                        </a>
                      </li>
                    ))}
                  {section === "FAQ" &&
                    ["Account", "Manage Deliveries", "Orders", "Payments"].map(
                      (link, i) => (
                        <li key={i}>
                          <a className="text-gray-600 hover:text-gray-800">
                            {link}
                          </a>
                        </li>
                      )
                    )}
                  {section === "RESOURCES" &&
                    [
                      "Free eBooks",
                      "Development Tutorial",
                      "How to - Blog",
                      "YouTube Playlist",
                    ].map((link, i) => (
                      <li key={i}>
                        <a className="text-gray-600 hover:text-gray-800">
                          {link}
                        </a>
                      </li>
                    ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Shop.co © 2000-2023 All Rights Reserved
            </p>
            <div className="flex sm:ml-auto mt-4 sm:mt-0 justify-center sm:justify-start">
              {[
                "Badge1.png",
                "Badge2.png",
                "Badge3.png",
                "Badge4.png",
                "Badge5.png",
              ].map((badge, i) => (
                <Image
                  key={i}
                  src={`/${badge}`}
                  alt={`Badge ${i + 1}`}
                  height={30}
                  width={50}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
