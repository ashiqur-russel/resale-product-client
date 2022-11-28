import React from "react";
import { Link } from "react-router-dom";
import autoImg from "../../../assets/sale_car.jpeg";
const PopularCar = () => {
  return (
    <div>
      <div className="m-10 p-4">
        <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl">
          <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
            <img className="" src={autoImg} alt="auto" />
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
              <h1 className="text-3xl pb-3">Sell ​​your car without stress!</h1>
              <p className="text-gray-600">
                <span className="text-gray-900"></span> Find out now how much
                your car is still worth - 100% online and free of charge . You
                will receive a final price directly from us. For this price you
                can either sell your car directly or trade it in when you buy it
                online .
              </p>
              <Link className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900">
                <span>Learn more about our users</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </Link>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
