import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Process({ ele }) {
  return (
    <div className="product-icons">
      <button>
        <FaRegHeart />
      </button>

      <Link to={`/products/${ele.id}`}>
        <BiShowAlt />
      </Link>
    </div>
  );
}

export default Process;
