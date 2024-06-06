import React, { useState, useEffect } from "react";
import "./benefits.css";
import featuresData from "./features.json";
import workData from "./work.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Autoplay, Grid, Pagination } from "swiper/modules";

export default function Benefits() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 480) {
      setSlidesPerView(1);
    } else if (width >= 480 && width < 768) {
      setSlidesPerView(2);
    } else if (width >= 768 && width < 992) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  return (
    <div className="benefits-wrapper">
      <div className="features">
        <div className="features-heading">Features</div>
        <div className="features-content">
          <div className="features-card-wrapper">
            {featuresData.map((item) => (
              <div className="features-card" key={item.id}>
                <div>
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src={require(`../../assets/${item?.logo}.png`)}
                    alt="Key Influencer"
                  />
                </div>
                <div>{item?.heading}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="benefits-heading">Our Featured Work</div>
        <Swiper
          slidesPerView={slidesPerView}
          grid={{
            columns: 1,
          }}
          spaceBetween={10}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay, Pagination, Grid]}
        >
          {workData.map((item) => (
            <SwiperSlide
              style={{ display: "flex", justifyContent: "center" }}
              key={item.id}
            >
              <div className="benefits-card">
                <img
                  className="benefits-images"
                  src={require(`../../assets/${item?.logo}`)}
                  alt="Key Influencer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
