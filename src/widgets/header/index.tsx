import React, { BaseSyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Toolbar, AppBar, Box } from "@mui/material";

import { Icon } from "src/shared/ui";

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
          <Icon id="/" type={IconType.logo} onClick={handleNavigate} className={classes.logo} />
          <Box className={classes.iconsGroup}>
            <Icon type={IconType.like} />
            <Icon type={IconType.basket} />
            <Icon id="admin" type={IconType.user} onClick={handleNavigate} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
