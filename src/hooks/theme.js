// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    blue: {
      100: "#a9d6e5", // lightest
      200: "#89c2d9",
      300: "#61a5c2",
      400: "#468faf",
      500: "#2c7da0",
      600: "#2a6f97",
      700: "#014f86",
      800: "#01497c",
      900: "#013a63",
      1000: "#012a4a", // darkest
    },
  },
});

export default customTheme;
