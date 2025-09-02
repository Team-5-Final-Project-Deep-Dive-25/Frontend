import React from "react";
import "./home.css";
import Heading from "./../heading/Heading";
import FlashSales from "../flashSales/FlashSales";
import BrowseCategory from "./../BrowsbyCatecgory/BrowseCategory";

const Home = () => {
  return (
    <div className="Home">
      <Heading/>
      <FlashSales/>
      <BrowseCategory/>
     
    </div>
  );
};

export default Home;
