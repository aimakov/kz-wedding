import React, { ReactNode, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { brandColors } from "@/styles/theme";
import { Marck } from "@/utils/fonts";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDirection={"column"} maxW={"480px"} mx={"auto"} bgColor={brandColors.white} className={Marck.className} color={brandColors.black}>
      {children}
    </Flex>
  );
};

export default Layout;
