import React from "react";
import { Box, Text, Link, Divider, VStack, Button } from "@chakra-ui/react";

export const DropdownNavbar = ({ ...any }) => {
  const menuLink = [
    {
      name: "Product",
      link: "#product",
    },
    {
      name: "Our Services",
      link: "#our-services",
    },
    {
      name: "About Us",
      link: "#about-us",
    },
    {
      name: "Portofolio",
      link: "#portofolio",
    },
    {
      name: "Our Contact",
      link: "#our-contact",
    },
  ];

  return (
    <Box
      pos="absolute"
      top="16"
      left={0}
      bg="white"
      width="100%"
      h="calc(27rem - 2px)"
      as={VStack}
      gap={4}
      alignItems="start"
      {...any}
    >
      {menuLink.map(({ name, link }) => (
        <Link
          href={link}
          key={name}
          style={{
            textDecoration: "none",
          }}
        >
          <Text
            fontSize="bodyBase"
            pl={10}
            mt={name === "Product" ? 4 : 0}
            py={2}
            transform="translateY(-10px)"
            fontWeight="semibold"
            color="secondary.500"
          >
            {name}
          </Text>
          <Divider borderColor="primary.500" w="100vw" />
        </Link>
      ))}
      <Button
        variant="secondary"
        size="small"
        transform="translateX(2rem)"
        type="button"
        backgroundColor="secondary.500"
        _hover={{
          bg: "bold.40",
        }}
      >
        Carrer
      </Button>
    </Box>
  );
};
