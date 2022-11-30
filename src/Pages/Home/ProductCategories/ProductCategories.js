import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ProductCategoried.css";

const ProductCategories = () => {
  const [carCategories, setCarCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://autohaus-ashiqur-russel.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarCategories(data);
      });
  }, []);

  return (
    <div className="mt-5 p-4">
      <h2 className="text-3xl text-bold">Discover your cars with brand</h2>
      <div className="grid grid-auto-flow md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {carCategories.map((cat) => (
          <Link key={cat?._id} to={`/categories/${cat?.name}`}>
            <div className="card bg-base-100 shadow-xl">
              <img className="productimg" src={cat?.image} alt={cat?.name} />

              <p>{cat?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
