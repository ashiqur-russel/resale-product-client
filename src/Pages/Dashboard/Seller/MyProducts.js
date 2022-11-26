import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/Authprovider";
import SmallSpinner from "../../../components/spinner/Spinner";
import { getUser } from "../../../api/user";
import { addAdvertise } from "../../../api/advertise";
import toast from "react-hot-toast";
import { updateDisplayAdvertise } from "../../../api/product";
const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState("");

  useEffect(() => {
    getUser(user?.email)
      .then((data) => {
        setLoading(data.verified);
        setIsAvailable(data?.availability);
      })
      .catch((error) => console.log(error));
  }, [user]);

  console.log(user?.email);
  const url = `http://localhost:8000/my-products?email=${user?.email}`;

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("resale-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // trigger when publish button will be clicked
  const handlePublish = async (productData) => {
    const advertiseData = {
      product_id: productData?._id,
      sellerName: productData?.sellersName,
      price: productData?.resalePrice,
      sellerEmail: productData?.email,

      picture: productData?.picture,
      location: productData?.location,
    };

    addAdvertise(advertiseData)
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          updateDisplayAdvertise(productData)
            .then((data) => {
              console.log(data);
              toast.success("Display on Advertise");
              refetch();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(isAvailable);

  if (isLoading) {
    <SmallSpinner></SmallSpinner>;
  }

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Products Oder</h2>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Availability{" "}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Advetise
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products?.map((product) => (
                    <tr key={product._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={product.picture}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {product.sellersName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.title}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {" "}
                          {product.resalePrice}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          {product?.availability}
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {/* {product?.availability === "yes" ? (
                          <button
                            onClick={() => {
                              handlePublish(product);
                            }}
                            className="btb btn-danger bg-green-400 p-2 hover:cursor-pointer"
                          >
                            {product?.advertised === "no"
                              ? "Publish"
                              : "Published"}
                          </button>
                        ) : (
                          ""
                        )} */}

                        {product?.availability === "yes" &&
                          product?.advertised === "no" && (
                            <button
                              onClick={() => {
                                handlePublish(product);
                              }}
                              className="btb btn-danger bg-green-400 p-2 hover:cursor-pointer w-full"
                            >
                              Publish
                            </button>
                          )}

                        {product?.advertised === "yes" && (
                          <button
                            disabled
                            className="btb btn-danger bg-green-400 p-2 hover:cursor-pointer w-full"
                          >
                            Publisded
                          </button>
                        )}

                        {product?.availability === "no" && (
                          <button
                            disabled
                            className="btb btn-danger bg-yellow-400 p-2 hover:cursor-pointer w-full"
                          >
                            Sold
                          </button>
                        )}
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button className="btb btn-danger bg-red-400 p-2 hover:cursor-pointer">
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
