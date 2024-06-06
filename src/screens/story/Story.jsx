import React, { useState, useEffect } from "react";
import "./story.css";
import clientData from "./clients.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Autoplay, Grid, Pagination } from "swiper/modules";
export default function Story() {
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
    <div className="story-wrapper">
      <div className="story">
        <div className="story-heading">BRANDS WE HAVE WORKED WITH</div>

        <div className="story-content">
          <div>
            A few of our clientele includes CEEW (Council on Energy,
            Environment, and Water), Villgro, GIZ (Deutsche Gesellschaft für
            Internationale Zusammenarbeit), GOGLA (Global Off-Grid Lighting
            Association), ISA (International Solar Alliance), IIT Mandi hub,
            Powering Livelihoods (A CEEW- VILLGRO initiative), TVARAN program by
            Cisco, Loopworm, Log9 materials, Acer electric, Metastable
            materials, Awshad, Weclinic, SurakshaQR, Swizzle, Phloton,
            Sustainability mafia, STAN, SmartJoules, Safecams, EbikeGO, Etrio,
            Teachmint, Weclinic, Fabrento, STRROT,. Devidayal Solar Solutions
            (DD Solar), Greenwear Fashion, Resham Sutra, Dharambir Food
            Processing, New Leaf Dynamic, CoolCrop, Rukart, S4S Technologies,
            Rheo TV, Madguy Labs, Uppekha, Cinnamon Homes, Caredose, Baby
            Destination, Sattviko, Gimbooks, MIC Electronics, TREAD, etc.
          </div>
          <div>
            Our passion lies in creating a positive impact by employing
            innovative approaches, strategic thinking, and aligning
            interactions/RBMs with niche publications and mainstream media,
            while also delving into long-form feature stories. This is further
            followed by One-on-One Interviews, Press Releases, Electronic
            Interactions, podcasts, and Webinars.
          </div>
        </div>
        <div className="client-wrapper">
          <Swiper
            slidesPerView={slidesPerView}
            grid={{
              columns: 1,
            }}
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            modules={[Autoplay, Pagination, Grid]}
          >
            {clientData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="client-cards">
                  <img
                    className="client-images"
                    src={require(`../../assets/${item?.logo}`)}
                    alt="Key Influencer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
