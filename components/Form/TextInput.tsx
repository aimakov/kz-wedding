import React from "react";
import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import ValidatedInputWrapper from "./ValidatedInputWrapper";
import { inputStyles } from "@/styles/theme";

import { FormInputs, InputPropTypes } from "@/utils/types";

const TextInput: React.FC<InputPropTypes> = ({
  id,
  width,
  label,
  children,
  validation = {},
  helperText,
  type = "text",
  isRequired = false,
  blockMb = 0,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <ValidatedInputWrapper id={id} width={width} label={label} helperText={helperText} isRequired={isRequired} blockMb={blockMb} errors={errors}>
      <Input id={id} type={type} {...inputStyles()} {...register(id, { ...validation })} {...rest} />
      {children}
    </ValidatedInputWrapper>
  );
};

export default TextInput;
