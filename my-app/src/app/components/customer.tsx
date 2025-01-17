import React from "react";


const Customer = () => {
  const reviews = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      rating: 5,
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      rating: 5,
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      rating: 5,
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      rating: 5,
      comment:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      rating: 5,
      comment:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      rating: 5,
      comment:
        "I'm not just wearing a t-shirt. I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
    },
  ];

  return (
    <div className="p-6 mb-[10px]">
      {/* Tabs */}
      <div className="flex justify-center space-x-12 border-b border-gray-300 pb-4 mb-6">
        <button className="text-lg font-medium text-gray-700 hover:text-black">
          Product Details
        </button>
        <button className="text-lg font-medium text-black border-b-2 border-black">
          Rating & Reviews
        </button>
        <button className="text-lg font-medium text-gray-700 hover:text-black">
          FAQs
        </button>
      </div>

      {/* Filters and Actions */}
      <div className="flex justify-between items-center mb-6">
        <select className="border border-gray-300 ml-auto rounded-[1000px] px-3 py-2">
          <option value="latest">Latest</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
        <button className="bg-black text-white px-4 py-2 rounded-[1000px] hover:bg-gray-800">
          Write a Review
        </button>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            <div className="flex items-center mb-3 text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-6">
        <button className="border border-gray-300 text-black px-4 py-2 rounded-[100px] hover:bg-gray-200">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default Customer;
