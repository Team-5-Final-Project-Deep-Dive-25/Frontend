import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import "./browseCategory.css";

const BrowseCategory = () => {
  const navigate = useNavigate();
  const { categoryName, getProductsOfCategory } = useContext(ProductsContext);

  const handleGetCategory = (categoryId) => {
    getProductsOfCategory(categoryId);
    navigate("/ProductsOfCategory");
  };

  return (
    <div className="BrowseCategory my-5">
      <div className="container">
        <div className="section-heading">
          <div>
            <p>Categories</p>
          </div>
          <h2>Browse By Category</h2>
        </div>

        <div className="container-allCat my-5">
          {categoryName.map((val, index) => (
            <div
              key={index}
              className="cat-btn"
              onClick={() => handleGetCategory(val._id)} 
            >
              <p className="m-0 m-auto">{val.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
