import React from "react";
import { getProductById } from "../../api/service";
import { useParams } from "react-router";
import SectionWrapper from "../SectionWrapper";
import { Share2 } from "lucide-react";
import ProductRating from "./ProductRating";

function calculateAverageRating(reviews) {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error, isError } = getProductById(id);
  console.log("data", data);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <SectionWrapper className="py-4">
      <div className="flex gap-8">
        <div className="space-x-2 space-y-2 w-1/2 columns-2">
          {data?.images?.map((image, index) => (
            <div key={index} className="relative w-full h-68 overflow-hidden">
              <img
                src={image}
                className="rounded-md w-full h-full object-center object-cover"
              />
            </div>
          ))}
        </div>

        <div className="w-1/2">
          <h1 className="bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600 font-extrabold text-3xl text-transparent">
            {data.title}
          </h1>
          <div className="mt-3">
            <ProductRating
              rating={calculateAverageRating(data?.reviews)}
              reviewCount={data.reviews.length}
            />
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

          <div className="flex sm:flex-col1 mt-10">
            <button
              type="submit"
              className="flex flex-1 justify-center items-center bg-gradient-to-r from-teal-600 hover:from-teal-700 to-teal-600 hover:to-teal-700 px-8 py-3 border border-transparent rounded-md focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full max-w-xs font-medium text-base text-white focus:outline-none"
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
      </div>
      {/* Reviews */}
      <div className="mt-10" id="reviews">
        <h3 className="font-medium text-gray-900 text-lg">Customer Reviews</h3>
        <div className="flex justify-between items-center mt-3">
          <ProductRating
            rating={calculateAverageRating(data.reviews)}
            reviewCount={data.reviews.length}
          />
          <button className="font-medium text-purple-600 text-sm hover:text-purple-500">
            Write a review
          </button>
        </div>
        <div className="space-y-8 mt-6">
          {data.reviews.map((review) => (
            <div key={review.id} className="border-gray-200 pt-6 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-base text-gray-600">{review.comment}</p>
              <div className="flex items-center space-x-4 mt-4">
                <button className="text-purple-600 text-sm hover:text-purple-500">
                  Helpful ({review.helpful})
                </button>
                <button className="text-gray-500 text-sm hover:text-gray-700">
                  Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProductDetailPage;
