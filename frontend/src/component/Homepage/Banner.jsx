import React from "react";
import { Link } from "react-router";
import SectionWrapper from "../Wrapper/SectionWrapper";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-800">
      <SectionWrapper>
        <div className="py-3">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-1 items-center w-0">
              <span className="flex bg-teal-800 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Explore our latest collections!
                </span>
                <span className="md:inline hidden">
                  Big news! We're excited to announce our latest fragrance
                  collections.
                </span>
              </p>
            </div>
            <div className="flex-shrink-0 order-3 sm:order-2 mt-2 sm:mt-0 sm:w-auto">
              <Link
                to="/products"
                className="flex justify-center items-center bg-white hover:bg-gold-100 shadow-sm px-4 py-2 border border-transparent rounded-md font-medium text-sm text-teal-600"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Banner;
