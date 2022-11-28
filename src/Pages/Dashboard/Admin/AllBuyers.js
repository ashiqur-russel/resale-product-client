import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { deleteUserByEmail } from "../../../api/user";
import toast from "react-hot-toast";
import SmallSpinner from "../../../components/spinner/Spinner";
import DeleteModal from "../../../components/Modal/UserDeleteModal";

const AllBuyers = () => {
  let [isOpen, setIsOpen] = useState(false);
  const {
    data: buyerData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyerData"],
    queryFn: async () => {
      const res = await fetch(
        `https://auto-haus-ashiqur-russel.vercel.app/users`,
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
        (user) => user.role !== "seller" && user.role !== "admin"
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
      console.log("inside");
      toast.success("Buyer Deleted");
      refetch();
    });
    closeModal();
  };
  if (isLoading) {
    <SmallSpinner></SmallSpinner>;
  }

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">All Buyers Details</h2>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                    <th className="px-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {buyerData &&
                    buyerData?.map((buyer, i) => (
                      <tr key={buyer?._id}>
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
                            {buyer?.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {buyer?.role}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => modalHandler(buyer?.email)}
                            className="btb btn-danger bg-red-400 p-2 hover:cursor-pointer"
                          >
                            DELETE
                          </button>
                          {/* <DeleteModal
                            openModal={openModal}
                            isOpen={isOpen}
                            closeModal={closeModal}
                            modalHandler={modalHandler}
                            email={buyer.email}
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

export default AllBuyers;
