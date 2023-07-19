import React from "react";

import classNames from "classnames";

import { getIcon } from "../../lib/helpers/icon";

import useStyles from "./style";

export const Icon: React.FC<IIcon> = ({
  className,
  type,
  fill,
  stroke,
  onClick,
  disabled = false,
  id = "",
}) => {
  const classes = useStyles({ fill, stroke, clickable: !!onClick, disabled });
  const IconComponent = getIcon(type);

  return (
    <IconComponent
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
