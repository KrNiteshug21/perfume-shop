import { Star } from "lucide-react";
import React, { useState } from "react";
import ProductRating from "./ProductRating";
import ReviewForm from "./ReviewForm";

const ReviewInfo = ({ id, reviews }) => {
  const [reviewFormOpen, setReviewFormOpen] = useState(false);

  return (
    <>
      {reviewFormOpen && (
        <ReviewForm id={id} setReviewFormOpen={setReviewFormOpen} />
      )}
      <div className="mt-10" id="reviews">
        <h3 className="font-medium text-gray-900 text-lg">Customer Reviews</h3>
        <div className="flex justify-between items-center mt-3">
          <ProductRating reviews={reviews} />
          <button
            onClick={() => setReviewFormOpen(true)}
            className="font-medium text-purple-600 text-sm hover:text-purple-500"
          >
            Write a review
          </button>
        </div>
        <div className="space-y-8 mt-6">
          {reviews.map((review) => (
            <div key={review._id} className="border-gray-200 pt-6 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{review.username}</p>
                  <p className="text-gray-500 text-sm">
                    {review.createdAt.slice(0, 10)}
                  </p>
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
                <button className="text-gray-500 text-sm hover:text-gray-700">
                  Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewInfo;
