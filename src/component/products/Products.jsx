import React, { useContext } from "react";
import "./products.css";
// import Product from "../../common/product/product";
import { useLocation } from "react-router-dom";
import { productsContext } from "../../context/ProductsContext";


const Products = () => {
  const location = useLocation();
  const { products, handelSortingData, sort } = useContext(productsContext);

  return (
    <div className="Products">
      <div className="pageHeading p-5">
        <span>Home</span>/
        <span className="active">{location.pathname.slice(1)}</span>
      </div>

      <div className="container">
        <div className="sort-products">
          <span>Sort by : </span>
          <select value={sort} onChange={handelSortingData}>
            <option value="Default">Default</option>
            <option value="Price(high:low)">Price(high-low)</option>
            <option value="Price(low:high)">Price(low-high)</option>
            <option value="Name(A-Z)">Name(A-Z)</option>
            <option value="Name(Z-A)">Name(Z-A)</option>
          </select>
        </div>
      </div>
      <div className="container-all-products p-3">
        {products.map((ele, index) => (
          <Product key={index} ele={ele} />
        ))}
      </div>
    </div>
  );
};

export default Products;
