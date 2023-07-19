import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Header, Footer } from "src/widgets";
import { Snackbar } from "src/entities";

import { useStyles } from "./style";

export const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Snackbar />
      <Header />

      <Box className={classes.content}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
