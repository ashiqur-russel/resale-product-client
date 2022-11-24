import React from "react";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import Hero from "../Hero/Hero";
import PopularCar from "../PopularCar/PopularCar";
import ProductCategories from "../ProductCategories/ProductCategories";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AdvertisedItem></AdvertisedItem>
      <ProductCategories></ProductCategories>
      <PopularCar></PopularCar>
      <Service></Service>
    </div>
  );
};

export default Home;
