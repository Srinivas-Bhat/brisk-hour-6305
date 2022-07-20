import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Swipers.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Heading } from "@chakra-ui/react";

const Swipers = () => {
    
  return (
    <>
      <div className="moving_offers_sec">
        <Heading as="h5" variant="h5" color="white" className="moving_heading">FREE SAMPLES WITH ALL ORDERS</Heading>
      </div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="offers1_wrapper">
            <div className="offers1_des">
              <Heading as="h3" variant="h2" color="white">
                HAPPENING NOW!
              </Heading>
              <Heading as="h1" variant="h7" className="offer1_subheading">
                Free Overnight Shipping
              </Heading>
              <Heading as="h4" variant="h8" className="offer1_subheading">
                Place your order by July 20 to get free overnight shipping with
                no minimum purchase!
              </Heading>
              <button className="shopnow_offers1">SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offers2_wrapper">
            <div className="offers2_des">
              <Heading as="h4" variant="h9" color="white">
                BEAUTY<span className="offer2_spanTag">ALFRESCO</span>
              </Heading>
              <Heading as="h1" variant="h1" className="offer2_subheading">
                Hit Refresh
              </Heading>
              <Heading as="h4" variant="h8" className="offer2_subheading">
                It's hot. So why not treat yourself to a cooling mist, a cleansing dry shampoo or another instant (or close to instant) refreshers?
              </Heading>
              <button className="shopnow_offers1">SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="offers3_wrapper">
            <div className="offers3_des">
              <Heading as="h3" variant="h2">
                DYSON
              </Heading>
              <Heading as="h1" variant="h7" className="offer3_subheading">
                The Copper Age
              </Heading>
              <Heading as="h4" variant="h8" className="offer3_subheading" color="#12284c" letterSpacing="0px">
                It's here, thanks to Dyson. These new versions of the brand's innovative, in demand hair tools come in a pretty penny color. Grab yours today!
              </Heading>
              <button className="shopnow_offers3">SHOP DYSON</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="offers4_wrapper">
            <div className="offers4_des">
              <Heading as="h3" variant="h2">
                MOROCCANOIL
              </Heading>
              <Heading as="h1" variant="h1" className="offer4_subheading" fontSize="45px">
                Shine On
              </Heading>
              <Heading as="h4" variant="h8" className="offer4_subheading" color="whi#12284cte">
                Have you tried the product that pioneered oil-infused hair care and created the worldwide buzz on argan oil? Moroccanoil Treatment instantly fights frizz and boosts shine for silky, healthy-looking hair
              </Heading>
              <button className="shopnow_offers3">SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipers;
