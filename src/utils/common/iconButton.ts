import React from "react";

import { ButtonIconType } from "../../types/enums";

import {
  ShoppingCartOutlined,
  AddShoppingCart,
  ShoppingCart,
  Menu,
  Phone,
  Search,
  Instagram,
  PersonOutline,
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
  LockOutlined,
} from "@mui/icons-material";
import { ButtonProps, IconProps } from "@mui/material";

const buttonIcons = {
  [ButtonIconType.shoppingCartOutlined]: ShoppingCartOutlined,
  [ButtonIconType.addShoppingCart]: AddShoppingCart,
  [ButtonIconType.shoppingCart]: ShoppingCart,
  [ButtonIconType.menu]: Menu,
  [ButtonIconType.phone]: Phone,
  [ButtonIconType.search]: Search,
  [ButtonIconType.instagram]: Instagram,
  [ButtonIconType.personOutline]: PersonOutline,
  [ButtonIconType.chevronLeft]: ChevronLeft,
  [ButtonIconType.chevronRight]: ChevronRight,
  [ButtonIconType.firstPage]: FirstPage,
  [ButtonIconType.lastPage]: LastPage,
  [ButtonIconType.lockOutlined]: LockOutlined,
};

interface ButtonIconProps {
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export function getButtonIcon(
  type: ButtonIconType
): React.FC<ButtonIconProps & IconProps & ButtonProps> {
  return buttonIcons[type] as React.FC<ButtonIconProps & IconProps & ButtonProps>;
}
