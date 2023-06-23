import React, { BaseSyntheticEvent } from "react";

import { ReactComponent as LogoIcon } from "src/assets/logoIcon.svg";

import { ReactComponent as BasketIcon } from "src/assets/common/basketIcon.svg";
import { ReactComponent as LikeIcon } from "src/assets/common/likeIcon.svg";
import { ReactComponent as UserIcon } from "src/assets/common/userIcon.svg";

import { IconType } from "src/types/enums";

const icons = {
  [IconType.logo]: LogoIcon,
  [IconType.basket]: BasketIcon,
  [IconType.like]: LikeIcon,
  [IconType.user]: UserIcon,
};

interface IconProps {
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  id: string
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>;
}
