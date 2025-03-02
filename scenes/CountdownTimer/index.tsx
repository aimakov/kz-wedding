import React, { useState, useEffect } from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ElMessiri } from "@/utils/fonts";

type Props = {};

const CountdownTimer = (props: Props) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const startTimer = () => {
    const countdownDate = new Date("May 31, 2025 17:00:00 GMT+06:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days.toString());
        setTimerHours(hours.toString());
        setTimerMinutes(minutes.toString());
        setTimerSeconds(seconds.toString());
      }
    }, 1000);

    return interval;
  };

  useEffect(() => {
    const interval = startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex flexDirection={"column"} gap={6} alignItems={"center"} w="100%" maxW={"500px"} mx={"auto"} py={10}>
      <Text fontSize={24} color={"black"}>
        Осталось до свадьбы:
      </Text>
      <Grid w={"80%"} mx="auto" templateRows="repeat(2, 30px)" fontSize={26} templateColumns="repeat(4, 1fr)" textColor="#333">
        <GridItem textAlign={"center"}>{timerDays.toString().length === 1 ? "0" + timerDays : timerDays}</GridItem>
        <GridItem textAlign={"center"}>{timerHours.toString().length === 1 ? "0" + timerHours : timerHours}</GridItem>
        <GridItem textAlign={"center"}>{timerMinutes.toString().length === 1 ? "0" + timerMinutes : timerMinutes}</GridItem>
        <GridItem textAlign={"center"}>{timerSeconds.toString().length === 1 ? "0" + timerSeconds : timerSeconds}</GridItem>

        <GridItem fontSize={20} textAlign={"center"}>
          дней
        </GridItem>
        <GridItem fontSize={20} textAlign={"center"}>
          часов
        </GridItem>
        <GridItem fontSize={20} textAlign={"center"}>
          минут
        </GridItem>
        <GridItem fontSize={20} textAlign={"center"}>
          секунд
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default CountdownTimer;
