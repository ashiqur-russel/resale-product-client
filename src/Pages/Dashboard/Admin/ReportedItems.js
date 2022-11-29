import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import SmallSpinner from "../../../components/spinner/Spinner";
import { deleteProduct } from "../../../api/product";
import toast from "react-hot-toast";
import DeleteModal from "../../../components/Modal/DeleteModal";
const ReportedItems = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`https://autohaus.vercel.app/products`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("resale-token")}`,
        },
      });
      const data = await res.json();

      const filter = data.filter(
        (reportedProduct) => reportedProduct.reported === true
      );

      console.log(filter);
      return filter;
    },
  });

  //Delete modal

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const modalHandler = (id) => {
    console.log(id);

    deleteProduct(id).then((data) => {
      toast.success("Product Deleted");
      refetch();
    });

    closeModal();
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Reported Product</h2>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product Photo
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product Category
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product Id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Seller
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <tr key={product._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={product?.picture}
                              alt="d"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product?.title}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {" "}
                          {product?._id}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {" "}
                          {product?.sellersName}{" "}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {/*      <DeleteModal
                          openModal={openModal}
                          isOpen={isOpen}
                          closeModal={closeModal}
                          modalHandler={modalHandler}
                          _id={product?._id}
                        ></DeleteModal> */}
                        <button
                          onClick={() => modalHandler(product._id)}
                          className="btb btn-danger bg-red-400 p-2 hover:cursor-pointer"
                        >
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
    </div>
  );
};

export default ReportedItems;
