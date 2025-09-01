import React from "react";
import "./heading.css";
import Head from "./../heading/head/Head";
import Sidebar from "./../heading/sidebar/Sidebar";
const Heading = () => {
  return (
    <div className="Heading">
      <Sidebar />
      <Head />
    </div>
  );
};

export default Heading;



