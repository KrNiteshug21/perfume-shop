import { X } from "lucide-react";
import React, { useState } from "react";
import { addReview, updateProduct } from "../../api/service";

const init = {
  username: "",
  rating: "",
  comment: "",
};

const ReviewForm = ({ id, setReviewFormOpen }) => {
  const [formData, setFormData] = useState(init);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewResult = await addReview({ ...formData, productId: id });
    console.log("reviewResult", reviewResult);
    const updateProductResult = await updateProduct(id, reviewResult._id);
    console.log("updateProductResult", updateProductResult);
    if (
      updateProductResult.reviews.length > 0 &&
      updateProductResult._id &&
      reviewResult._id
    ) {
      window.location.reload();
      setFormData(init);
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section>
      <div className="top-1/2 left-1/2 z-50 fixed flex justify-center items-center bg-black/50 p-4 w-full h-full -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white mx-auto p-6 rounded-md w-[500px]">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-2xl text-gray-900">
              Write a Review
            </h2>
            <button
              className="cursor-pointer"
              onClick={() => setReviewFormOpen(false)}
            >
              <X />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="hidden text-gray-600">Your Name</label>
              <input
                name="username"
                type="text"
                className="border-gray-300 mt-2 p-2 border rounded-md w-full outline-none"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <label className="hidden text-gray-600">Your Rating</label>
              <input
                type="text"
                name="rating"
                placeholder="choose rating..."
                className="border-gray-300 mt-2 p-2 border rounded-md w-full outline-none"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="hidden text-gray-600">Your Review</label>
              <textarea
                name="comment"
                className="border-gray-300 mt-2 p-2 border rounded-md w-full outline-none"
                rows="4"
                placeholder="Write your review here..."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-teal-600 to-teal-800 mt-4 py-2 rounded-md w-full font-medium text-white cursor-pointer"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
