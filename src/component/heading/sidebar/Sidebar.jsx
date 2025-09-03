import React ,{useContext} from 'react'
import './sidebar.css'

import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext";
const Sidebar = () => {
  const navigate = useNavigate();
  const { categoryName, getProductsOfCategory } = useContext(ProductsContext);

  const handleGetCategory = (url) => {
    getProductsOfCategory(url);
    navigate("/ProductsOfCat");
  };

  return (
    <div className="Sidebar">
      <div className="container">
        <ul>
          {categoryName.slice(0, 6).map((val, index) => (
            <div
              key={index}
              className="cat-btn"
              onClick={() => handleGetCategory(val.url)}
            >
              <li className="m-0 m-auto">{val.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar