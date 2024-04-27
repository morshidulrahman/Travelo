import React from "react";
import Hero from "../components/Hero/Hero";
import Touristspot from "../components/Tourist/Touristspot";
import Country from "../components/countries/Country";

const Home = () => {
  return (
    <div>
      <Hero />
      <Touristspot />
      <Country />
    </div>
  );
};

export default Home;
