import React from "react";

import classNames from "classnames";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import useStyles from "./style";

interface IProps {
  className?: string;
  type: "error" | "info" | "success" | "warning" | undefined;
  text: string;
  open: boolean;
  onClose: () => void;
}

const SnackBarComp: React.FC<IProps> = ({ className, type, text, open, onClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      className={classNames(classes.root, className)}
    >
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity={type}>
        <p>{text}</p>
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBarComp;
