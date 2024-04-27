import React from "react";
import Hero from "../components/Hero/Hero";
import Touristspot from "../components/Tourist/Touristspot";
import Country from "../components/countries/Country";
import Special from "../components/Special/Special";
import Blog from "../components/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <Touristspot />
      <Country />
      <Special />
      <Blog />
    </div>
  );
};

export default Home;
