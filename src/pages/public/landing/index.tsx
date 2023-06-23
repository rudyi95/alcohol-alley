/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { Box } from "@mui/material";

import { MainBlock, CategoriesBlock } from "./parts";

import { useStyles } from "./style";

const Landing: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MainBlock />
      <CategoriesBlock />
    </Box>
  );
};

export default Landing;
