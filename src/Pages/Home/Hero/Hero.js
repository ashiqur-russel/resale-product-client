import React from "react";
import carImg from "../../../assets/cars/1.jpeg";
const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${carImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full">
          <h1 className="mb-5 mt-5 text-center text-5xl font-bold">
            Find your perfect car with Auto haus,
            <br /> Europe's largest online <br /> used car market.
          </h1>
          <p className="mb-10">
            Auto Haus is the perfect online marketplace to start your budget
            vehicle search. <br /> Find the right used car for you among
            hundreds of thousands of offers . <br /> Regardless of whether you
            are looking for,you will find what you are looking for at
            AutoScout24. <br /> Start your new or used car search at Auto Haus
            now.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
