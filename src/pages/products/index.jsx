import React from "react";
import { Text, Box, Image, VStack, chakra, Flex } from "@chakra-ui/react";

import { useMousePosition } from "../../hooks";
import rencanakan from "../../assets/images/rencanakan.png";
import beraniSekolah from "../../assets/images/beraniSekolah.png";

export const Products = () => {
  const [x, y, bind] = useMousePosition();

  return (
    <Flex
      id="product"
      direction={{
        sm: "column",
        lg: "row",
      }}
      px={{
        sm: 10,
        lg: "calc(4.9rem + 10px)",
      }}
      justify="center"
      gap={{
        base: 2,
        xl: "calc(3rem - 5px)",
      }}
    >
      <VStack
        display={{
          base: "block",
          lg: "none",
        }}
      >
        <Text
          fontSize="bodyLarge"
          lineHeight="30px"
          color="bold.0"
          fontWeight="medium"
        >
          Our Products
        </Text>
        <Text
          fontSize="bodySmall"
          fontWeight="400"
          lineHeight="18px"
          color="bold.0"
        >
          Here it is, some products that we’ve build. You can have one of these
          product as well. So, what are you waiting for? Get yours now
        </Text>
      </VStack>
      <Flex
        pos="relative"
        _after={{
          content: `""`,
          position: "absolute",
          top: -4,
          left: -4,
          width: "220px",
          height: "139px",
          bg: "accent.500",
          zIndex: "hide",
          base: {
            display: "none",
          },
        }}
        direction={{
          sm: "column",
          lg: "row",
        }}
        align="center"
        gap={{
          sm: 20,
          md: 4,
        }}
        my={14}
      >
        <Box
          bg="primary.500"
          role="group"
          border="1px solid #66BCAD"
          w="299px"
          pos="relative"
          _hover={{
            _after: {
              opacity: 1,
            },
          }}
          _after={{
            content: `"click to visit"`,
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0,
            transition: "all 0.15s ease-in-out",
          }}
        >
          <Image
            {...bind}
            src={rencanakan}
            alt="rencanakan"
            w="100%"
            h="100%"
            pos="relative"
            objectFit="cover"
            _groupHover={{
              transform: `scale(0.5) translate(${x / 10}px, ${y / 10}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
          <Box
            pos="absolute"
            bottom="-3rem"
            w="calc(100% + 2px)"
            height="82px"
            left="-1px"
            bg="secondary.500"
          >
            <VStack align="center" transform="translateY(45%)">
              <Text fontSize="bodyBase" fontWeight="semibold" color="white">
                Rencanakan
              </Text>
              <Text
                fontSize="bodySmall"
                fontWeight="medium"
                color="primary.500"
                transform="translateY(-4px)"
              >
                Daily Planner Platform
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box
          bg="primary.500"
          role="group"
          border="1px solid #66BCAD"
          w="299px"
          pos="relative"
          _hover={{
            _after: {
              opacity: 1,
            },
          }}
          _after={{
            content: `"click to visit"`,
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0,
            transition: "all 0.15s ease-in-out",
          }}
        >
          <Image
            {...bind}
            src={beraniSekolah}
            alt="rencanakan"
            w="100%"
            h="100%"
            pos="relative"
            objectFit="cover"
            _groupHover={{
              transform: `scale(0.5) translate(${x / 10}px, ${y / 10}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
          <Box
            pos="absolute"
            bottom="-3rem"
            w="calc(100% + 2px)"
            height="82px"
            left="-1px"
            bg="secondary.500"
          >
            <VStack align="center" transform="translateY(45%)">
              <Text fontSize="bodyBase" fontWeight="semibold" color="white">
                Berani Sekolah
              </Text>
              <Text
                fontSize="bodySmall"
                fontWeight="medium"
                color="primary.500"
                transform="translateY(-4px)"
              >
                School Management Platform
              </Text>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <VStack
        ml={{
          "2xl": 32,
        }}
        align="start"
        justify="center"
      >
        <Text
          fontSize="heading"
          lineHeight="45px"
          color="bold.0"
          fontWeight="semibold"
          display={{
            base: "none",
            lg: "block",
          }}
        >
          Our Products
        </Text>
        <Text
          fontSize="bodyBase"
          fontWeight="400"
          lineHeight="21px"
          color="bold.0"
          w={{
            md: "27rem",
          }}
          display={{
            base: "none",
            lg: "block",
          }}
        >
          Here it is, some products that we’ve build. You can have one of these
          product as well. So, what are you waiting for? Get yours now
        </Text>
        <Text
          fontSize={{
            base: "bodyBase",
            xl: "bodyLarge",
          }}
          fontWeight="medium"
          color="primary.500"
          lineHeight={{
            base: "21px",
            xl: "30px",
          }}
          w={{
            base: "80vw",
            md: "27rem",
            xl: "32vw",
            "2xl": "22vw",
          }}
          pos="relative"
          textAlign={{
            base: "center",
            xl: "start",
          }}
        >
          Beside our products, we are also providing lot of services that could
          help you digitize your businesses, come and take a look...
          <chakra.svg
            pos="absolute"
            right="-10"
            display={{
              base: "none",
              xl: "block",
            }}
            top="12"
            height="301"
            viewBox="0 0 1173 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 250H1V203.5H1172V1H1141.5"
              stroke="#66BCAD"
              strokeWidth="1.5"
            />
          </chakra.svg>
        </Text>
      </VStack>
    </Flex>
  );
};
