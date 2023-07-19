declare interface IIcon {
  className?: string;
  type: import("../types/enums").IconType;
  fill?: string;
  stroke?: string;
  onClick?: (e: import('react').BaseSyntheticEvent) => void;
  disabled?: boolean;
  id?: string;
}
