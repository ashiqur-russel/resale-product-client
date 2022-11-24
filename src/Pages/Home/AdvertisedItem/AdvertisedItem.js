import React from "react";
import carImg1 from "../../../assets/cars/ford-ecosport-1.jpeg";
import carImg2 from "../../../assets/cars/Spinny-Resale-Header.jpeg";
import carImg3 from "../../../assets/cars/2019-Hyundai-Creta-1_big.jpeg";

const AdvertisedItem = () => {
  return (
    <div className="mt-5 p-4">
      <h2 className="text-3xl text-bold">Current Advertised offer</h2>
      <p className="">Our most popular offers - many for a short time only</p>
      <div className="grid grid-auto-flow  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={carImg1} alt="car1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ford Fiesta
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>$3000</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                <p>4 Door</p>
              </div>
              <div className="badge badge-outline">Diesel</div>
              <div className="badge badge-outline">Hundai</div>
            </div>
          </div>
        </div>

        {/* 2--- */}
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={carImg2} alt="car2" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Toyota
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>$2000</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                <p>4 Door</p>
              </div>
              <div className="badge badge-outline">Diesel</div>
              <div className="badge badge-outline">Hundai</div>
            </div>
          </div>
        </div>
        {/* 3----- */}

        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={carImg3} alt="car3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Hundai
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>$4000</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                <p>4 Door</p>
              </div>
              <div className="badge badge-outline">Diesel</div>
              <div className="badge badge-outline">Hundai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItem;
