import React from "react";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import Hero from "../Hero/Hero";
import ProductCategories from "../ProductCategories/ProductCategories";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AdvertisedItem></AdvertisedItem>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
