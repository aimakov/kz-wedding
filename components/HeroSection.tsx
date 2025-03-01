import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { images } from "@/utils/images";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <Flex height={"100dvh"} minH={"900px"} flexDirection={"column"} alignItems={"center"}>
      <Flex position={"relative"} justifyContent={"center"} alignItems={"center"} my={"100px"} width={"80%"}>
        <Image position={"absolute"} w={"100%"} zIndex={2} src={images.flowerCircle} objectFit={"cover"} objectPosition={"center"} />
        <Image w={"70%"} rounded={"full"} src={images.heroSection} objectFit={"cover"} objectPosition={"center"} boxShadow={"0 0 8px 8px white inset"} />
      </Flex>

      <Flex position={"relative"} flexDirection={"column"} alignItems={"center"} fontSize={"4xl"} mb={12} width={"full"} pr={10} pl={12}>
        <Text textAlign={"left"} width={"full"} transform={"translateY(-10px)"}>
          Нурболат
        </Text>
        <Text fontSize={"2xl"} pl={6}>
          и
        </Text>
        <Text textAlign={"right"} width={"full"} pr={2}>
          Хэуон
        </Text>
        <Image src={images.path} position={"absolute"} width={"80%"} objectFit={"cover"} top={[-7, "-45px"]} left={[10, "42px"]} />
      </Flex>

      <Flex alignItems={"center"} gap={["20px", "40px"]} fontSize={["1.2rem", "1.6rem"]}>
        <Text w="130px" py={5} textAlign={"center"} height={"min-content"} borderTop={"1px solid #333"} borderBottom={"1px solid #333"}>
          Суббота
        </Text>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text textAlign={"center"}>май</Text>
          <Text textAlign={"center"} fontSize={"2rem"} lineHeight={["35px", "60px"]}>
            31
          </Text>
          <Text textAlign={"center"}>2025</Text>
        </Flex>
        <Text w="130px" py={5} textAlign={"center"} height={"min-content"} borderTop={"1px solid #333"} borderBottom={"1px solid #333"}>
          15:00
        </Text>
      </Flex>

      <Text w="60vw" flexDirection={"column"} textAlign={"center"} fontSize={["1.2rem", "1.6rem"]} textShadow={"#FFF 1px 0 10px"} my="auto">
        Приглашаем вас на нашу свадьбу!
      </Text>
    </Flex>
  );
};

export default HeroSection;
