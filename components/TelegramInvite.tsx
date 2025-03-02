import React from "react";
import { Flex, useToast, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { images } from "@/utils/images";
import { brandColors } from "@/styles/theme";

type Props = {};

const TelegramInvite = (props: Props) => {
  const router = useRouter();
  const toast = useToast();

  return (
    <Flex mt="40px" flexDirection={"column"} alignItems={"center"} gap={4}>
      <Flex
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        bgColor={"#0185CA"}
        px={2}
        py={"5px"}
        borderRadius={5}
        w={160}
        _hover={{ cursor: "pointer" }}
        onClick={() => {
          try {
            if (!router.query.tme) throw new Error("Ссылка на телеграм канал отсутствует.");
            router.push(`https://t.me/+${router.query.tme}`);
          } catch (error: any) {
            toast({
              title: "Произошла ошибка!",
              description: error.message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        }}
      >
        <Image alt="Telegram Icon" src={images.telegram} width={30} height={30} />
        <Text textColor={"white"} fontWeight={"700"} textAlign={"center"} fontSize={"14px"}>
          Телеграм канал
        </Text>
      </Flex>
      <Flex bgColor={brandColors.lightPink}>
        <Image alt="Telegram QR code" src={images.telegramQR} width={180} height={180} mixBlendMode={"darken"} />
      </Flex>
    </Flex>
  );
};

export default TelegramInvite;
