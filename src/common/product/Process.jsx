import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Process({ productId }) {
  const navigate = useNavigate();

  return (
    <div className="product-icons">
      <button>
        <FaRegHeart />
      </button>

      <button onClick={() => navigate(`/product/${productId}`)}>
        <BiShowAlt />
      </button>
    </div>
  );
}

export default Process;
