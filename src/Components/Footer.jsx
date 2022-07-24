import React from 'react'
import "../Styles/Footer.css";

import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import twitter from "../Assets/twitter.png";
import pinterest from "../Assets/pinterest.png";
import facebook from "../Assets/facebook.png";
import youtube from "../Assets/youtube.png";
import instagram from "../Assets/instagram.png";

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"93%"} py={15}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box h="250px" w="320px">
              <Heading as="h4" variant="h3" fontWeight="400" m="10px 0 21px">
                Get Expert Beauty Insight & Offers
              </Heading>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="footer_input"
              />
              <span>
                <ArrowForwardIcon />
              </span>
              <Text as="h4" variant="footer" m="20px 0px 0px">
                By cotinuing, you agree to Bluemercury's
              </Text>
              <Text variant="footer1"><Link to="/privacy">Privacy Policy</Link></Text>
              <Flex gap="35px" m="25px 0 0 0" cursor="pointer">
                <img
                  src={twitter}
                  alt="twitter"
                  className="social_media_icons"
                />
                <img
                  src={pinterest}
                  alt="pinterest"
                  className="social_media_icons"
                />
                <img
                  src={facebook}
                  alt="facebook"
                  className="social_media_icons"
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className="social_media_icons"
                />
                <img
                  src={youtube}
                  alt="youtube"
                  className="social_media_icons"
                />
              </Flex>
              <Text as="h5" variant="baseStyle" mt="30px">
                © 2022 Chakra Templates. All rights reserved
              </Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"} cursor="pointer">
            <Text fontWeight={"300"} fontSize={"sm"} mb={2}>
              BLUEMERCURY
            </Text>
            <Text
              pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Our Company
            </Text>
            <Text
              pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Store Locator
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              In-Store & Online Events
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Spa Menu
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Careers
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Vendor Submissions
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Diversity & Inclusion
            </Text>
          </Stack>
          <Stack align={"flex-start"} cursor="pointer">
            <Text fontWeight={"300"} fontSize={"sm"} mb={2}>
              MY ACCOUNT
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              My Account
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              BlueRewards
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
              href={"#"}
            >
              Gift Card Balance Checker
            </Text>
          </Stack>
          <Stack align={"flex-start"} cursor="pointer">
            <Text fontWeight={"300"} fontSize={"sm"} mb={2}>
              CUSTOMER SERVICE
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Contact Us
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Help & FAQ
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Shipping, Returns & Exchanges
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Gift Cards
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Offers & Promotions
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Klarna
            </Text>
          </Stack>
          <Stack align={"flex-start"} cursor="pointer">
            <Text fontWeight={"300"} fontSize={"sm"} mb={2}>
              RESOURCES
            </Text>
            <Text variant="footer" href={"#"}>
              Terms & Conditions
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Privacy Notice
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Do Not Sell My Personal Information
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              CA Privacy Rights
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Accessibility
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              Affiliate Program
            </Text>
            <Text
            pb="3px"
              variant="footer"
              _hover={{
                textDecoration: "underline #12284c",
                textUnderlineOffset: "3px",
              }}
            >
              COVID-19 Updates
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
