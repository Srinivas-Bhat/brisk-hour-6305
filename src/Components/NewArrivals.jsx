import React, { useRef, useState } from 'react'
import "../Styles/NewArrivals.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Heading, Text } from '@chakra-ui/react';


const NewArrivalProducts =  [
    {
        "name": "Cote d'Azur Eau de Parfum",
        "title": "ORIBE",
        "price": "$34 - $125",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-25oz-840035200477-1_235x.jpg?v=1653593629",
    },
    {
        "name": "Valley of Flowers Eau de Parfum",
        "title": "ORIBE",
        "price": "$34 - $125",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-25oz-840035200477-1_235x.jpg?v=1653593629",
    },
    {
        "name": "Ceramic for Wool and Delicate Textiles with Cedarwood",
        "title": "DIPTYQUE",
        "price": "$45",
        "image": "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431438478-1_235x.jpg?v=1657238692",
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
const NewArrivals = () => {
  return (
    <>
        <div className="New_Arrivals_title">
            <Text as="h3" variant="heads">NEW ARRIVALS</Text>
        </div>
        <div className="swiper_wrapper">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper1"
                id='new_arrivals_swiper'
            >
                {NewArrivalProducts.map((el) => (
                    <SwiperSlide className="new_Arrivals_swiperSlide" key={el.name}>
                    <div>
                        <div className="swiper_image_wrapper">
                            <img src={el.image} alt={el.name} className="swiper_Image" height="250px"/>
                        </div>
                        <div className="description_wrapper">
                            <Heading as="h2" variant="h10" mt="3px">{el.title}</Heading>
                            <Heading as="h4" variant="h4" m="8px 0px 4px">{el.name}</Heading>
                            <Heading as="h4" variant="h4" m="7px 8px 0px">{el.price}</Heading>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}

export default NewArrivals



// <div className="New_arrivals_container">
//         <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         slidesPerGroup={3}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper1"
//         id='new_arrivals_swiper'
//       >
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 1</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 2</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 3</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 4</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 5</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 6</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 7</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 8</SwiperSlide>
//         <SwiperSlide className="new_Arrivals_swiperSlide">Slide 9</SwiperSlide>
//       </Swiper>
//     </div>