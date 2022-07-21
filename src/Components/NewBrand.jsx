import { Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import "../Styles/NewBrand.css";
import { StarIcon } from '@chakra-ui/icons'


const NewBrand = () => {
  return (
    <div className="new_brand_container">
      <div className="new_brand_wrapper">
        <Text variant="heads" fontSize="28px" m="0px 0px 20px">
          NEW BRAND: BOUCLEME
        </Text>
        <Heading as="h3" variant="h3"m="0px 0px 20px">Boucleme's products are designed specifically for the needs of wavy, curly and coily hair!</Heading>
        <div className="nb_product_description_wrapper">
            <div className="product_description1">
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/boucleme_shop_collection_600x.progressive.jpg?v=1657051976" alt="New Brand" />
            </div>
            <div className="product_description2">
                <div className="image_wrapper">
                    <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580184-1_235x235_crop_center.jpg?v=1657786486" alt="products" className="product_image"/>
                </div>
                <div className="product_details_wrapper">
                    <Heading as="h3" variant="h3" fontWeight="400" m="10px 61px 20px">BOUCLEME</Heading>
                    <Heading as="h4" variant="h3" m="0px 0px 8px">Intensive Moisture Treatment</Heading>
                    <Heading as="h4" variant="h3" m="0px 0px 5px">$36</Heading>
                    <Flex m='auto' pt="15px" w="75px" gap="2px">
                        <StarIcon boxSize={3} color='gray.200' />
                        <StarIcon boxSize={3} color='gray.200' />
                        <StarIcon boxSize={3} color='gray.200' />
                        <StarIcon boxSize={3} color='gray.200' />
                        <StarIcon boxSize={3} color='gray.200' />
                    </Flex>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default NewBrand;
