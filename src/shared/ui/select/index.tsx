import React from "react";

import { Select as SelectMui, SelectProps } from "@mui/material";

export const Select: React.FC<SelectProps<string>> = ({ children, ...props }) => {
  return <SelectMui {...props}>{children}</SelectMui>;
};
