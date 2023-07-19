import React from "react";

import { Box } from "@mui/material";

import { Icon } from "src/shared/ui";

import MainImage from "src/assets/landing/mainImage.png";

import { IconType } from "src/types/enums";

import { useStyles } from "./style";

export const MainBlock: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.leftMain}>
        <Icon type={IconType.logo} fill="#FFF" className={classes.logoIcon} />
      </Box>
      <Box className={classes.rightMain}>
        <img src={MainImage} alt="main landing" />
      </Box>
    </Box>
  );
};
