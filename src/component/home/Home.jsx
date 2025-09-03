import React from "react";
import "./home.css";
import Heading from "./../heading/Heading";
import FlashSales from "../flashSales/FlashSales";
import BrowseCategory from "./../BrowsbyCatecgory/BrowseCategory";
import ExploreProducts from "../exploreProducts/ExploreProducts";
import NewArrival from "../newArrival/NewArrival";


const Home = () => {
  return (
    <div className="Home">
      <Heading/>
      <FlashSales/>
      <BrowseCategory/>
      <ExploreProducts/>
      <NewArrival/>
   

     
    </div>
  );
};

export default Home;
