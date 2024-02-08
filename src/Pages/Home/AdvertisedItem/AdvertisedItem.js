import React, { useEffect, useContext, useState } from "react";
import blueTick from "../../../assets/brand/1271380.png";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authprovider";
import { getVerifiedStatus } from "../../../api/user";
import toast from "react-hot-toast";
import SmallSpinner from "../../../components/spinner/spinner.js";

const AdvertisedItem = () => {
  const { loading, user } = useContext(AuthContext);

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const url = `${process.env.REACT_APP_API_LOCAL_url}/addvertise`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleReport = async (id) => {
    console.log("clicked", id);

    if (user?.uid) {
      const url = `${process.env.REACT_APP_API_LOCAL_url}/product/${id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("sales-token")}`,
        },
      }).then((res) =>
        res
          .json()
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Report Sent to Admin");
            }
          })
          .catch((err) => console.log(err))
      );
    }
  };

  /* {userData?.verified === "verified" && (
                        <img className="w-5 h-5" src={blueTick} alt="" />
                      )} */
  if (loading) {
    return <SmallSpinner></SmallSpinner>;
  }
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
                    {user && user?.uid && (
                      <div
                        className="badge badge-error hover:mouse"
                        onClick={() => handleReport(product?.product_id)}
                      >
                        Report
                      </div>
                    )}

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
