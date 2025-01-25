import React from "react";
import ProductRating from "./ProductRating";
import { Share2 } from "lucide-react";

const ProductContent = ({ data }) => {
  return (
    <div className="sm:w-1/2">
      <h1 className="bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600 font-extrabold text-3xl text-transparent">
        {data.title}
      </h1>
      <div className="mt-3">
        <ProductRating reviews={data.reviews} />
      </div>
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="font-bold text-3xl text-teal-600">
          ${data.price.toFixed(2)}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <p className="text-base text-gray-700">{data.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center">
          <h3 className="font-medium text-gray-900 text-sm">Size:</h3>
          <div className="flex items-center space-x-3 ml-4">
            {data.size.map((s) => (
              <button
                key={s}
                className="border-purple-300 hover:bg-purple-100 px-3 py-1 border rounded-md focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 font-medium text-purple-700 text-sm focus:outline-none"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <button
          type="submit"
          className="flex flex-1 sm:flex-auto justify-center items-center bg-gradient-to-r from-teal-600 hover:from-teal-700 to-teal-600 hover:to-teal-700 px-8 py-3 border border-transparent rounded-md focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full max-w-xs font-medium text-base text-white focus:outline-none"
        >
          Add to bag
        </button>

        <button
          type="button"
          className="flex justify-center items-center hover:bg-gray-100 ml-4 px-3 py-3 rounded-md text-gray-400 hover:text-gray-500"
        >
          <Share2 className="w-6 h-6" aria-hidden="true" />
          <span className="sr-only">Share</span>
        </button>
      </div>
    </div>
  );
};

export default ProductContent;
