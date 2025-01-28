import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import { getProducts } from "../../api/service";
import { ProductCard } from "../Homepage/LatestCollection";

const ProductPage = () => {
  const products = getProducts();

  return (
    <SectionWrapper>
      <h2 className="font-semibold text-2xl text-teal-800">PRODUCTS</h2>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        {products.data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProductPage;
