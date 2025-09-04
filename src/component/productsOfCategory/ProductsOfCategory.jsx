import React, { useContext, useEffect, useState } from "react";
import "./productsOfCat.css";
import { useLocation } from "react-router-dom";
import Product from "../../common/product/Product";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

const ProductsOfCategory = () => {
  const location = useLocation();
  const [productsData, setProductsData] = useState([]);
  const { productsOfCategory } = useContext(ProductsContext);

  useEffect(() => {
    setProductsData(productsOfCategory);
  }, [productsOfCategory]);

  return (
    <div className="ProductsOfCat">
      <div className="pageHeading p-5">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        /<span className="active">{location.pathname.slice(1)}</span>
      </div>

      <div className="container-all-products p-3 m-3">
        {productsData.map((ele, index) => (
          <div className="product-wrapper" key={index}>
            <Product ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOfCategory;
