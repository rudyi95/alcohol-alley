import React, { BaseSyntheticEvent } from "react";

import classNames from "classnames";

import { IconType } from "src/types/enums";
import { getIcon } from "src/utils/helpers/customIcon";

import useStyles from "./style";

declare interface IconProps {
  className?: string;
  type: IconType;
  fill?: string;
  stroke?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  disabled?: boolean;
  id?: string;
}

const CustomIcon: React.FC<IconProps> = ({
  className,
  type,
  fill,
  stroke,
  onClick,
  disabled = false,
  id = "",
}) => {
  const classes = useStyles({ fill, stroke, clickable: !!onClick, disabled });
  const Icon = getIcon(type);

  return (
    <Icon
      id={id}
      className={classNames(classes.root, className)}
      onClick={(e) => {
        if (!!onClick) {
          if (!disabled) {
            onClick(e);
          }
        }
      }}
    />
  );
};

export default CustomIcon;
