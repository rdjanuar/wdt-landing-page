import React, { useRef, useState, useEffect } from "react";
import { Text, chakra, VStack, HStack, Flex } from "@chakra-ui/react";

import mobileImage1 from "../../assets/images/mobileImage1.png";
import mobileImage2 from "../../assets/images/mobileImage2.png";
import mobileImage3 from "../../assets/images/mobileImage3.png";
import mobileImage4 from "../../assets/images/mobileImage4.png";
import mobileImage5 from "../../assets/images/mobileImage5.png";
import mobileImage6 from "../../assets/images/mobileImage6.png";
import mobileImage7 from "../../assets/images/mobileImage7.png";
import mobileImage8 from "../../assets/images/mobileImage8.png";
import { Card } from "../../components/card";

export const Services = () => {
  const caraouselRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const caraouselData = [
    {
      image: mobileImage1,
      title: "Bespoke Development",
      description:
        "Provide a cutting-edge solutions in developing complex software with the expert, as your business demands. Explain your needs, what you want is what you get",
    },
    {
      image: mobileImage2,
      title: "Software Product Development",
      description:
        "This is just perfect for realizing your ton of ideas to make your own software product. Adjustable services for a better business process",
    },
    {
      image: mobileImage3,
      title: "Mobile App Development",
      description:
        " Make your business stand out by providing value to your customer through mobile app ",
    },
    {
      image: mobileImage4,
      title: "Website Development",
      description:
        " Website is everywhere to be found, if your business don’t have one yet, create yours right now ",
    },

    {
      image: mobileImage5,
      title: "Front-End Development",
      description:
        " Collaborate your internal team with experienced Front-End Developers that improve speed and quality of the development. ",
    },
    {
      image: mobileImage6,
      title: "Quality Assurance Services",
      description:
        "QA service aims to ensure the security and quality of your software product fits the standard. QA service allows you to locate and eliminate potential errors such as security, performance and defects of the product ",
    },
    {
      image: mobileImage7,
      title: "Dev Ops Services",
      description:
        "Bring development and operation teams together to efficiently and reliably build software products through automation. Share the same understanding, responsibility and mindset, DevOps service can certainly improve speed and stability of software deployment ",
    },
    {
      image: mobileImage8,
      title: "Dedicated Development Team",
      description:
        " Act like a part of your business, Dedicated Team works under your fully control. You can get an expert for your software development project get done with less cost and instant access to a skillful team. No need to expense on hiring process, start your project immediately",
    },
  ];

  const handlePrev = () => {
    // scroll to previous image 154px to the left
    caraouselRef.current.scrollLeft -= 154;
  };

  const handleNext = () => {
    caraouselRef.current.scrollLeft += 325;
  };

  const scroll = caraouselRef.current?.scrollLeft;

  useEffect(() => {
    if (scroll === 0) {
      setIsPrevDisabled(true);
    }
    if (
      scroll ===
      caraouselRef.current.scrollWidth - caraouselRef.current.clientWidth
    ) {
      setIsNextDisabled(true);
    }
  }, [scroll]);

  return (
    <chakra.div
      px={{
        base: 10,
      }}
      mt={{
        base: 8,
      }}
    >
      <VStack spacing={2} align="start">
        <Text
          fontSize={{
            base: "bodyLarge",
          }}
          fontWeight={{
            base: "semibold",
          }}
          lineHeight={{
            base: "30px",
          }}
          color={{
            base: "secondary.500",
          }}
        >
          Our Services
        </Text>
        <Text
          fontSize="bodySmall"
          fontWeight="regular"
          lineHeight="18px"
          color="secondary.500"
        >
          To facilitate all your needs in digitizing every product that you’ve
          built, all of these services can help you to make it happen
        </Text>
      </VStack>
      <HStack mt={4}>
        <chakra.svg
          width="26"
          _disabled={{
            opacity: isPrevDisabled ? 0.5 : 1,
          }}
          onClick={handlePrev}
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2.16663C18.98 2.16663 23.8333 7.01996 23.8333 13C23.8333 18.98 18.98 23.8333 13 23.8333C7.02001 23.8333 2.16667 18.98 2.16667 13C2.16667 7.01996 7.02001 2.16663 13 2.16663ZM13 21.6666C17.7883 21.6666 21.6667 17.7883 21.6667 13C21.6667 8.21163 17.7883 4.33329 13 4.33329C8.21167 4.33329 4.33334 8.21163 4.33334 13C4.33334 17.7883 8.21167 21.6666 13 21.6666ZM13 11.9166H17.3333V14.0833H13V17.3333L8.66667 13L13 8.66663V11.9166Z"
            fill={isPrevDisabled ? "#C4C4C4" : "#2F80ED"}
          />
        </chakra.svg>
        <chakra.svg
          width="26"
          height="26"
          _disabled={{
            opacity: isNextDisabled ? 0.5 : 1,
          }}
          onClick={handleNext}
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2.16663C7.02 2.16663 2.16667 7.01996 2.16667 13C2.16667 18.98 7.02 23.8333 13 23.8333C18.98 23.8333 23.8333 18.98 23.8333 13C23.8333 7.01996 18.98 2.16663 13 2.16663ZM13 21.6666C8.21167 21.6666 4.33334 17.7883 4.33334 13C4.33334 8.21163 8.21167 4.33329 13 4.33329C17.7883 4.33329 21.6667 8.21163 21.6667 13C21.6667 17.7883 17.7883 21.6666 13 21.6666ZM13 11.9166H8.66667V14.0833H13V17.3333L17.3333 13L13 8.66663V11.9166Z"
            fill={isNextDisabled ? "#C4C4C4" : "#2F80ED"}
          />
        </chakra.svg>
      </HStack>
      <Flex ref={caraouselRef} overflow="hidden" gap="8px" mt={4} mb={8}>
        <HStack>
          {caraouselData.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          ))}
        </HStack>
      </Flex>
    </chakra.div>
  );
};
