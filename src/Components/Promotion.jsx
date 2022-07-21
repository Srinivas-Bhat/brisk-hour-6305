import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "../Styles/Promotion.css"

const Promotion = () => {
  return (
    <div className="Promotion_images_container">
        <div className="promotion_image_section">
            <div className="promotion_first_image">
                <div className="image_wrapper_div">
                    <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bader_side_by_side_640x.jpg?v=1658339677" alt="PromotionImage1" />
                </div>
                <div>
                    <Text variant="heads" m="0px 0px 10px" textAlign="left" >The Light Cream</Text>
                    <Heading as="h3" variant="h10" fontWeight="300" m="5px 0 0" lineHeight="20px">A refreshing, weightless gel emulsion with a matte-like finish from Augustinus Bader. This cream deeply nourishes, combats signs of ageing and targets the root cause of overactive sebum, for shine-free skin.</Heading>
                    <button className="promotion_shopnow_btn">SHOP NOW</button>
                </div>
            </div>
            <div className="promotion_second_image">
            <div className="image_wrapper_div">
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/BAL_side_by_side_FINAL_640x.jpg?v=1652904545" alt="PromotionImage2" />
            </div>
            <div>
                <Text variant="heads" m="0 0 10px" textAlign="left" >Beauty Alfresco</Text>
                <Heading as="h3" variant="h10" fontWeight="300" m="5px 0 0" lineHeight="20px">This summer is all about the outdoors, and we're here for it. You can find everything you need to make your summer outside a success in our curated collection of seasonal essentials.</Heading>
                <button className="promotion_shopnow_btn">SHOP SUMMER MUST-HAVES</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Promotion