import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import "../Styles/Navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import bag from "../Assets/bag.png";
import user from "../Assets/user.png";
import search from "../Assets/search.png";
import heart from "../Assets/heart.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DrawerExample from "./HamburgerMenu";
import { NavLink } from "react-router-dom";

const ShopDropList = [
  "SKINCARE",
  "MAKEUP",
  "HAIR",
  "BATH & BODY",
  "FRAGRANCE",
  "TOOLS & ACCESSORIES",
  "HOME & LIFESTYLE",
  "SUN CARE",
  "MEN",
  "GIFTS",
  "WELLNESS",
  "FREE GIFTS!",
  "LEARN & EXPLORE",
  "EVENTS",
  "BLUEREWARDS",
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="Navbar-Container">
      <div className="header-sec">
        <div className="head_locator_wrapper">
          <div className="header_store_locator">
            <Flex
              justify="center"
              align="center"
              gap="10px"
              className="store_locator_flex"
            >
              <FmdGoodOutlinedIcon sx={{ color: "#203556" }} />
              <Heading as="h6" variant="h6">
                STORE & SPA LOCATOR
              </Heading>{" "}
            </Flex>
          </div>
          <div className="hamburger-menu" ref={btnRef} onClick={onOpen}>
            <MenuOutlinedIcon />
          </div>
          <DrawerExample onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        </div>
        <div className="head_flex">
          <div className="header_website_title"></div>
        </div>
        <div className="head_right_icon_wrapper">
          <div className="wish_icon_wrapper">
            <img src={heart} alt="heart" className="heart_icon" />
            <Heading as="h6" variant="h5" className="descriptions">
              WISHLIST
            </Heading>{" "}
          </div>
          <div className="search_icon_wrapper">
            <img src={search} alt="search" className="search_icon" />
            <Heading as="h6" variant="h5" className="descriptions">
              SEARCH
            </Heading>
          </div>
          <div className="signup_icon_wrapper">
            <img src={user} alt="user" className="signup_icon" />
            <Heading as="h6" variant="h5" className="descriptions">
              <NavLink to="/login">SIGN IN/UP</NavLink> 
            </Heading>
          </div>
          <div className="bag_icon_wrapper">
            <img src={bag} alt="" className="bag_icon" />
            {/* <span className="cart_count">1</span> */}
            <Heading as="h6" variant="h5" className="descriptions">
              WISHLIST
            </Heading>
          </div>
        </div>
      </div>
      <div className="dropdown_section_wrapper">
        <div className="hover-dropdown1">
          <Heading as="h3" variant="h4" className="drophead">
            <NavLink to="/mens">SHOP</NavLink>
          </Heading>
          <div className="dropdown-content1">
            <div className="drop_down_wrapper">
              {ShopDropList.map((el) => (
                <div className="flex_div">
                  <div className="shop_drop_content" key={el}>
                    <NavLink to="/mens">{el}</NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hover-dropdown2">
          <Heading as="h3" variant="h4" className="drophead">
            NEW!
          </Heading>
          <div className="dropdown-content2"></div>
        </div>
        <div className="hover-dropdown3">
          <Heading as="h3" variant="h4" className="drophead">
            BRANDS
          </Heading>
          <div className="dropdown-content3"></div>
        </div>
        <div className="hover-dropdown4">
          <Heading as="h3" variant="h4" className="drophead">
            EXPLORE
          </Heading>
          <div className="dropdown-content4"></div>
        </div>
        <div className="hover-dropdown5">
          <Heading as="h3" variant="h4" className="drophead">
            EVENTS
          </Heading>
          <div className="dropdown-content5"></div>
        </div>
        <div className="hover-dropdown6">
          <Heading as="h3" variant="h4" className="drophead">
            BLUEREWARDS
          </Heading>
          <div className="dropdown-content6"></div>
        </div>
        <div className="hover-dropdown7">
          <Heading as="h3" variant="h4" className="drophead">
            BEAUTY ALFRESCO
          </Heading>
          <div className="dropdown-content7"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
