import { defineStyle } from "@chakra-ui/react";

export const Container = defineStyle({
  baseStyle: {
    maxW: "1920px",
    px: 0,
    mx: "auto",
  },
  sizes: {
    mobile: {
      minW: "375px",
    },
    tablet: {
      minW: "768px",
    },
    desktop: {
      minW: "1280px",
    },
  },
  defaultProps: {},
});
