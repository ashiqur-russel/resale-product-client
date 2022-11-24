import React from "react";
import vw from "../../../assets/brand/icons8-volkswagen-250.png";
import tyota from "../../../assets/brand/icons8-toyota-250.png";
import hundai from "../../../assets/brand/icons8-hyundai-250.png";
import merce from "../../../assets/brand/icons8-bmw-250.png";
import "./ProductCategoried.css";

const ProductCategories = () => {
  return (
    <div className="mt-5 p-4">
      <h2 className="text-3xl text-bold">Discover your cars with brand</h2>
      <div className="grid grid-auto-flow md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={merce} alt="mercedeze" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={vw} alt="vw" />
          </figure>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={hundai} alt="hyundai" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={tyota} alt="Tyota" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={tyota} alt="Tyota" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={tyota} alt="Tyota" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={tyota} alt="Tyota" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="productimg" src={tyota} alt="Tyota" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
