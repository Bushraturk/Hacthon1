import React from 'react';
import Image from 'next/image';

const NewArrivals = () => {
  const products = [
    {
      name: "T-Shirt with Tape Details",
      rating: 4.5,
      price: 120,
      discountedPrice: 180,
      discount: 20,
      imageUrl: '/img1.png', // Added imageUrl
    },
    {
      name: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      discountedPrice: 130,
      discount: 30,
      imageUrl: '/img2.png', // Added imageUrl
    },
    {
      name: "Checkerered Shirt",
      rating: 4.5,
      price: 260,
      discountedPrice: 160,
      discount: 30,
      imageUrl: '/img3.png', // Added imageUrl
    },
    {
      name: "Sleeve Striped T-Shirt",
      rating: 4.5,
      price: 180,
      discountedPrice: 120,
      discount: 20,
      imageUrl: '/img4.png', // Added imageUrl
    },
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <div className="relative mb-4">
              {/* Render the image along with the URL */}
              <Image
                src={product.imageUrl} // Use imageUrl from the product data
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <div className="flex items-center space-x-1 text-yellow-400">
              {/* Render star ratings */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.5 3 2-6.5L0 7h6.5L10 0l3.5 7H20l-6.5 4.5L15.5 18z" />
                </svg>
              ))}
            </div>
            <div className="flex items-baseline mt-2">
              {product.discountedPrice ? (
                <>
                  <span className="text-lg font-semibold text-gray-900">${product.discountedPrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                </>
              ) : (
                <span className="text-lg font-semibold text-gray-900">${product.price}</span>
              )}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {/* Show image URL */}
              <span>Image URL: {product.imageUrl}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-lg font-semibold text-blue-500">
          View All
        </a>
      </div>
    </section>
  );
};

export default NewArrivals;














