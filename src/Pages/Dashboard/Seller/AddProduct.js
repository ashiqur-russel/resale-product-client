import React, { useContext } from "react";
import toast from "react-hot-toast";
import AddProductForm from "../../../components/Forms/AddProductForm";
import { AuthContext } from "../../../contexts/Authprovider";
import addProduct from "../../../api/product";
import { getImageUrl } from "../../../api/imageUpload";
const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const actual_price = event.target.actual_price.value;
    const resale_price = event.target.resale_price.value;
    const name = event.target.name.value;
    const useofYear = event.target.purchase_year.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    getImageUrl(image)
      .then((data) => {
        const homeData = {
          title,
          location,
          name,
          originalPrice: actual_price,
          resalePrice: resale_price,
          useOfTime: useofYear,
          description,
          picture: data,
          sellersName: user?.displayName,
          verified: "false",
          email: user?.email,
        };

        addProduct(homeData).then((data) => {
          console.log(data);
          toast.success("Product Added Successfully");
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Home
      </h1>
      <AddProductForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddProduct;
