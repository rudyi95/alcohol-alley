import React from "react";
import { Badge, Tooltip, TooltipProps } from "@mui/material";
import classnames from "classnames";

import { getButtonIcon } from "src/utils/common/iconButton";

import { useStyles } from "./style";

const IconButton: React.FC<IconButtonProps & Omit<TooltipProps, "children">> = ({
  placement = "bottom",
  className,
  title,
  onClick,
  type,
  disabled,
  useDefaultStyles = true,
  fontSize = "large",
  color,
  buttonType,
  badgeContent,
  badgeColor,
  href,
}) => {
  const classes = useStyles();
  const ButtonIcon = getButtonIcon(type);

  const icon = (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <ButtonIcon
        onClick={!disabled ? onClick : () => {}}
        className={classnames(
          className,
          { [classes.root]: useDefaultStyles },
          { [classes.disabled]: disabled }
        )}
        disabled={disabled}
        href={href}
      />
    </a>
  );

  switch (buttonType) {
    case "withTooltip":
      return (
        <Tooltip placement={placement} title={title}>
          {icon}
        </Tooltip>
      );
    case "withBadge":
      return (
        <Badge badgeContent={badgeContent} color={badgeColor}>
          {icon}
        </Badge>
      );
    default:
      return <div>{icon}</div>;
  }
};

export default IconButton;
