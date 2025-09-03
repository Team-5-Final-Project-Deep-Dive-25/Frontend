import React from 'react'
import './newArrival.css'
import {Link}from 'react-router-dom'
import Arrivalimg1 from '../../assets/images/Arrivalimg1.png'
import Arrivalimg2 from '../../assets/images/Arrivalimg2.jpg'
import Arrivalimg3 from '../../assets/images/Arrivalimg3.png'
import Arrivalimg4 from '../../assets/images/Arrivalimg4.png'
import { FaArrowRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { ImHeadphones } from "react-icons/im";
import { MdSecurity } from "react-icons/md";

const NewArrival = () => {
  return (
    <div className="NewArrival my-5">
      <section className="container">
        <div className="section-heading">
          <div>
            <p>Featured</p>
          </div>
          <h2>New Arrival </h2>
        </div>
        <div className="arrival-images my-5">
          <div className="arrival-imgOne">
            <img src={Arrivalimg1} alt="" />
            <Link to={"/products"}>
              all Products <FaArrowRight />
            </Link>
          </div>
          <div className="arrival-imgtwo">
            <img src={Arrivalimg2} alt="" />
            <div>
              <img src={Arrivalimg3} alt="" />
              <img src={Arrivalimg4} alt="" />
            </div>
          </div>
        </div>

        <div className="services">
          <div>
            <div className="service-icon">
              <TbTruckDelivery />
            </div>
            <div className="service-details">
              <b>FREE AND FAST DELIVERY</b>
              <p className="m-0">Free delivery for all orders over $140</p>
            </div>
          </div>
          <div>
            <div className="service-icon">
              <ImHeadphones />
            </div>
            <div className="service-details">
              <b>24/7 CUSTOMER SERVICE</b>
              <p className="m-0">Friendly 24/7 customer support</p>
            </div>
          </div>
          <div>
            <div className="service-icon">
              <MdSecurity />
            </div>
            <div className="service-details">
              <b>MONEY BACK GUARANTEE </b>
              <p className="m-0">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewArrival