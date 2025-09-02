import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/ProductsContext";
import Product from "../../common/product/product";


import { FaRegHeart, FaShippingFast, FaShieldAlt } from "react-icons/fa";

import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(productsContext);

  const product = products.find((p) => p.id === Number(id));
  const [mainImg, setMainImg] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImg(product.thumbnail);
    }
  }, [product]);

  if (!product) return <p>Loading...</p>;

  const previewImages = product.images && product.images.length > 0
    ? product.images.length >= 4
      ? product.images.slice(0, 4)
      : [...product.images, ...Array(4 - product.images.length).fill(product.thumbnail)]
    : [product.thumbnail, product.thumbnail, product.thumbnail, product.thumbnail];

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-details-page">
      <div className="product-section">
        <div className="gallery">
          {previewImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.title}
              className={`thumb ${mainImg === img ? "active" : ""}`}
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>

        <div className="main-image">
          <img src={mainImg} alt={product.title} />
        </div>

        <div className="details">
          <h2 className="title">{product.title}</h2>
          <h3 className="price">${product.price}</h3>
          <p className="desc">{product.description}</p>

          <div className="quantity">
            <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          <div className="actions">
            <button className="cart">Add to Cart</button>
            <button className="fav">
              <FaRegHeart />
            </button>
          </div>

          <div className="extra">
            <div className="service">
              <FaShippingFast className="icon" />
              <div>
                <h4>Fast Delivery</h4>
                <p>
                  Get your order delivered within 2-5 business days with full
                  tracking information available.
                </p>
              </div>
            </div>

            <div className="service">
              <FaShieldAlt className="icon" />
              <div>
                <h4>Quality Guarantee</h4>
                <p>
                  All our products come with a full quality guarantee covering
                  any manufacturing defects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related">
        <div className="releted_title">
          <div className="rect"></div>
          <h3>Related Products</h3>
        </div>
        <div className="related-flex">
          {related.slice(0, 4).map((item) => (
            <Product key={item.id} ele={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
