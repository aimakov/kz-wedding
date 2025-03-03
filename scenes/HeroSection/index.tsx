import React, { useEffect, useState } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { images } from "@/utils/images";
import { supabase } from "@/services/supabase";
import { useToast } from "@/hooks";

type Props = {};

const HeroSection = (props: Props) => {
  const [startingTime, setStartinTime] = useState<string>("15:00");

  const { errorToast } = useToast();

  const getStartingTime = async () => {
    try {
      const { data, error } = await supabase.from("settings").select("startingTime").single();
      if (error) throw error;

      setStartinTime(data.startingTime);
    } catch (error) {
      const message = (error as Error).message;
      errorToast({ title: message, description: "" });
    }
  };

  useEffect(() => {
    getStartingTime();
  }, []);

  return (
    <Flex height={"100dvh"} minH={"900px"} flexDirection={"column"} alignItems={"center"}>
      <Flex position={"relative"} justifyContent={"center"} alignItems={"center"} my={"100px"} width={"80%"}>
        <Image position={"absolute"} w={"100%"} zIndex={2} src={images.flowerCircle} objectFit={"cover"} objectPosition={"center"} />
        <Image w={"70%"} rounded={"full"} src={images.heroSection} objectFit={"cover"} objectPosition={"center"} boxShadow={"0 0 8px 8px white inset"} />
      </Flex>

      <Flex position={"relative"} flexDirection={"column"} alignItems={"center"} gap={10} fontSize={"4xl"} mb={12} width={"full"} pr={10} pl={12}>
        <Text textAlign={"left"} width={"full"} transform={"translateY(-10px)"}>
          Нурболат
        </Text>

        <Text textAlign={"right"} width={"full"} pr={2}>
          Хэуон
        </Text>
        <Flex position={"absolute"} width={"full"} alignItems={"center"} top={-6} left={-2} justifyContent={"center"}>
          <Image src={images.path} width={"80%"} objectFit={"cover"} />
          {/* <Text fontSize={"2xl"} position={"absolute"} left={["52.5%", "53%"]} top={["48%", "50%"]}>
            и
          </Text> */}
        </Flex>
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
          {startingTime}
        </Text>
      </Flex>

      <Text w="60vw" flexDirection={"column"} textAlign={"center"} fontSize={["1.2rem", "1.6rem"]} textShadow={"#FFF 1px 0 10px"} my="auto">
        Приглашаем вас на нашу свадьбу!
      </Text>
    </Flex>
  );
};

export default HeroSection;
