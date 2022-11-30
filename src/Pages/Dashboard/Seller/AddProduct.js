import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import AddProductForm from "../../../components/Forms/AddProductForm";
import addProduct from "../../../api/product";
import { getImageUrl } from "../../../api/imageUpload";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const AddProduct = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isVerified, setisVerified] = useState("");

  const { data: sellerData = [] } = useQuery({
    queryKey: ["sellerData"],
    queryFn: async () => {
      const res = await fetch(
        `https://autohaus-ashiqur-russel.vercel.app/users`,
        {
          authorization: `bearer ${localStorage.getItem("sales-token")}`,
        }
      );
      const data = await res.json();
      const filter = data.filter((user) => user.role === "seller");
      console.log(filter);

      const filterdSeller = filter.find((data) => data.email === user?.email);
      setisVerified(filterdSeller?.verified);
      return filterdSeller;
    },
  });

  console.log(sellerData);

  //const [userData, setUserData] = useState(AuthProvider);

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
    const sellerVerified = isVerified;

    getImageUrl(image)
      .then((data) => {
        const ProductData = {
          title,
          location,
          name,
          originalPrice: actual_price,
          resalePrice: resale_price,
          useOfTime: parseInt(useofYear),
          sellerVerified,
          description,
          availability: "yes",
          advertised: "no",
          displayOnAdvertise: "no",
          picture: data,
          sellersName: user?.displayName,
          email: user?.email,
          postDate: format(new Date(), "PP"),
        };

        console.log("Product data : ", ProductData);

        addProduct(ProductData).then((data) => {
          console.log(" product data ====", data);
          toast.success("Product Added Successfully");
          navigate("/dashboard/my-products");
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Product
      </h1>
      <AddProductForm loading={loading} handleSubmit={handleSubmit} />
    </>
  );
};

export default AddProduct;
