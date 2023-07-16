import React from "react";

import Snackbar from "src/components/snackBar";

import { messageSlice } from "src/redux/newReducers/message";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

export const SnackbarComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.message);

  const handleClose = () => {
    dispatch(messageSlice.actions.resetValue());
  };

  return <Snackbar onClose={handleClose} {...data} />;
};
