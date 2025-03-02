import React, { useState, useEffect } from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ElMessiri } from "@/utils/fonts";

type Props = {};

const Hosts = (props: Props) => {
  return (
    <Flex flexDirection={"column"} gap={6} alignItems={"center"} w="100%" maxW={"500px"} mx={"auto"} py={10}>
      <Text fontSize={24} color={"black"}>
        Той иелери
      </Text>
      <Grid w={"80%"} mx="auto" templateRows="repeat(2, 30px)" fontSize={22} templateColumns="repeat(2, 1fr)" textColor="#333">
        <GridItem textAlign={"center"}>Аймакова</GridItem>
        <GridItem textAlign={"center"}>Аймаков</GridItem>
        <GridItem textAlign={"center"}>Бахтыгуль</GridItem>
        <GridItem textAlign={"center"}>Нурканат</GridItem>
      </Grid>
    </Flex>
  );
};

export default Hosts;
