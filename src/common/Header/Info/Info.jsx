import React from 'react'
import './info.css'
import { IoIosArrowDown } from "react-icons/io";
const Info = () => {
  return (
    <div className="Info">
      <div className="container">

        <div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#">ShopNow</a>
        </div>
        
        <div>
          <p>English</p>
          <IoIosArrowDown />
        </div>

      </div>
    </div>
  );
}

export default Info