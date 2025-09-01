import {  createContext, useEffect, useState } from "react";
import axios from 'axios'

export const productsContext =createContext();

export const ProductsContextProvider = ({children}) => {

    const [products , setprducts]=useState([]);
   
    const [sort, setSort] = useState("Default");
    let url = 'https://dummyjson.com/products'

    const getAllProducts= async()=>{
        let {data}= await axios.get(url)
       setprducts(data.products);

    }

    useEffect(()=>{
        getAllProducts();
    },[])

    const handelSortingData = (e) => {
          let value= e.target.value;
          
          switch (value) {
            case "Name(A-Z)":
              products.sort((pro) => (pro.title > pro.title ? 1 : -1));
               setSort("Name(A-Z)");
              setprducts([...products]);
             
              break;
            case "Name(Z-A)":
              products.sort((pro) => (pro.title < pro.title ? 1 : -1));
              setSort("Name(Z-A)");
              setprducts([...products]);
              
              break;
            case "Price(high:low)":
              products.sort((a, b) => b.price - a.price);
              setSort("Price(high:low)");
              setprducts([...products]);
              
              break;
            case "Price(low:high)":
              products.sort((a, b) => a.price - b.price);
               setSort("Price(low:high)");
              setprducts([...products]);
             
              break;

            default:
              getAllProducts();
               setSort("Default");
          }
        };

 




  return (
    <productsContext.Provider value={{ products, handelSortingData ,sort }}>
      {children}
    </productsContext.Provider>
  );
};