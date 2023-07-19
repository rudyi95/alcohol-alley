import React, { useEffect } from "react";

import { SnackBarComp } from "src/shared/ui";

import { messageSlice } from "src/redux/newReducers/message";

import { useAppDispatch, useAppSelector } from "src/utils/hooks/redux";

export const Snackbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.message);

  useEffect(() => {
    if (data.open) {
      setTimeout(() => {
        dispatch(messageSlice.actions.resetValue());
      }, 5000);
    }
  }, [data.open, dispatch]);

  return <SnackBarComp {...data} />;
};
