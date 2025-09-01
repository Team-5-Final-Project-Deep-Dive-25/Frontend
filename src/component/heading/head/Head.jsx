import React from "react";
import "./head.css";
import Apple from "./../../../assets/images/apple.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import headingPage1 from "./../../../assets/images/headingPage1.jpg";
import headingPage2 from "./../../../assets/images/headingPage2.png";
import { LuBoomBox } from "react-icons/lu";
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative ,Autoplay} from "swiper/modules";
import {useNavigate}from 'react-router-dom'


const Head = () => {
  const navigate = useNavigate();

  return (
    <div className="Head">
      <Swiper
        className="container"
        grabCursor={true}
        effect={"creative"}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
      >
        <SwiperSlide>
          <div className="slide mx-4">
            <div className="headingDeatiles">
              <div>
                <img src={Apple} alt="Apple logo" />
                <span>iPhone 14 Series</span>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <div className="action">
                <button
                  className="btn btn-link gap-2"
                  onClick={() => navigate("products")}
                >
                  Shop Now
                  <IoMdArrowRoundForward size={24} />
                </button>
              </div>
            </div>

            <div className="heading-img">
              <img src={headingPage1} alt="iPhone 14" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide mx-4">
            <div className="headingDeatiles">
              <div>
                <LuBoomBox className="Lu" />
                <span>JBL_BOOMBOX_2</span>
              </div>
              <h1>Enhance Your Music Experience</h1>

              <div className="action">
                <button
                  className="btn btn-link"
                  onClick={() => navigate("products")}
                >
                  Buy Now
                  <IoMdArrowRoundForward
                    size={20}
                    style={{ marginLeft: "8px" }}
                  />
                </button>
              </div>
            </div>

            <div className="heading-img two">
              <img src={headingPage2} alt="iPhone 14" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Head;
