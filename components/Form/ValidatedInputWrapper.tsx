import React from "react";
import { FormControl, FormHelperText, FormLabel, FormErrorMessage, Fade, Text } from "@chakra-ui/react";
import { InputPropTypes } from "@/utils/types";

const ValidatedInputWrapper: React.FC<InputPropTypes> = ({ id, label, children, helperText, isRequired = false, blockMb = 0, errors, ...rest }) => {
  return (
    <FormControl isInvalid={Boolean(errors[id])} mb={blockMb} w="100%" display="flex" flexDirection="column" {...rest}>
      <FormLabel fontWeight={400} htmlFor={id} mb={helperText ? 0 : 2}>
        {label}
      </FormLabel>
      {helperText && (
        <FormHelperText mt={0} mb={2} textColor={"#333"}>
          {helperText}
          {isRequired && (
            <Text as={"span"} textColor="red">
              {" *"}
            </Text>
          )}
        </FormHelperText>
      )}
      {children}
      <FormErrorMessage color="red" fontSize="14px">
        <Fade in>{errors[id]?.message}</Fade>
      </FormErrorMessage>
    </FormControl>
  );
};

export default ValidatedInputWrapper;
