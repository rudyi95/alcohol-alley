import React from "react";

import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import classNames from "classnames";

import useStyles from "./style";

export const SnackBarComp: React.FC<ISnackbar> = ({ className, type, text, open }) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={open}
      autoHideDuration={4500}
      className={classNames(classes.root, className)}
    >
      <MuiAlert elevation={6} variant="filled" severity={type}>
        <p>{text}</p>
      </MuiAlert>
    </Snackbar>
  );
};
