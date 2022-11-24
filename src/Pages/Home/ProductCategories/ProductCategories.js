import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import vw from "../../../assets/brand/icons8-volkswagen-250.png";

import "./ProductCategoried.css";

const ProductCategories = () => {
  const img = "https://claw1990.imgbb.com/";
  const [carCategories, setCarCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarCategories(data);
      });
  }, []);

  const handleProductClick = (name) => {
    console.log("clicked", name);
    navigate(`/categories/${name}`);
  };
  return (
    <div className="mt-5 p-4">
      <h2 className="text-3xl text-bold">Discover your cars with brand</h2>
      <div className="grid grid-auto-flow md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {carCategories.map((cat) => (
          <div
            key={cat._id}
            className="card bg-base-100 shadow-xl"
            onClick={() => handleProductClick(cat.name)}
          >
            <img className="productimg" src={cat.image} alt={cat.name} />

            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
