import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "48px",
    width: "191px",
    height: "48px",
    fontWeight: "semibold",
    fontSize: "bodyBase",
  },
  sizes: {
    small: {
      width: "157px",
      height: "44px",
    },
  },
  variants: {
    primary: (props) => ({
      _hover: {
        backgroundColor: props.hoverBackgroundColor
          ? props.hoverBackgroundColor
          : "rgba(239, 147, 1, 1)",
      },
      textColor: props.textColor ? props.textColor : "white",
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : "accent.500",
    }),

    secondary: (props) => ({
      _hover: {
        backgroundColor: props.hoverBackgroundColor
          ? props.hoverBackgroundColor
          : "rgba(239, 147, 1, 0.5)",
      },
      border: `1px solid ${props.borderColor ? props.borderColor : "white"}`,
      textColor: props.textColor ? props.textColor : "soft.100",
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : "transparent",
    }),
  },
});
