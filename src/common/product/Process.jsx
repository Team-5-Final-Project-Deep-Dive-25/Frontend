import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa6";

function Process() {
  return (
    <div className="product-icons">
      <button>
        <FaRegHeart />
      </button>

      <button>
        <BiShowAlt />
      </button>
    </div>
  );
}

export default Process;
