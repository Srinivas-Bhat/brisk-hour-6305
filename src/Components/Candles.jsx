import React, { useRef, useState } from 'react'
import "../Styles/Candles.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Heading, Text } from '@chakra-ui/react';


const CandleProducts = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080238009-1_235x.jpg?v=1654274921',
      fname: 'Iced Lemon Pound Cake',
      type: '3-Wick Candle',
      price: 26.5,
      description: 'Mix & Match: 2/$22'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240545-1_235x.jpg?v=1654275404',
      fname: 'Raspberry Mimosa',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240538-1_235x.jpg?v=1654275399',
      fname: 'Strawberry Pound Cake',
      type: '3-Wick Candle',
      price: 24.5,
      description: 'Mix & Match: 2/$22'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431400178-1_235x.jpg?v=1654274562',
      fname: 'Honeysuckle & Peach Spritz',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850003133317-1_235x.jpg?v=1654274739',
      fname: 'Coastal Watermelon',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732105433-1_235x.jpg?v=1657737607',
      fname: 'Fresh Cut Lilacs',
      type: '3-Wick Candle',
      price: 24.5,
      description: ''
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240552-1_235x.jpg?v=1657738892',
      fname: 'Japanese Cherry Blossom',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-8028713620034-1_235x.jpg?v=1657569140",
      fname: 'Waikiki Beach Coconut',
      type: '3-Wick Candle',
      price: 26.5,
      description: 'Mix & Match: 2/$22'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732122355-1_235x.jpg?v=1654275321',
      fname: 'Champagne Toast',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-106oz300g-5060244570559-1_235x.jpg?v=1655872830',
      fname: 'Mahogany Teakwood',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431417756-1_235x.jpg?v=1654274681',
      fname: 'Eucalyptus Spearmint',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080238009-1_235x.jpg?v=1654274921',
      fname: 'The Perfect Summer',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240545-1_235x.jpg?v=1654275404',
      fname: 'Fresh Cut Lilacs',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240538-1_235x.jpg?v=1654275399',
      fname: 'Lavender Vanilla',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
     {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732105433-1_235x.jpg?v=1657737607',
      fname: 'Pink Pineapple Sunrise',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
  {
      img: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732122096-1_235x.jpg?v=1654275364',
      fname: 'Lavender Vanilla',
      type: 'Single Wick Candle',
      price: 15.5,
      description: 'Mix & Match: 2/$22'
    },
  ]
const Candles = () => {
  return (
    <>
        <div className="New_Arrivals_title2">
            <Text as="h3" variant="heads">ESSENTIAL SUMMER CANDLES</Text>
        </div>
        <div className="swiper_wrapper">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                navigation={true}
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        slidesPerGroup: 1,
                      },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      slidesPerGroup: 2,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                      slidesPerGroup: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                      slidesPerGroup: 4,
                    },
                  }}
                modules={[Navigation]}
                className="mySwiper1"
                id='new_arrivals_swiper'
            >
                {CandleProducts.map((el) => (
                    <SwiperSlide className="new_Arrivals_swiperSlide" key={el.fname}>
                    <div>
                        <div className="swiper_image_wrapper2">
                            <img src={el.img} alt={el.fname} className="swiper_Image" height="100px" width="100px"/>
                        </div>
                        <div className="description_wrapper2">
                            <Heading as="h2" variant="h10" mt="7px">{el.fname}</Heading>
                            <Heading as="h4" variant="h4" m="8px 0px 4px">{el.type}</Heading>
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

export default Candles