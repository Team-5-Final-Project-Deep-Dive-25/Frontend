import React, { useContext, useEffect, useState } from "react";
import "./productsOfCat.css";
import { useLocation } from "react-router-dom";
import Product from "../../common/product/product";

import { ProductsContext } from "../../context/ProductsContext";

const ProductsOfCat = () => {
   const location = useLocation();
  const [productsData, setProductsData] = useState([]);
  const { productsOfCategory } = useContext(ProductsContext);

  useEffect(() => {
    setProductsData(productsOfCategory);
  }, [productsOfCategory]);

  return (
    <div className="ProductsOfCat">
      <div className="pageHeading p-5">
        <span>Home</span>/
        <span className="active">{location.pathname.slice(1)}</span>
      </div>

      <div className="container-all-products p-3 d-flex">
        {productsData.map((ele, index) => (
          <div className="product-wrapper" key={index}>
            <Product ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOfCat;
