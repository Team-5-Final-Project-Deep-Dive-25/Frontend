import React, { useContext } from "react";
import "./browseCategory.css";

import { productsContext } from "../../context/ProductsContext";

const BrowseCategory = () => {
  const { categoryName  , getProductsOfCategory , ProductsOfCategory} = useContext(productsContext);

  return (
    <div className="BrowseCategory my-5">
      <div className="container">
        <div className="section-heading">
          <div>
            <p>Categories</p>
          </div>
          <div>
            <h2>Browse By Category</h2>
          </div>
        </div>

        <div className="container-allCat my-5">
          {categoryName.slice(0, 6).map((val, index) => (
            <div key={index}>
              <div
                className="cat-btn"
                onClick={() => getProductsOfCategory(val.url)}
              >
                <p className="m-0 m-auto">{val.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
