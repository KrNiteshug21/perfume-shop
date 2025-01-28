import React from "react";
import { Link } from "react-router";
import SectionWrapper from "../Wrapper/SectionWrapper";

const HeroSection = () => {
  return (
    <section className="relative bg-teal-800 text-white">
      <SectionWrapper>
        {/* <div className="absolute inset-0 overflow-hidden">
        <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Elegant perfume bottles"
        objectFit="cover"
        className="opacity-30"
        />
        </div> */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="mb-4 font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Discover Your Signature Scent
          </h1>
          <p className="mb-8 max-w-2xl text-xl md:text-2xl">
            Explore our curated collection of exquisite fragrances, crafted to
            elevate your everyday moments.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white hover:bg-teal-100 px-6 py-3 rounded-md font-semibold text-teal-800 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
