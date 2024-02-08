import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUserByEmail, getAllUser, verifySeller } from "../../../api/user";
import DeleteModal from "../../../components/Modal/UserDeleteModal";
import SmallSpinner from "../../../components/spinner/spinner.js";

const AllSellers = () => {
  let [isOpen, setIsOpen] = useState(false);

  const {
    data: sellerData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellerData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_LOCAL_url}/users`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("sales-token")}`,
          },
        }
      );
      const data = await res.json();
      const filter = data.filter(
        (user_seller) => user_seller.role === "seller"
      );
      console.log(filter);
      return filter;
    },
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const modalHandler = (email) => {
    deleteUserByEmail(email).then((data) => {
      toast.success("Seller Deleted");
      refetch();
    });
    //   closeModal();
  };
  if (isLoading) {
    <SmallSpinner></SmallSpinner>;
  }

  const handleRequest = async (user) => {
    verifySeller(user)
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">All Sellers Details</h2>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Verify Request
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Permission
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(sellerData) &&
                    sellerData?.map((seller, i) => (
                      <tr key={seller._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              {i + 1}
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap"></p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap"></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {seller?.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {seller?._id}{" "}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span aria-hidden className="relative">
                              {seller?.verified}
                            </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {seller?.verified && seller.verified === "requested" && (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span
                                aria-hidden
                                onClick={() => handleRequest(seller)}
                                className="relative hover:cursor-pointer"
                              >
                                {" "}
                                Approve
                              </span>
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => modalHandler(seller?.email)}
                            className="btb btn-danger bg-red-400 p-2 hover:cursor-pointer"
                          >
                            DELETE
                          </button>
                          {/*   <DeleteModal
                            openModal={openModal}
                            isOpen={isOpen}
                            closeModal={closeModal}
                            modalHandler={modalHandler}
                            email={seller.email}
                          ></DeleteModal> */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
