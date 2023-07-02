import React, { BaseSyntheticEvent } from "react";
import { TextField } from "@mui/material";

interface IProps {
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange: (e: BaseSyntheticEvent) => void;
  value?: string | number | boolean;
  label?: string
  className?: string
}

export const CustomInput: React.FC<IProps> = ({ id, name, type = "text", ...props }) => {
  return <TextField id={id || name} {...props} />;
};
