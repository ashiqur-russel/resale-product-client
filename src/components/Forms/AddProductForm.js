import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/Authprovider";
import SmallSpinner from "../spinner/Spinner";
const AddProductForm = ({ handleSubmit }) => {
  const { loading } = useContext(AuthContext);

  const [condition, setCondition] = useState("");
  const [categories, setCategoried] = useState([]);
  useEffect(() => {
    fetch("https://autohaus.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoried(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeCondition = (newCondition) => {
    setCondition(newCondition);
  };
  if (loading) {
    return <SmallSpinner></SmallSpinner>;
  }
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Product Title/Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="phone" className="block text-gray-600">
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                name="phone"
                id="phone"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="actual_price" className="block text-gray-600">
                  Actual Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                  name="actual_price"
                  id="actual_price"
                  type="text"
                  placeholder="Actual Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="resale_price" className="block text-gray-600">
                  Resale Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                  name="resale_price"
                  id="resale_price"
                  type="text"
                  placeholder="Resale Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="purchase_year" className="block text-gray-600">
                  Purchase Year
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                  name="purchase_year"
                  id="purchase_year"
                  type="text"
                  placeholder="Year"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="condition" className="text-sm">
                  Product Category
                </label>

                <select
                  onChange={(event) => changeCondition(event.target.value)}
                  id="name"
                  className="w-full  py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="condition" className="text-sm">
                  Condition{" "}
                </label>

                <select
                  onChange={(event) => changeCondition(event.target.value)}
                  id="condition"
                  className="w-full  py-3 text-gray-800 border transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                >
                  <option value={condition}>Excellent</option>
                  <option value={condition}>Good</option>
                  <option value={condition}>Fair</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold   hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-red-400"
              >
                Product photo
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="True"
                    >
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </label>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:red-300 w-full h-20 px-4 py-3 text-gray-800 bg-gray-50 border border-grgrayeen-300 "
                name="description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full p-3 text-center font-medium tracking-wide text-white bg-orange-700 transition duration-200 rounded shadow-md  hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
            >
              {loading ? <SmallSpinner /> : "SAVE"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
