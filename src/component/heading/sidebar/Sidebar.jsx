import React, { useContext } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { categoryName, getProductsOfCategory } = useContext(ProductsContext);

  const handleGetCategory = (categoryId) => {
    getProductsOfCategory(categoryId);
    navigate("/ProductsOfCat");
  };

  return (
    <div className="Sidebar">
      <div className="container">
        <ul className="category-list">
          {categoryName.map((val, index) => (
            <div
              key={index}
              className="cat-btn"
              onClick={() => handleGetCategory(val._id)}
            >
              <li className="m-0 m-auto">{val.title}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
