import React from "react";

import { Box, TextField, TextFieldProps } from "@mui/material";
import classnames from "classnames";

import { useStyles } from "./style";

interface IProps {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  maxLength?: number;
  maxWidth?: number;
}

export const CustomInput: React.FC<TextFieldProps & IProps> = ({
  className,
  startAdornment,
  endAdornment,
  maxLength,
  maxWidth,
  ...props
}) => {
  const classes = useStyles({ maxWidth });

  return (
    <Box className={classnames(classes.root, className)}>
      <TextField
        className={classes.textField}
        InputProps={{
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        }}
        inputProps={{
          maxLength: maxLength,
        }}
        {...props}
      />
    </Box>
  );
};
