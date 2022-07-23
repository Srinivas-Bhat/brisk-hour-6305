import React, { useRef, useState } from "react";
import "../Styles/BestSellers.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Heading, Text } from "@chakra-ui/react";


const BestSellersProducts =  [
    {
        "name": "The Vacation Edit",
        "title": "BLUEMERCURY",
        "price": "$99",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023017-1_200x.jpg",
    },
    {
        "name": "Unseen Sunscreen SPF 40",
        "title": "SUPERGOOP!",
        "price": "$17",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17floz50ml-816218022976-1_200x.jpg?v=1656702846",
    },
    {
        "name": "Glowscreen SPF 40",
        "title": "SUPERGOOP",
        "price": "$17",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz-816218026882-1_200x.jpg?v=1657297959",
    },
    {
        "name": "Leather and Wood Care Lotion with Beeswax",
        "title": "DIPTYQUE",
        "price": "$30",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431438461-1_235x.jpg?v=1657238729",
    },
    {
        "name": "Beauty Lip Balm Palette",
        "title": "SURRATT",
        "price": "$58",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-037182654509-1_235x.jpg?v=1656703877",
    },
    {
        "name": "SPF 30 Mineral Sunscreen",
        "title": "INDIE LEE",
        "price": '$42',
        "image": 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-811239031327-1_235x.jpg?v=1656523284',
    },
    {
        "name": "Desertland Body Wash",
        "title": "ORIBE",
        "price": "$48",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217345-1_235x.jpg?v=1655323206",
    },
    {
        "name": "Anti-Breakout Skincare Wand with Blue Light Therapy",
        "title": "SOLAWAVE",
        "price": "$110",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-860004981145-1_235x.jpg?v=1657294296",
    },
    {
        "name": "Odor Removing Candle with Basil",
        "title": "DIPTYQUE",
        "price": "$70",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431438508-1_235x.jpg?v=1657238737",
    },
    {
        "name": "Laguna Bronzing Cream",
        "title": "NARS",
        "price": "$38",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-laguna01-194251134482-1_235x.jpg?v=1656523888",
    },
    {
        "name": "The Absolute Discovery Ritual",
        "title": "NOBLE PANACEA",
        "price": "$293",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-1230000065108-1_235x.jpg?v=1656385951",
    },
    {
        "name": "No. 9 Bond Protector Nourishing Hair Serum",
        "title": "OLAPLEX",
        "price": "$30",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850018802284-1_235x.jpg?v=1657027319",
    },
    {
        "name":  "Cote d'Azur Body Wash",
        "title":  "ORIBE",
        "price":  "$48",
        "image":  "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217253-1_235x.jpg?v=1655323200",
    },
    {
        "name": "Valley of Flowers Body Creme",
        "title": "ORIBE",
        "price": "$65",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217703-1_235x.jpg?v=1655323229",
    },
    {
        "name": "Valley of Flowers Body Wash",
        "title": "ORIBE",
        "price": "$45",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217437-1_235x.jpg?v=1655323212",
    },
    {
        "name":  "AUGUSTINUS BADER",
        "title":  "The Light Cream",
        "price":  "$175",
        "image":  "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552905647-1_235x.jpg?v=1657670868",
    },
    
]
const BestSellers = () => {
  return (
    <>
      <div className="New_Arrivals_title1">
        <Text as="h3" variant="heads">
          BEST SELLERS
        </Text>
      </div>
      <div className="swiper_wrapper1">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper1"
          id="new_arrivals_swiper1"
        >
          {BestSellersProducts.map((el) => (
            <SwiperSlide className="new_Arrivals_swiperSlide1" key={el.name}>
              <div>
                <div className="swiper_image_wrapper1">
                  <img
                    src={el.image}
                    alt={el.name}
                    className="swiper_Image1"
                    height="250px"
                  />
                </div>
                <div className="description_wrapper1">
                  <Heading as="h2" variant="h10" mt="3px">
                    {el.title}
                  </Heading>
                  <Heading as="h4" variant="h4" m="8px 0px 4px">
                    {el.name}
                  </Heading>
                  <Heading as="h4" variant="h4" m="7px 8px 0px">
                    {el.price}
                  </Heading>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide className="new_Arrivals_swiperSlide">Slide 2</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 3</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 4</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 5</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 6</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 7</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 8</SwiperSlide>
                <SwiperSlide className="new_Arrivals_swiperSlide">Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default BestSellers;
