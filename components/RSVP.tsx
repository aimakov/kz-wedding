import React, { useState, Dispatch, SetStateAction } from "react";
import { Flex, Text, FormControl, Button } from "@chakra-ui/react";
import { FormProvider, Controller, useForm, SubmitHandler } from "react-hook-form";
import NextImage from "next/image";
import { PiHeartLight, PiHeartBreakFill, PiHeartFill } from "react-icons/pi";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import TextInput from "./Form/TextInput";
import { images } from "@/utils/images";
import { brandColors } from "@/styles/theme";
import { Poiret } from "@/utils/fonts";
// import { ElMessiri } from "@/utils/fonts";
// import { supabase } from "@/services/supabase";

type Inputs = {
  name: string;
  countryCode: string;
  mobile: string;
  additionalGuests: number;
  telegramId: string;
  weddingId: string;
  coming: boolean;
};

const RSVP = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState("+7");
  const [additionalGuests, setAdditionalGuests] = useState(0);

  const [coming, setComing] = useState(false);
  const [notComing, setNotComing] = useState(false);
  const router = useRouter();

  const toast = useToast();

  const methods = useForm({
    defaultValues: {
      name: "",
      countryCode: "+7",
      mobile: "",
      telegramId: "",
      additionalGuests: 0,
      weddingId: "",
      coming: false,
      notComing: false,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // if (!coming && !notComing) throw new Error("Пожалуйста отметьте сможете ли прийти.");
      // const { data: weddingData, error: weddingError } = await supabase.from("weddings").select("id").eq("groom", "Нурболат");
      // if (weddingError) throw weddingError;
      // const processedData = {
      //   weddingId: weddingData[0].id,
      //   name: data.name,
      //   mobile: data.countryCode + data.mobile,
      //   telegramId: data.telegramId,
      //   additionalGuests: additionalGuests,
      //   isComing: coming,
      // };
      // const { error } = await supabase.from("guests").upsert(processedData);
      // if (error) throw error;
      // toast({
      //   title: "Ваш ответ записан!",
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      // });
      // methods.reset();
      // setIsShown(false);
    } catch (error: any) {
      toast({
        title: "Произошла ошибка!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsShown(true)}
        color={brandColors.black}
        py={4}
        className={Poiret.className}
        background={`linear-gradient(to right, ${brandColors.lightPink} 0%, ${brandColors.deepPink}  100%)`}
        width={32}
        rounded={"full"}
        mx={"auto"}
        my={10}
        border={"1px solid"}
        borderColor={"red.200"}
      >
        Hello
      </Button>
      {isShown && (
        <Flex
          bg={"rgba(255,255,255,0.7)"}
          backdropFilter="auto"
          backdropBlur={"5px"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          // opacity={isShown ? 1 : 0}
          // zIndex={isShown ? 3 : -1}
          position={"fixed"}
          width={"100vw"}
          minHeight={"100dvh"}
          top={0}
          transition={"opacity ease-in-out 0.5s 0.1s"}
          className={`${Poiret.className} u-anim--fade-in`}
        >
          <FormProvider {...methods}>
            <form
              style={{ width: "60%", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", maxWidth: "400px" }}
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <Text textAlign={"center"} fontSize={24} mb={2} mt={5}>
                Обратная связь
              </Text>
              <FormControl display={"flex"} flexDirection={"column"} gap={2}>
                <Flex justifyContent={"center"} gap={12} mb={6}>
                  <Flex flexDirection={"column"} alignItems={"center"} gap={2}>
                    <Text>Приду</Text>
                    {coming ? (
                      <PiHeartFill fontSize={"36px"} cursor={"pointer"} />
                    ) : (
                      <PiHeartLight
                        fontSize={"36px"}
                        cursor={"pointer"}
                        onClick={() => {
                          setComing(true);
                          setNotComing(false);
                        }}
                      />
                    )}
                  </Flex>

                  <Flex flexDirection={"column"} alignItems={"center"} gap={2}>
                    <Text>Не смогу</Text>
                    {notComing ? (
                      <PiHeartBreakFill fontSize={"36px"} cursor={"pointer"} />
                    ) : (
                      <PiHeartLight
                        fontSize={"36px"}
                        cursor={"pointer"}
                        onClick={() => {
                          setComing(false);
                          setNotComing(true);
                        }}
                      />
                    )}
                  </Flex>
                </Flex>

                <TextInput
                  id="name"
                  type="text"
                  isRequired={true}
                  size="md"
                  textColor="#333"
                  helperText="Полное имя"
                  autoComplete="new-password"
                  validation={{
                    required: {
                      value: true,
                      message: "Введите своё имя",
                    },
                    pattern: {
                      value: /^[a-zA-Zа-яА-Я\s]+$/,
                      message: "Используйте только буквы",
                    },
                    minLength: {
                      value: 2,
                      message: "Введите больше двух символов",
                    },
                    maxLength: {
                      value: 20,
                      message: "Введите максимуму 20 символов",
                    },
                  }}
                />

                <Flex w="100%" gap={"10px"}>
                  <Controller
                    name="countryCode"
                    render={({ field }) => {
                      return (
                        <TextInput
                          width={"150px"}
                          id="countryCode"
                          type="text"
                          size="md"
                          isRequired={true}
                          textColor="#333"
                          textAlign="center"
                          helperText="Код страны"
                          value={countryCode}
                          onChange={(e) => {
                            field.onChange(e);
                            if (/^\+[0-9]*$/.test(e.target.value)) setCountryCode(e.target.value);
                          }}
                          validation={{
                            required: {
                              value: true,
                              message: "Введите код страны",
                            },
                            pattern: {
                              value: /^\+[0-9]+$/,
                              message: "Формат не соотвествует коду страны",
                            },
                          }}
                        />
                      );
                    }}
                  />

                  <TextInput
                    id="mobile"
                    type="text"
                    size="md"
                    isRequired={true}
                    textColor="#333"
                    autoComplete="new-password"
                    helperText="Номер телефона"
                    dropShadow=""
                    validation={{
                      required: {
                        value: true,
                        message: "Введите номер телефона",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Формат не соотвествует номеру телефона",
                      },
                    }}
                  />
                </Flex>

                <Flex justifyContent={"space-between"} w="100%" gap={2}>
                  <TextInput
                    id="telegramId"
                    type="text"
                    size="md"
                    autoComplete="new-password"
                    helperText="Telegram ID"
                    textColor="#333"
                    validation={{
                      pattern: {
                        value: /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/,
                        message: "Формат не соотвествует Telegram ID",
                      },
                    }}
                  />

                  <Flex flexDirection={"column"}>
                    <Text mb={2} lineHeight={"22px"} fontSize="14px">
                      Plus one
                    </Text>
                    <Flex
                      alignItems={"center"}
                      // px={10}
                      gap={5}
                      h={"40px"}
                      bg="rgba(255,255,255,0.8)"
                      boxShadow="#333 0px 0px 2px"
                      textColor="#333"
                      // borderWidth="1.5px"
                      borderRadius={"5px"}
                      // pt="5px"
                      _focus={{
                        bg: "red",
                      }}
                    >
                      <Button
                        // w={36}

                        borderRadius={"5px"}
                        pt={1}
                        textAlign={"center"}
                        fontSize="1.5rem"
                        textColor={"#333"}
                        onClick={() => setAdditionalGuests((prev) => (prev - 1 > 0 ? prev - 1 : 0))}
                      >
                        {"-"}
                      </Button>
                      <Text textAlign={"center"} w="10px" pt={"5px"}>
                        {additionalGuests}
                      </Text>
                      <Button
                        // w={36}
                        pt={"6px"}
                        borderRadius={"5px"}
                        textAlign={"center"}
                        fontSize="1.5rem"
                        textColor={"#333"}
                        onClick={() => setAdditionalGuests((prev) => (prev + 1 < 3 ? prev + 1 : 2))}
                      >
                        {"+"}
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </FormControl>
              <Button
                py={2}
                bg="rgba(255,255,255,0.8)"
                mt={10}
                w={"120px"}
                mx="auto"
                textColor={"black"}
                boxShadow="#333 0px 0px 2px"
                borderRadius={"10px"}
                _hover={{ backgroundColor: "rgba(255,255,255,1)" }}
                colorScheme="teal"
                isLoading={methods.formState.isSubmitting}
                type="submit"
              >
                Отправить
              </Button>

              <Button
                py={2}
                mt={4}
                w={"120px"}
                bg={"transparent"}
                mx="auto"
                textColor={"black"}
                // boxShadow="#333 0px 0px 2px"
                borderRadius={"10px"}
                _hover={{ backgroundColor: "rgba(255,255,255,1)" }}
                colorScheme="teal"
                type="button"
                onClick={() => setIsShown(false)}
              >
                Скрыть
              </Button>
            </form>
          </FormProvider>

          <Flex mt="40px" flexDirection={"column"} alignItems={"center"} gap={4}>
            <Flex
              display={"flex"}
              gap={3}
              alignItems={"center"}
              justifyContent={"space-between"}
              position={"relative"}
              bgColor={"#0185CA"}
              px={4}
              py={2}
              borderRadius={5}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                try {
                  if (!router.query.tme) throw new Error("Ссылка на телеграм группу отсутствует.");
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
              <NextImage alt="Telegram" src={images.telegram} width={20} height={20} />
              <Text textColor={"white"} fontWeight={"700"} textAlign={"center"} mt={1} fontSize={"14px"}>
                Телеграм канал
              </Text>
            </Flex>
            {/* <NextImage alt="Telegram QR code" src={"/telegram_qr.jpg"} width={180} height={180} /> */}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default RSVP;
