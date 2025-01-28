import React, { useState } from "react";
import ProductRating from "./ProductRating";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";

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
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewInfo;
