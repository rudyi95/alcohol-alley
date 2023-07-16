import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Header } from "src/containers/header";
import { Footer } from "src/containers/footer";
import { SnackbarComponent } from "../logicComponents";

import { useStyles } from "./style";

export const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SnackbarComponent />
      <Header />

      <Box className={classes.content}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
