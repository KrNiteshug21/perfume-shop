import { Star } from "lucide-react";
import React from "react";

function calculateAverageRating(reviews) {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce(
    (acc, review) => acc + parseFloat(review.rating),
    0
  );
  return sum / reviews.length;
}

const ProductRating = ({ reviews }) => {
  const rating = calculateAverageRating(reviews);
  const reviewCount = reviews.length;

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <Star
            key={rating}
            className={`h-5 w-5 flex-shrink-0 ${
              rating < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
          />
        ))}
      </div>
      <p className="ml-2 text-gray-700 text-sm">
        {rating.toFixed(1)} out of 5 stars
      </p>
      <a
        href="#reviews"
        className="ml-4 font-medium text-indigo-600 text-sm hover:text-indigo-500"
      >
        {reviewCount} reviews
      </a>
    </div>
  );
};

export default ProductRating;
