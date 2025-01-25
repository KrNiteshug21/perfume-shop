import React from "react";
import { getProductById } from "../../api/service";
import { useParams } from "react-router";
import SectionWrapper from "../SectionWrapper";
import ProductContent from "./ProductContent";
import ReviewInfo from "./ReviewInfo";
import Carousel from "./Carousel";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error, isError } = getProductById(id);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <SectionWrapper className="mb-8 py-4">
      <div className="flex flex-wrap sm:flex-nowrap gap-8">
        <Carousel images={data.images} />
        <ProductContent data={data} />
      </div>

      <ReviewInfo id={id} reviews={data.reviews} />
    </SectionWrapper>
  );
};

export default ProductDetailPage;
