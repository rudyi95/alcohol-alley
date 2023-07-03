import React, { BaseSyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Toolbar, AppBar, Box } from "@mui/material";

import CustomIcon from "src/components/customIcon";

import { IconType } from "src/types/enums";

import { useStyles } from "./style";

export const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (e: BaseSyntheticEvent) => {
    navigate(e.currentTarget.id);
  };

  return (
    <Box>
      <AppBar position="static" color="inherit" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <CustomIcon
            id="/"
            type={IconType.logo}
            onClick={handleNavigate}
            className={classes.logo}
          />
          <Box className={classes.iconsGroup}>
            <CustomIcon type={IconType.like} />
            <CustomIcon type={IconType.basket} />
            <CustomIcon id="admin" type={IconType.user} onClick={handleNavigate} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
