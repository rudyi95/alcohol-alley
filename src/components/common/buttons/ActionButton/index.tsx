import React from "react";
import { ButtonProps } from "@mui/material";
import classnames from "classnames";

import { useStyles } from "./style";

interface IProps {
  className?: string;
  onClick?: Function;
  disabled?: boolean;
  text: string;
  icon?: JSX.Element;
  iconRight?: boolean;
  fixed?: boolean;
  useDefaultStyles?: boolean;
}

const ActionButton: React.FC<IProps & ButtonProps> = ({
  className,
  onClick,
  disabled,
  text,
  icon,
  iconRight,
  fixed,
  useDefaultStyles = true,
  color,
  variant,
  href,
}) => {
  const classes = useStyles();

  return (
    <>
      <button
        className={classnames(
          className,
          { [classes.root]: useDefaultStyles },
          { [classes.fixed]: fixed },
          { [classes.withIcon]: !!icon },
          { [classes.iconRight]: iconRight }
        )}
        onClick={onClick}
        disabled={disabled}
        color={color}
        // variant={variant}
        // href={href}
      >
        {icon}
        {text}
      </button>
    </>
  );
};

export default ActionButton;
