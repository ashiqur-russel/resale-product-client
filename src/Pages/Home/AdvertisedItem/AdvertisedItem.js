import React from "react";
import carImg1 from "../../../assets/cars/ford-ecosport-1.jpeg";
import carImg2 from "../../../assets/cars/Spinny-Resale-Header.jpeg";
import carImg3 from "../../../assets/cars/2019-Hyundai-Creta-1_big.jpeg";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AdvertisedItem = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const url = `http://localhost:8000/addvertise`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div className="mt-5 p-4">
      <h2 className="text-3xl text-bold">Current Advertised offer</h2>
      <p className="">Our most popular offers - many for a short time only</p>
      <div className="grid grid-auto-flow  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products &&
          products?.map((product) => (
            <Link to="" key={product._id}>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={product?.picture} alt="car1" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Ford Fiesta
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>$ {product?.price}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      <p>4 Door</p>
                    </div>
                    <div className="badge badge-outline">Diesel</div>
                    <div className="badge badge-outline bg-green-400">
                      Verified Seller
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AdvertisedItem;
