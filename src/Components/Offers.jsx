import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "../Styles/Offers.css"

const Offers = () => {
  return (
    <>
    <div className="offers_container">
        <div className="offer_section_wrapper">
            <div className="offer_left_image_wrapper">
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/kiehl_s_secondary_hero_1000x.jpg?v=1658340540" alt="" className="offer_left_image" />
            </div>
            <div className="offer_right_wrapper">
                <div className="offer_description_sec">
                    <Heading as="h4" variant="h10" fontSize="16px">KIEHL'S</Heading>
                    <Text variant="heads" textAlign="left" fontWeight="500" m="2px 0px 10px">Midnight Recovery Omega Rich Cloud Cream</Text>
                    <Heading as="h3" variant="h10" fontSize="16px"fontWeight="300" lineHeight="20px">Whipped into a lightweight cloud-like texture, this renewing botanical face cream sinks right into the skin, delivering visible radiance. Wake up with plumper, more youthful-looking skin by morning.</Heading>
                    <button className="offer_section_btn">SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>
    <div className="sales_section_wrapper">
        <div className="sales_card_wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537" alt="Sales_image" className="sales-image"/>
            <Heading as="h4" variant="h10" fontWeight="500"p="15px 0 0">FREE GIFTS WITH PURCHASE</Heading>
            <Heading as="h4" variant="h4" fontWeight="300" lineHeight="20px" m="5px 0px 0px">Stock up on all your facourite brands, then try something</Heading>
            <button className="offer_section_btn">BROWSE NOW</button>
        </div>
        <div className="sales_card_wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426" alt="Sales_image" className="sales-image"/>
            <Heading as="h4" variant="h10" fontWeight="500"p="14px 0 0">$20 OFF $100 WITH AN I-STORE CONSULTION</Heading>
            <Heading as="h4" variant="h4" fontWeight="300" lineHeight="20px" m="5px 0px 0px">Our Beauty Experts can show you quick makeup application tricks and how to revamp your skincare regimen.</Heading>
            <button className="offer_section_btn">BOOK NOW</button>
        </div>
        <div className="sales_card_wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315" alt="Sales_image" className="sales-image"/>
            <Heading as="h4" variant="h10" fontWeight="500"p="15px 0 0">BLUEMERCURY SPA</Heading>
            <Heading as="h4" variant="h4" fontWeight="300" lineHeight="20px" m="5px 0px 0px">Our luxurious spa services are customizable to your individual needs</Heading>
            <button className="offer_section_btn">BROWSE THE MENU</button>
        </div>
    </div>
    <hr className="divider"/>
    </>
  )
}

export default Offers