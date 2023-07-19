import React from "react";

import { Box, CircularProgress } from "@mui/material";
import classNames from "classnames";

import { useStyles } from "./style";

export const Loader: React.FC<ILoader> = ({ wrapped, wrapperStyle, circularClass }) => {
  const classes = useStyles();

  return wrapped ? (
    <Box className={classNames(classes.wrapper, wrapperStyle)}>
      <CircularProgress className={classNames(classes.circular, circularClass)} />
    </Box>
  ) : (
    <CircularProgress className={classNames(classes.circular, circularClass)} />
  );
};
