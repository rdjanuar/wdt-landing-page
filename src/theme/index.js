import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/color";
import { fonts, fontSizes, fontWeights } from "./foundations/font";
import { breakpoints } from "./foundations/breakpoints";
import { Button } from "./components/button";
import { Container } from "./components/container";

const overrides = {
  colors,
  fontSizes,
  fonts,
  breakpoints,
  fontWeights,
  components: {
    Button,
    Container,
  },
};

export default extendTheme(overrides);
