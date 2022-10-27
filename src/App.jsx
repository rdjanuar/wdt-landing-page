import React from "react";
import { Container } from "@chakra-ui/react";

import { Navbar } from "./components";
import { Hero, Services, Products } from "./pages";

const App = () => {
  return (
    <Container
      size={{
        sm: "mobile",
        md: "tablet",
        xl: "dekstop",
      }}
    >
      <Navbar />
      <Hero />
      <Products />
      <Services />
    </Container>
  );
};

export default App;
