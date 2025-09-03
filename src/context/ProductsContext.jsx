import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsOfCategory, setProductsOfCategory] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [sort, setSort] = useState("Default");

  const productsURL = "https://dummyjson.com/products";
  const categoriesURL = "https://dummyjson.com/products/categories";

 
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(productsURL);
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const getCategoriesName = async () => {
    try {
      const { data } = await axios.get(categoriesURL);
      setCategoryName(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getProductsOfCategory = async (url) => {
    try {
      const { data } = await axios.get(url);
      setProductsOfCategory(data.products);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };


  const handleSortingData = (e) => {
    const value = e.target.value;
    const sortedProducts = [...products];

    switch (value) {
      case "Name(A-Z)":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "Name(Z-A)":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "Price(high:low)":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

      case "Price(low:high)":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;

      default:
        getAllProducts(); 
        setSort("Default");
        return;
    }

    setSort(value);
    setProducts(sortedProducts);
  };


  useEffect(() => {
    getAllProducts();
    getCategoriesName();
 
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleSortingData,
        sort,
        getCategoriesName,
        productsOfCategory,
        categoryName,
        getProductsOfCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
