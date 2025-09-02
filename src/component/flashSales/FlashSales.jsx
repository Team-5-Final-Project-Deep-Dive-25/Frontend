import React, { useEffect, useRef } from "react";
import "./flashSales.css";
import Product from "../../common/product/product";

const FlashSales = () => {
  const deadline = new Date("Dec 31, 2026 23:59:59").getTime();

  const refDays = useRef();
  const refHours = useRef();
  const refMinutes = useRef();
  const refSeconds = useRef();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = deadline - now;

      if (timeLeft <= 0) {
        refDays.current.textContent = "0";
        refHours.current.textContent = "0";
        refMinutes.current.textContent = "0";
        refSeconds.current.textContent = "0";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      refDays.current.textContent = days;
      refHours.current.textContent = hours;
      refMinutes.current.textContent = minutes;
      refSeconds.current.textContent = seconds;
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="FlashSales">
      <section className="container mb-5">
        <div className="section-heading">
          <div>
            <p>Today’s</p>
          </div>

          <div>
            <h2>Flash Sales</h2>
            <div className="countdown flex align-center gap-2">
              <div className="time">
                <span>Days</span>
                <b ref={refDays}>00</b>
              </div>
              <span>:</span>
              <div className="time">
                <span>Hours</span>
                <b ref={refHours}>00</b>
              </div>
              <span>:</span>
              <div className="time">
                <span>Minutes</span>
                <b ref={refMinutes}>00</b>
              </div>
              <span>:</span>
              <div className="time">
                <span>Seconds</span>
                <b ref={refSeconds}>00</b>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default FlashSales;
