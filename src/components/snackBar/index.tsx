import React from "react";

import classNames from "classnames";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { messageSlice } from "src/redux/newReducers/message";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

import useStyles from "./style";

interface IProps {
  className?: string;
}

const SnackBarComp: React.FC<IProps> = ({ className }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const { type, text, open } = useAppSelector((state) => state.message);

  const handleClose = () => {
    dispatch(messageSlice.actions.resetValue());
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      className={classNames(classes.root, className)}
    >
      <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity={type}>
        <p>{text}</p>
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBarComp;
