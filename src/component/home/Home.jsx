import React from "react";
import "./home.css";
import Heading from "./../heading/Heading";
import FlashSales from "../flashSales/FlashSales";

const Home = () => {
  return (
    <div className="Home">
      <Heading/>
      <FlashSales/>
     
    </div>
  );
};

export default Home;
