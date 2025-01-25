import React from "react";
import { getProducts } from "../../api/service";
import SectionWrapper from "../SectionWrapper";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="space-y-2 border-2 border-gray-200 p-2 rounded-md w-full">
      <div className="relative w-full h-72 overflow-hidden">
        <img
          className="rounded-md w-full h-72 transition duration-300 hover:scale-105 object-center object-cover"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="space-y-2 my-2">
        <Link to={`/products/${product._id}`}>
          <h3 className="font-semibold text-2xl text-teal-800">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-justify">
          {product.description.length > 30
            ? product.description.slice(0, 30) + "..."
            : product.description}
        </p>
        <p className="text-4xl">${product.price}</p>
      </div>
    </div>
  );
};

const LatestCollection = () => {
  const { data, loading, isError, error } = getProducts();
  // console.log("data", data);

  return (
    <SectionWrapper className="py-4">
      <h2 className="font-semibold text-2xl text-teal-800">
        OUR LATEST COLLECTION
      </h2>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4">
            {data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default LatestCollection;
