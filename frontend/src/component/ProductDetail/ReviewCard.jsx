import { Star } from "lucide-react";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div key={review._id} className="border-gray-200 pt-6 border-t">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-900">{review.username}</p>
          <p className="text-gray-500 text-sm">
            {review.createdAt.slice(0, 10)}
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{review.rating}</span>
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
        <button className="text-gray-500 text-sm hover:text-gray-700">
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
