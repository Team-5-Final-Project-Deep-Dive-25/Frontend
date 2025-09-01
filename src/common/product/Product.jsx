import React from "react";
import "./product.css";
import Process from "./Process";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Product = ({ ele }) => {
  return (
    <div className="container-card">
      <div className="container-card-img">
        <img src={ele?.thumbnail} alt="product" className="product-image" />
        <Process ele={ele} />
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="container-card-details">
        <h2 className="product-title">{ele?.title.split(' ').slice(0,3).join()}</h2>

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
          <p className="product-stock m-0">(0) left</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
