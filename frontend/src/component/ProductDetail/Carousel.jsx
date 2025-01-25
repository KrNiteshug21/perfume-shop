import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex gap-4 w-full sm:w-1/2">
      <div className="flex flex-col gap-4 py-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="product"
            onClick={() => setCurrentImage(index)}
            className={`${
              index == currentImage ? "border-2 border-black/50" : ""
            } rounded-sm w-20 h-20 cursor-pointer`}
          />
        ))}
      </div>
      <div>
        <img
          src={images[currentImage]}
          alt="product"
          className="rounded-md w-full sm:w-96 h-full sm:h-96 object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
