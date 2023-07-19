import React, { BaseSyntheticEvent } from "react";

import { IconType } from "src/types/enums";
import { icons } from "../../const/icon";

interface IconProps {
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  id: string;
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>;
}
