import React from "react";

import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material";

import { useStyles } from "./style";

export const TextArea: React.FC<TextareaAutosizeProps & ITextArea> = ({
  resize = false,
  ...props
}) => {
  const classes = useStyles({ resize });

  return <TextareaAutosize className={classes.root} {...props} />;
};
