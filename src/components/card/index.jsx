import React from "react";
import { Box, Image, Text, Center } from "@chakra-ui/react";

export const Card = ({ image, description, title, ...rest }) => {
  return (
    <Box
      role="group"
      w="150px"
      h="290px"
      pos="relative"
      _hover={{
        _after: {
          opacity: 1,
        },
      }}
      _after={{
        content: `"${description}"`,
        position: "absolute",
        top: 0,
        right: 0,
        opacity: 0,
        transition: "all 0.15s ease-in-out",
      }}
      {...rest}
    >
      <Image
        src={image}
        alt="image-caraousel"
        pos="relative"
        objectFit="contain"
      />
      <Box pos="absolute" height="40px" w="100%" bg="rgba(102, 188, 173, 0.8);">
        <Center
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Text
            fontSize="10px"
            fontWeight="semibold"
            textAlign="center"
            lineHeight="15px"
            color="white"
          >
            {title}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
