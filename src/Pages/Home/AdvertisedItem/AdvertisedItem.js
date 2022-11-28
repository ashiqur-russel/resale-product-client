import React, { useEffect, useContext, useState } from "react";
import blueTick from "../../../assets/brand/1271380.png";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authprovider";
import { getVerifiedStatus } from "../../../api/user";

const AdvertisedItem = () => {
  const { user } = useContext(AuthContext);
  const [isVerified, setisVerified] = useState("");

  useEffect(() => {
    getVerifiedStatus(user?.email).then((data) => {
      console.log("-----------", data);
    });
  }, [user]);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const url = `http://localhost:8000/addvertise`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleReport = async (id) => {
    console.log("clicked", id);
    const url = `http://localhost:8000/product/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("sales-token")}`,
      },
    });
    const data = await response.json();
    console.log(data);

    return data;
  };

  /* {userData?.verified === "verified" && (
                        <img className="w-5 h-5" src={blueTick} alt="" />
                      )} */
  return (
    <div className="mt-5 p-4">
      {products.length > 0 && (
        <>
          <h2 className="text-3xl text-bold">Current Advertised offer</h2>
          <p className="">
            Our most popular offers - many for a short time only
          </p>
        </>
      )}
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
                    Seller Name :{product?.sellerName}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Price $ {product?.price}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      <p>{product?.salesStatus}</p>
                    </div>
                    <div
                      className="badge badge-error hover:mouse"
                      onClick={() => handleReport(product?.product_id)}
                    >
                      Report
                    </div>
                    <div className="badge badge-outline">
                      {product?.sellerVerified === "verified" ? (
                        <>
                          {" "}
                          <img className="w-5 h-5" src={blueTick} alt="" />
                          <span>Verified Seller</span>
                        </>
                      ) : (
                        ""
                      )}{" "}
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
