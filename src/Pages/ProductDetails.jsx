import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../Styles/ProductDetails.css";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  InfoOutlineIcon,
  MinusIcon,
  StarIcon,
} from "@chakra-ui/icons";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BestSellers from "../Components/BestSellers";
import { NavLink, useParams } from "react-router-dom";

const ProductDetails = () => {

    const [count, setCount] = useState(1);
    const [datas, setDatas] = useState({});
    const params = useParams();
    useEffect(() => {
      fetch(`http://localhost:8080/ProductsArray/${params.id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log("res",res);
          setDatas(res);
        });
    }, []);
  return (
    <div className="ProductDetails_container">
      <div className="moving_offers_section1">
        <Heading as="h5" variant="h5" className="moving_heading" >
          FREE SAMPLES WITH ALL ORDERS
        </Heading>
      </div>
      <div className="product_display_body">
        <div className="section_heading">
          <Heading as="" variant="h4" p="20px 16px" fontSize="12px" m="0 60px">
            <NavLink to="/">Shop</NavLink>
            <ChevronRightIcon />
            Men <ChevronRightIcon />
            {datas.fname}
          </Heading>
        </div>
        <div className="product_details_box">
          <div className="product_image_wrapper">
            <div className="small_image_section" style={{display: "flex", justifyContent: "center"}}>
              <img src={datas.img} alt="image" width="100px" height="50px" style={{objectFit: "contain"}}/>
            </div>
            <div className="large_image_section">
              <img
                src={datas.img}
                alt={datas.fname}
                className="product_image"
              />
            </div>
          </div>
          <div className="product_details_wrapper">
            <div className="product_title">
              <Heading as="h3" variant="h2" fontWeight="400">
                {datas.fname}
              </Heading>
              <Flex pt="2px" w="75px" gap="3px">
                <StarIcon boxSize={3} color="#5e769b" />
                <StarIcon boxSize={3} color="#5e769b" />
                <StarIcon boxSize={3} color="#5e769b" />
                <StarIcon boxSize={3} color="gray.300" />
                <StarIcon boxSize={3} color="gray.300" />
              </Flex>
            </div>
            <div className="product_title1">
              <Heading as="h3" variant="h9" color="#12284c" fontWeight="300">
               {datas.type}
              </Heading>
            </div>
            <div className="product_title1">
              <Heading as="h3" variant="h5" color="#333333" fontWeight="400">
                <span className="heading_span">$21</span> 4 interest-free
                payments of $5.25 with{" "}
                <span className="heading_span1">Klara.</span>
                <a href="#"> Learn More</a>{" "}
              </Heading>
            </div>
            <div className="product_description_">
              <Heading as="" variant="h3">
                {datas.description}
              </Heading>
            </div>
            <div className="button_counter_section">
              <Button
                leftIcon={
                  <LocalMallOutlinedIcon sx={{ marginRight: "5px" }} />
                }
                _hover={{ bg: "#12284c" }}
                w="25em"
                bg="#12284c"
                variant="solid"
                textAlign="left"
                borderRadius="0px"
                fontSize="20px"
                fontWeight="300"
                boxSizing="border-box"
              >
                ADD TO BAG <span style={{marginLeft: "14rem", fontSize: '17px', fontWeight: "400"}}>$ {datas.price}</span>
              </Button>
              <div className="counter_div">
                <button className="counter_add_btn" onClick={() => setCount(count-1)}>
                  <MinusIcon fontWeight="200" />        
                </button>
                <div className="counter_display">{count}</div>
                <button className="counter_minus_btn" onClick={() => setCount(count+1)}>
                  <AddIcon fontWeight="200" />
                </button>
              </div>
              <div className="heartIcon_div">
                <FavoriteBorderOutlinedIcon
                  sx={{ fontSize: "35px", color: "#12284c" }}
                />
              </div>
            </div>
            <div className="shipping_returns_section">
              <InputGroup
                size="lg"
                w="90%"
                m="0 22px"
                color="#12284c"
                fontFamily="Montserrat"
              >
                <Input placeholder="Shipping & Returns" />
                <InputRightElement
                  children={
                    <InfoOutlineIcon color="gray.400" fontSize="20px" />
                  }
                />
              </InputGroup>
            </div>
          </div>
        </div>
        {/* ***********************Accordion*********************** */}

        <div className="container">
          <Accordion
            defaultIndex={[3]}
            allowMultiple
            color="#12284c"
            fontFamily="Montserrat"
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "white" }}
                      fontSize="18px"
                      fontWeight="300"
                      letterSpacing="1px"
                    >
                      <Box flex="1" textAlign="left">
                        Product Information
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    fontWeight="300"
                    letterSpacing="1px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "white" }}
                      fontSize="18px"
                      fontWeight="300"
                      letterSpacing="1px"
                    >
                      <Box flex="1" textAlign="left">
                        Ingredients
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    fontWeight="300"
                    letterSpacing="1px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <div>
                      <Button
                        bg="#5E769B"
                        variant="solid"
                        m="20px 10px 0"
                        w="480px"
                        borderRadius="0"
                        p="10px 15px"
                        h="38px"
                      >
                        VIEW FULL INGREDIENTS LIST
                      </Button>
                    </div>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "white" }}
                      fontSize="18px"
                      fontWeight="300"
                      letterSpacing="1px"
                    >
                      <Box flex="1" textAlign="left">
                        How To Use
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    fontWeight="300"
                    letterSpacing="1px"
                    w="480px"
                    h="180px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ bg: "white" }}
                      fontSize="18px"
                      fontWeight="300"
                      letterSpacing="1px"
                    >
                      <Box flex="1" textAlign="left">
                        Reviews
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    fontWeight="300"
                    letterSpacing="1px"
                  >
                    <div className="review_wrapper">
                      <div style={{ height: "180px" }}>
                        <Heading as="h4" variant="h1" fontWeight="500">
                          2.6{" "}
                          <span className="span_rating_tag">
                            OUT OF 5 STARS
                          </span>
                        </Heading>
                        <div></div>
                        <Button
                          bg="#5E769B"
                          variant="solid"
                          m="20px 10px 0"
                          w="400px"
                          borderRadius="0"
                          p="10px 15px"
                          h="38px"
                        >
                          WRITE REVIEW
                        </Button>
                        <div className="review_filter_section">
                          <div>
                            <Button
                              rightIcon={<ChevronDownIcon ml="45px" />}
                              colorScheme="gray"
                              variant="outline"
                              _hover={{ background: "white" }}
                              borderRadius="0"
                              fontSize="18px"
                              fontWeight="300"
                              w="166px"
                            >
                              Sort
                            </Button>
                          </div>
                          <div>
                            <Button
                              rightIcon={<ChevronDownIcon ml="45px" />}
                              colorScheme="gray"
                              variant="outline"
                              _hover={{ background: "white" }}
                              borderRadius="0"
                              fontSize="18px"
                              fontWeight="300"
                              w="166px"
                            >
                              Filter
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Box m="0 0 0 25px">
                        <Flex
                          pt="2px"
                          w="75px"
                          gap="4px"
                          flexDir="row-reverse"
                          h="24px"
                        >
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                        </Flex>
                        <Flex
                          pt="2px"
                          w="75px"
                          gap="4px"
                          flexDir="row-reverse"
                          h="24px"
                        >
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                        </Flex>
                        <Flex
                          pt="2px"
                          w="75px"
                          gap="4px"
                          flexDir="row-reverse"
                          h="24px"
                        >
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                        </Flex>
                        <Flex
                          pt="2px"
                          w="75px"
                          gap="4px"
                          flexDir="row-reverse"
                          h="24px"
                        >
                          <StarIcon boxSize={4} color="gray.300" />
                          <StarIcon boxSize={4} color="gray.300" />
                        </Flex>
                        <Flex
                          pt="2px"
                          w="75px"
                          gap="4px"
                          flexDir="row-reverse"
                          h="24px"
                        >
                          <StarIcon boxSize={4} color="gray.300" />
                        </Flex>
                      </Box>

                      <Box w="400px">
                        <Progress
                          colorScheme="purple"
                          bg="f8f8f8"
                          size="sm"
                          value={43}
                          m="15px 0"
                          border="1px solid #e1e1e1"
                        />
                        <Progress
                          colorScheme="purple"
                          bg="#f8f8f8"
                          size="sm"
                          value={21}
                          m="15px 0"
                          border="1px solid #e1e1e1"
                        />
                        <Progress
                          colorScheme="purple"
                          bg="#f8f8f8"
                          size="sm"
                          value={9}
                          m="15px 0"
                          border="1px solid #e1e1e1"
                        />
                        <Progress
                          colorScheme="purple"
                          bg="#f8f8f8"
                          size="sm"
                          value={52}
                          m="15px 0"
                          border="1px solid #e1e1e1"
                        />
                        <Progress
                          colorScheme="purple"
                          bg="#f8f8f8"
                          size="sm"
                          value={78}
                          m="15px 0"
                          border="1px solid #e1e1e1"
                        />
                      </Box>
                    </div>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>

        {/* ***********************accordion ends ***************** */}

        <div className="carousal_container">
          <BestSellers />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
