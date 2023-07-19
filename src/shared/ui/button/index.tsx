import React from "react";

import { ButtonProps } from "@mui/material";
import classnames from "classnames";

import { useStyles } from "./style";

export const Button: React.FC<ButtonProps & IButton> = ({
  className,
  text,
  icon,
  size = "SM",
  noWrap,
  ...props
}) => {
  const classes = useStyles({ size, noWrap });

  return (
    <>
      <button className={classnames(classes.root, className)} {...props}>
        {icon}
        {text}
      </button>
    </>
  );
};
