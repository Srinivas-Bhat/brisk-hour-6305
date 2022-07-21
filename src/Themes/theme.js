import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        xl: {
          h: "50px",
          fontSize: "lg",
          px: "32px",
          color: "white",
          letterSpacing: "1px",
        },
      },
      variants: {
        "with-shadow": {
          bg: "red.300",
          boxShadow: "0 0 2px 2px red",
        },
        primary: {
          bg: "teal.500",
          fontSize: "md",
        },
        secondary: {
          bg: "purple.300",
          color: "white",
          boxShadow: "0 0 2px 2px black",
        },
      },
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "500",
      },
      variants: {
        h1: {
          fontWeight: "300",
          fontSize: "50px",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
        h2: {
          fontWeight: "500",
          fontSize: "20px",
          color: "#12284c",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
        h3: {
          fontWeight: "300",
          fontSize: "14px",
          color: "#12284c",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
        h4: {
          fontWeight: "400",
          fontSize: "14px",
          color: "#12284c",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
        h5: {
          fontWeight: "500",
          fontSize: "11px",
          color: "#3b4e6b",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
        h6: {
          fontWeight: "500",
          fontSize: "10px",
          color: "#1d3a6a",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
        h7: {
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
          fontWeight: "400",
        },
        h8: {
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
          fontWeight: "300",
          fontSize: "18px",
          color: "white",
        },
        h9: {
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
          fontWeight: "300",
          fontSize: "22px",
          color: "white",
        },
        h10: {
          fontWeight: "450",
          fontSize: "15px",
          color: "#12284c",
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: "10px",
        fontWeight: "400",
        color: "#12284c",
        fontFamily: "'Montserrat', san-serif",
      },
      variants: {
        heads: {
          fontFamily: "'Montserrat', san-serif",
          letterSpacing: "1px",
          fontWeight: "400",
          fontSize: "26px",
          color: "#12284c",
          textAlign: "center",
        },
      },
    },
    Flex: {
      end: {
        justify: "flex-end",
      },
    },
    Box: {
      variants: {},
    },
  },
});

export default theme;
