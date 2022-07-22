import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  Text,
  Select,
  Switch,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Styles/Mens.css";
import { AddIcon, ChevronDownIcon, ChevronRightIcon, MinusIcon } from "@chakra-ui/icons";

const FilterSectionArray = [
  {
    title: "Type",
    drop1: "Acne Removal Tools",
    drop2: "Aftershave",
    drop3: "Bar Soaps",
    drop4: "Bath Salts",
    drop5: "Body Spray",
    drop6: "Face Mask",
  },
  {
    title: "Brands",
    drop1: "8Greens",
    drop2: "Alo",
    drop3: "Clarins",
    drop4: "CORPUS",
    drop5: "Dyson",
    drop6: "Jack Black",
  },
  {
    title: "Benifit",
    drop1: "Anti-Aging",
    drop2: "Color Protection",
    drop3: "Focus",
    drop4: "Fullness",
    drop5: "Hold",
    drop6: "Volumizing",
  },
  {
    title: "Concern",
    drop1: "Breakage",
    drop2: "Calluses",
    drop3: "Dry Skin",
    drop4: "Frizz",
    drop5: "Oily Spots",
    drop6: "Sun Damage",
  },
  {
    title: "Ingredient Prefence",
    drop1: "Allergy Tested",
    drop2: "Biotin",
    drop3: "Cbd",
    drop4: "Mineral",
    drop5: "Naturally Derived",
    drop6: "Safe For Kids",
  },
  {
    title: "Size",
    drop1: "3 Wick",
    drop2: "Jumbo And Value",
    drop3: "Travel Size",
    drop4: "Votive",
    drop5: "Classic",
    drop6: "Combo",
  },
  {
    title: "More Ways to Shop",
    drop1: "Award Winners",
    drop2: "Black-Founded",
    drop3: "Exclusive",
    drop4: "Limited Edition",
    drop5: "Sustainable",
    drop6: "Men Founded",
  },
  {
    title: "Price",
    drop1: "$0 To $50",
    drop2: "$50 To $100",
    drop3: "$100 To $200",
    drop4: "$200 To $300",
    drop5: "$300 To $500",
    drop6: "$500+",
  },
];
const Mens = () => {
  return (
    <>
      <div className="moving_offers_section">
        <Heading as="h5" variant="h5" className="moving_heading">
          FREE SAMPLES WITH ALL ORDERS
        </Heading>
      </div>
      <div className="mens_section_description">
        <Heading as="h3" variant="h4" fontWeight="300">
          Home
        </Heading>
        <Heading as="h3" variant="h4" fontWeight="500">
          <ChevronRightIcon />
          Men
        </Heading>
      </div>
      <div className="Mens_body">
        <div className="mens_sideBar">
          <div className="sideBar">
            <Heading as="h5" variant="h3" fontWeight="450">
              MEN CATEGOREY
            </Heading>
            <Heading as="h5" variant="h6" fontWeight="300" mt="3px">
              Select One to narrow results
            </Heading>
            <hr className="seperator" />
            <Heading as="h6" variant="h3" m="10px 0 0">
              Bath & Body
            </Heading>
            <Heading as="h6" variant="h3" m="10px 0 0">
              Fragrance & Cologne
            </Heading>
            <Heading as="h6" variant="h3" m="10px 0 0">
              Gifts
            </Heading>
            <Heading as="h6" variant="h3" m="10px 0 0">
              Hair & Grooming
            </Heading>
            <Heading as="h6" variant="h3" m="10px 0 0">
              Shaving
            </Heading>
            <Heading as="h6" variant="h3" m="10px 0 0">
              Skin Care
            </Heading>
            <div className="mens_filter_wrapper">
              <Heading as="h6" variant="h10">
                FILTER BY MEN
              </Heading>
              <div className="filter_section">
                {FilterSectionArray.map((el) => (
                  <Accordion allowMultiple key={el.title}>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton
                              padding="25px 7px"
                              borderBottom="0 0 1px 0 solid #12284c"
                              _hover={{ color: "#fff" }}
                            >
                              <Heading
                                as="h6"
                                variant="h4"
                                flex="1"
                                fontWeight="500"
                                textAlign="left"
                              >
                                {el.title}
                              </Heading>
                              {/* <hr /> */}
                              {isExpanded ? (
                                <MinusIcon
                                  fontSize="15px"
                                  fontWeight="200"
                                  color="#12284c"
                                />
                              ) : (
                                <AddIcon
                                  fontSize="15px"
                                  fontWeight="200"
                                  color="#12284c"
                                />
                              )}
                            </AccordionButton>
                            {isExpanded ? (
                              <hr style={{ color: "#12284c" }} />
                            ) : null}
                          </h2>
                          <AccordionPanel
                            p="5px 0px 0px 10px"
                            display="flex"
                            align="center"
                            gap="20px"
                          >
                            <Checkbox />{" "}
                            <Heading as="h6" fontWeight="300" variant="h4">
                              {el.drop1}
                            </Heading>
                          </AccordionPanel>
                          <AccordionPanel
                            p="5px 0px 0px 10px"
                            display="flex"
                            align="center"
                            gap="20px"
                          >
                            <Checkbox />{" "}
                            <Heading as="h6" fontWeight="300" variant="h4">
                              {el.drop2}
                            </Heading>
                          </AccordionPanel>
                          <AccordionPanel
                            p="5px 0px 0px 10px"
                            display="flex"
                            align="center"
                            gap="20px"
                          >
                            <Checkbox />
                            <Heading as="h6" fontWeight="300" variant="h4">
                              {el.drop3}
                            </Heading>
                          </AccordionPanel>
                          <AccordionPanel
                            p="5px 0px 0px 10px"
                            display="flex"
                            align="center"
                            gap="20px"
                          >
                            <Checkbox />{" "}
                            <Heading as="h6" fontWeight="300" variant="h4">
                              {el.drop4}
                            </Heading>
                          </AccordionPanel>
                          <AccordionPanel
                            p="5px 0px 0px 10px"
                            display="flex"
                            align="center"
                            gap="20px"
                          >
                            <Checkbox />{" "}
                            <Heading as="h6" fontWeight="300" variant="h4">
                              {el.drop5}
                            </Heading>
                          </AccordionPanel>
                          <AccordionPanel
                            p="5px 0px 0px 10px"
                            display="flex"
                            align="center"
                            gap="20px"
                          >
                            <Checkbox />{" "}
                            <Heading as="h6" fontWeight="300" variant="h4">
                              {el.drop6}
                            </Heading>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="product_container">
          <div className="men_heading">
            <Text variant="heads" textAlign="left">
              MEN
            </Text>
            <div className="sort_section_wrapper">
              <Heading as="h6" variant="h3" fontWeight="500">SORT BY</Heading>
              <Select
                placeholder="Featured"
                w="200px"
                h="40px"
                fontSize="14px"
                icon={<ChevronDownIcon fontSize="30px" fontWeight="100"/>}
                fontFamily="Montserrat"
                color="#12284c"
                border="1px solid #green"
                cursor="pointer"
                transition="0.9s ease"
                boxShadow="none"
                _hover={{backgroundColor: "white"}}
              >
                <option value="Featred" className="select_option">Featured</option>
                <option value="New Arrivals">New Arrivals</option>
                <option value="Best Sellers">Best Sellers</option>
                <option value="Low to High">Price, Low to High</option>
                <option value="High to Low">Price, High to Low</option>
              </Select>
            </div>
          </div>
          <hr className="seperator" />
          <div className="filters_display_section">
            <Heading as="h3" variant="h4" fontWeight="500">0 FILTERS APPLIED</Heading>
            <div className="stock_check_section">
              <Heading as="h6" variant="h4" fontWeight="400">Show out of stock items</Heading>
              <Switch size='md' colorScheme="purple" />
              <Text variant="footer" ml="9px">1285 results</Text>
            </div>
          </div>
        </div>
        <h2>hello</h2>
      </div>
    </>
  );
};

export default Mens;

{
  /* <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Heading as="h6" variant="h4" flex="1" fontWeight="600" textAlign="left">
                          Type
                        </Heading>
                        <AddIcon color="#12284c" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>Lorem</AccordionPanel>
                    <AccordionPanel pb={4}>Lorem</AccordionPanel>
                    <AccordionPanel pb={4}>Lorem</AccordionPanel>
                    <AccordionPanel pb={4}>Lorem</AccordionPanel>
                  </AccordionItem>
                </Accordion> */
}
