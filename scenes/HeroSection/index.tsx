import React, { useEffect, useState } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { images } from "@/utils/images";
import { supabase } from "@/services/supabase";
import { useToast } from "@/hooks";

type Props = {};

const HeroSection = (props: Props) => {
  const [startingTime, setStartinTime] = useState<string>("xx:00");

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
    <Flex height={"100dvh"} width={"100%"} flexDirection={"column"} alignItems={"center"}>
      <Flex position={"relative"} justifyContent={"center"} alignItems={"center"} my={"100px"} width={"80%"}>
        <Image position={"absolute"} w={"100%"} zIndex={2} src={images.flowerCircle} objectFit={"cover"} objectPosition={"center"} />
        <Image w={"70%"} rounded={"full"} src={images.heroSection} objectFit={"cover"} objectPosition={"center"} boxShadow={"0 0 8px 8px white inset"} />
      </Flex>

      <Flex
        position={"relative"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"175px"}
        width={"350px"}
        mx={"auto"}
        justifyContent={"space-between"}
        fontSize={"4xl"}
        mb={12}
      >
        <Text textAlign={"left"} width={"full"} transform={"translate(10px,-10px)"}>
          Нурболат
        </Text>

        <Text textAlign={"right"} width={"full"} pr={2}>
          Хeуон
        </Text>
        <Flex position={"absolute"} width={"100%"} alignItems={"center"} top={-4} justifyContent={"center"}>
          <Image src={images.path} height={"175px"} objectFit={"cover"} />
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
      <Flex flex={1} flexDirection={"column"} justifyContent={"center"}>
        <Text w="60vw" flexDirection={"column"} textAlign={"center"} fontSize={["1.2rem", "1.6rem"]} textShadow={"#FFF 1px 0 10px"}>
          Приглашаем вас на нашу свадьбу!
        </Text>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
