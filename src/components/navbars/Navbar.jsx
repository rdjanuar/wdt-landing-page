import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  HStack,
  Image,
  Link,
  chakra,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import mainLogoMobile from "../../assets/logo/mainLogoMobile.png";
import mainLogoDekstop from "../../assets/logo/mainLogoDekstop.png";
import { DropdownNavbar } from "./DropdownNavbar";
import { useScrollPosition } from "../../hooks";

export const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

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
    <Flex
      align="center"
      justify={{
        sm: "space-between",
        lg: "space-around",
        "2xl": "space-evenly",
      }}
      px={{
        base: 10,
        md: 0,
        "2xl": "calc(1.5rem + 5px)",
      }}
      shadow={scrollPosition >= 20 && "0px 4px 25px 0px rgba(0, 0, 0, 0.03)"}
      bg="soft.100"
      h="70px"
      pos="sticky"
      top={0}
      zIndex="sticky"
    >
      {isLargerThan768 ? (
        <Image
          src={mainLogoDekstop}
          objectFit="cover"
          width="100px"
          height="21px"
        />
      ) : (
        <Image
          src={mainLogoMobile}
          objectFit="cover"
          width="32px"
          height="30px"
        />
      )}
      <HStack
        spacing={7}
        display={{
          base: "none",
          md: "flex",
        }}
      >
        {menuLink.map(({ name, link }) => (
          <Link as={RouterLink} to={link} key={name}>
            <Text fontSize="bodyBase" fontWeight="medium" color="secondary.500">
              {name}
            </Text>
          </Link>
        ))}
      </HStack>
      <Button
        display={{
          base: "none",
          md: "flex",
        }}
        variant="secondary"
        size="small"
        type="button"
        backgroundColor="secondary.500"
        _hover={{
          bg: "bold.40",
        }}
      >
        Career
      </Button>
      {disclosureProps.hidden ? (
        <chakra.svg
          {...buttonProps}
          width="25"
          display={{
            base: "block",
            md: "none",
          }}
          cursor="pointer"
          height="33"
          viewBox="0 0 25 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.125 5.5H24.875V8.25H0.125V5.5ZM0.125 15.125H24.875V17.875H0.125V15.125ZM0.125 24.75H24.875V27.5H0.125V24.75Z"
            fill="#003D41"
          />
        </chakra.svg>
      ) : (
        <chakra.svg
          {...buttonProps}
          width="34"
          cursor="pointer"
          display={{
            base: "block",
            md: "none",
          }}
          transform="translateX(4px)"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 14.9968L24.0125 7.98434L26.0156 9.98751L19.0031 17L26.0156 24.0125L24.0125 26.0157L17 19.0032L9.98748 26.0157L7.98431 24.0125L14.9968 17L7.98431 9.98751L9.98748 7.98434L17 14.9968Z"
            fill="#003D41"
          />
        </chakra.svg>
      )}
      <DropdownNavbar
        display={{
          sm: "flex",
          md: "none",
        }}
        maxH={disclosureProps.hidden ? "0" : "27rem"}
        overflow="hidden"
        transition="all 0.4s ease-in-out"
        dropShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />
    </Flex>
  );
};
