import React from "react";
import { Modal, ModalProps } from "@mui/material";

export const ActionModal: React.FC<ModalProps> = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>;
};
