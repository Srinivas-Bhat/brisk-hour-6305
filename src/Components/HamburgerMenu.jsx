import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import user from "../Assets/user.png";
import "../Styles/HamburgerMenu.css";
import Accordions from "./Accordion";

const Array = [
  "BEAUTY ALFRESCO",
  "BRANDS",
  "NEW!",
  "BEST SELLERS",
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
function DrawerExample({ isOpen, onOpen, onClose, btnRef }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton sx={{ color: "#12284c", fontSize: "17px" }} />
          <div className="user-login-sec">
            <img src={user} alt="user" className="user-image" />
            <Heading as="h6" variant="h4">
              SIGN IN/UP
            </Heading>
          </div>
          <DrawerBody>
            <div>
              {Array.map((el) => (
                <Accordions key={el} title={el} />
              ))}
            </div>
            <div>STORE & SPA LOCATOR</div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
