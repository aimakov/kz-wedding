import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Flex,
  Text,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import { FormProvider, Controller, useForm, SubmitHandler } from "react-hook-form";
import { PiHeartLight, PiHeartBreakFill, PiHeartFill } from "react-icons/pi";
import { useRouter } from "next/router";

import { supabase } from "@/services/supabase";
import { brandColors } from "@/styles/theme";
import { Poiret } from "@/utils/fonts";
import TextInput from "./Form/TextInput";
import TelegramInvite from "./TelegramInvite";

type Inputs = {
  name: string;
  countryCode: string;
  mobile: string;
  additionalGuests: number;
  telegramId: string;
  weddingId: string;
  coming: boolean;
};

function GuestModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stage, setStage] = useState(0);
  const [coming, setComing] = useState<boolean | null>(null);
  const [countryCode, setCountryCode] = useState("+7");
  const [additionalGuests, setAdditionalGuests] = useState(0);

  const router = useRouter();

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

  useEffect(() => {
    console.log(methods.formState);
  }, [methods.formState]);

  const toast = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (coming === null) throw new Error("Пожалуйста отметьте сможете ли прийти.");

      const processedData = {
        name: data.name,
        mobile: data.countryCode + data.mobile,
        telegramId: data.telegramId,
        additionalGuests: additionalGuests,
        isComing: coming,
      };
      const { error } = await supabase.from("guests").insert(processedData);
      if (error) throw error;

      toast({
        title: "Ваш ответ записан!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      if (coming && router.query.tme) setStage(1);
      else handleClose();
    } catch (error: any) {
      toast({
        title: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleClose = () => {
    setComing(null);
    methods.reset();
    onClose();
    setStage(0);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        color={brandColors.black}
        py={4}
        className={Poiret.className}
        background={`linear-gradient(to right, ${brandColors.lightPink} 0%, ${brandColors.deepPink}  100%)`}
        _pressed={{ background: `linear-gradient(to right, ${brandColors.lightPink} 0%, ${brandColors.deepPink}  100%)` }}
        _active={{ background: `linear-gradient(to right, ${brandColors.lightPink} 0%, ${brandColors.deepPink}  100%)` }}
        _focus={{ background: `linear-gradient(to right, ${brandColors.lightPink} 0%, ${brandColors.deepPink}  100%)` }}
        _checked={{ background: `linear-gradient(to right, ${brandColors.lightPink} 0%, ${brandColors.deepPink}  100%)` }}
        width={40}
        rounded={"full"}
        mx={"auto"}
        my={10}
        border={"1px solid"}
        borderColor={"red.200"}
      >
        Ваше присутствие
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background={brandColors.lightPink} color={brandColors.black} mx={2} className={Poiret.className}>
          <ModalBody justifyContent={"center"} alignItems={"center"} py={10} overflow={"hidden"} position={"relative"}>
            <Flex flexDirection={"column"} position={"absolute"} style={{ transform: `translateX(${200 - 200 * stage}%)`, transition: "all 500ms ease-in" }}>
              <Text fontSize={"lg"} fontWeight={"semibold"} px={14} textAlign={"center"}>
                Присоединяйтесь к телеграм каналу для удобства общения
              </Text>
              <TelegramInvite />
            </Flex>
            <FormProvider {...methods}>
              <form
                style={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                  maxWidth: "400px",
                  margin: "0 auto",
                  transform: `translateX(-${stage * 200}%)`,
                  transition: "all 500ms ease-out",
                }}
                onSubmit={methods.handleSubmit(onSubmit)}
              >
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
                          }}
                        />
                      )}
                    </Flex>

                    <Flex flexDirection={"column"} alignItems={"center"} gap={2}>
                      <Text>Не смогу</Text>
                      {coming === false ? (
                        <PiHeartBreakFill fontSize={"36px"} cursor={"pointer"} />
                      ) : (
                        <PiHeartLight
                          fontSize={"36px"}
                          cursor={"pointer"}
                          onClick={() => {
                            setComing(false);
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

                  <Flex justifyContent={"space-between"} w="100%" gap={4} alignItems={"flex-end"}>
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

                    <Flex alignItems={"center"} justifyContent={"center"} height={"40px"}>
                      {/* <Text mb={"5px"} lineHeight={"22px"} fontSize="14px">
                        Дополнительные гости (макс. 2)
                      </Text> */}
                      <Checkbox
                        sx={{
                          "& .chakra-checkbox__control": {
                            // bg: "blue.400",
                            border: `1px solid ${brandColors.deepPink}`,
                            _checked: {
                              bg: brandColors.deepPink, // Background color when checked
                              color: "white",
                            },
                          },
                        }}
                        width={"80px"}
                      >
                        Плюс 1
                      </Checkbox>
                      {/* <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        h={"40px"}
                        bg="rgba(255,255,255,0.8)"
                        boxShadow="#333 0px 0px 2px"
                        textColor="#333"
                        borderRadius={"5px"}
                        _focus={{
                          bg: "red",
                        }}
                      >
                        <Button
                          borderRadius={"5px"}
                          textAlign={"center"}
                          fontSize="1.5rem"
                          textColor={"#333"}
                          onClick={() => setAdditionalGuests((prev) => (prev - 1 > 0 ? prev - 1 : 0))}
                        >
                          {"-"}
                        </Button>
                        <Text textAlign={"center"}>{additionalGuests}</Text>
                        <Button
                          borderRadius={"5px"}
                          textAlign={"center"}
                          fontSize="1.5rem"
                          textColor={"#333"}
                          onClick={() => setAdditionalGuests((prev) => (prev + 1 < 3 ? prev + 1 : 2))}
                        >
                          {"+"}
                        </Button>
                      </Flex> */}
                    </Flex>
                  </Flex>
                </FormControl>{" "}
              </form>
            </FormProvider>
          </ModalBody>

          <ModalFooter>
            {stage === 0 && (
              <Button
                style={{ backgroundColor: brandColors.deepPink, color: brandColors.black }}
                mr={3}
                onClick={methods.handleSubmit(onSubmit)}
                isLoading={methods.formState.isSubmitting}
              >
                Отправить
              </Button>
            )}

            <Button variant="ghost" color={brandColors.black} onClick={handleClose} isLoading={methods.formState.isSubmitting}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GuestModal;
