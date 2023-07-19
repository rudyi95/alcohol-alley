import React from "react";

import { TextField, TextFieldProps } from "@mui/material";

import classNames from "classnames";

import { useStyles } from "./style";

export const Input: React.FC<Omit<TextFieldProps, "size"> & IInput> = ({
  className,
  size,
  ...props
}) => {
  const classes = useStyles({ size: size || "SM" });

  return <TextField className={classNames(classes.root, className)} {...props} />;
};
