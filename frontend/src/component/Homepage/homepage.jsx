import React from "react";
import Banner from "./Banner";
import LatestCollection from "./LatestCollection";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <LatestCollection />
    </div>
  );
};

export default Homepage;
