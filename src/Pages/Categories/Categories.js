import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";
import blueTick from "../../assets/brand/1271380.png";
import BookingModal from "../Booking/BookingModal/BookingModal";
import AuthProvider, { AuthContext } from "../../contexts/Authprovider";
import { getVerifiedStatus } from "../../api/user";
import { data } from "autoprefixer";
import { format } from "date-fns";
const Categories = () => {
  const products = useLoaderData();
  const { name, _id, resalePrice } = products;
  const { user } = useContext(AuthContext);
  const [isVerified, setisVerified] = useState("");
  const currentDateYear = format(new Date(), "y");
  console.log(currentDateYear);

  useEffect(() => {
    getVerifiedStatus(user?.email).then((data) => {
      setisVerified(data);
    });
  }, [user]);

  return (
    <div className="antialiased text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {products?.map((product) => {
            return (
              <div
                key={product._id}
                className="w-full min-h-[70px] sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
              >
                <div
                  href=""
                  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={product.picture}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      {product.location}
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">{product.name}</h2>
                    <p className="text-sm">
                      Year of Used :{" "}
                      <span className="font-bold">
                        {currentDateYear - product.useOfTime}
                      </span>{" "}
                      Years
                    </p>
                    <div className="mt-3 flex items-center">
                      <span className="text-sm font-semibold">
                        Original Price :
                      </span>
                      &nbsp;
                      <span className="font-bold text-xl">
                        {" "}
                        {product.originalPrice}
                      </span>
                      &nbsp;
                      <span className="text-sm font-semibold">€</span>
                    </div>
                    <div className="mt-3 flex items-center">
                      <span className="text-sm font-semibold">
                        Resale Price :
                      </span>
                      &nbsp;
                      <span className="font-bold text-xl">
                        {product.resalePrice}
                      </span>
                      &nbsp;
                      <span className="text-sm font-semibold">€</span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                      <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                      {product?.postDate}
                    </span>
                    <span className="flex items-center">
                      <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      {product.sellersName}{" "}
                      <span className="mx-5">
                        {product?.sellerVerified === "verified" ? (
                          <>
                            {" "}
                            <img className="w-5 h-5" src={blueTick} alt="" />
                            <span>Added by Verified Seller</span>
                          </>
                        ) : (
                          ""
                        )}{" "}
                      </span>
                    </span>
                  </div>
                  <div className="p-2 flex items-center text-sm text-gray-600">
                    {product?.sellerVerified === "verified" && (
                      <>
                        <span className="ml-2">
                          {" "}
                          <label
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white"
                          >
                            Book Appointment
                          </label>
                        </span>
                      </>
                    )}
                    {/*   <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-gray-400"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg> */}
                  </div>
                </div>
                <BookingModal
                  name={product?.name}
                  _id={product?._id}
                  resalePrice={product?.resalePrice}
                  picture={product?.picture}
                  title={product?.title}
                ></BookingModal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
