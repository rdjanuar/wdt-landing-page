import { theme as chakraTheme } from "@chakra-ui/react";

export const fonts = {
  ...chakraTheme.fonts,
  body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

export const fontSizes = {
  bodyXS: "11px",
  bodySmall: "12px",
  bodyBase: "14px",
  bodyLarge: "20px",
  heading: "30px",
  xlText: "48px",
};

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
