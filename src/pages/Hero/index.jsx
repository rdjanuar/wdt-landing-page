import React from "react";
import {
  Image,
  Text,
  Flex,
  Button,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";

import heroImageMobile from "../../assets/images/heroImageMobile.png";
import heroImageDekstop from "../../assets/images/heroImageDekstop.png";

export const Hero = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      direction={{
        base: "column",
        lg: "row",
        xl: "row",
      }}
      mt={{
        base: 0,
        xl: 7,
      }}
      h={{
        sm: "100vh",
        md: "100%",
      }}
      justify={{
        md: "center",
      }}
      align="center"
      gap={4}
    >
      {isLargerThan768 ? (
        <Image src={heroImageDekstop} h="500px" w="625px" />
      ) : (
        <Image src={heroImageMobile} />
      )}
      <Stack
        direction="column"
        align={{
          base: "center",
          md: "start",
        }}
        gap={4}
        ml={{
          lg: 10,
        }}
      >
        <Text
          fontSize={{
            base: "28px",
            xl: "48px",
          }}
          textAlign={{
            base: "center",
            md: "start",
          }}
          fontWeight="bold"
          lineHeight={{
            base: "36.23px",
            xl: "62.11px",
          }}
          color="secondary.500"
          mt={10}
        >
          Whalez Digital Teknologi
        </Text>
        <Text
          textAlign={{
            base: "center",
            md: "start",
          }}
          fontSize={{
            base: "20px",
            md: "heading",
          }}
          w={{
            base: "39vh",
            xl: "35rem",
          }}
          color="primary.500"
          lineHeight={{
            base: "30px",
            md: "45px",
          }}
        >
          Digitize your business in a simple way, deliver to you on time
        </Text>
        <Button
          variant={{
            base: "secondary",
            xl: "primary",
          }}
          size="small"
          type="button"
          fontSize={{
            base: "12px",
            xl: "14px",
          }}
          backgroundColor="secondary.500"
          _hover={{
            xl: {
              bg: "bold.40",
            },
            base: {
              bg: "secondary.500",
            },
          }}
        >
          Get In Touch
        </Button>
      </Stack>
    </Flex>
  );
};
