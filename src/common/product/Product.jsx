import React from "react";
import "./product.css";
import Process from "./Process";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Product = ({ ele }) => {
  return (
    <div className="container-card">
      <div className="container-card-img">
        <img src={ele?.images?.[0]} alt="product" className="product-image" />
        <Process productId={ele?.id || ele?._id} />
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="container-card-details">
        <h2 className="product-title">
          {ele?.name ? ele.name.split(" ").slice(0, 3).join(" ") : ""}
        </h2>

        <div className="product-info-row">
          <p className="product-price m-0">
            <span>{ele?.price}$</span>
            <del>{ele?.price + 100}$</del>
          </p>
        </div>

        <div className="d-flex align-items-center gap-3 w-100">
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <p className="product-stock m-0">({ele?.stock || 0}) left</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
