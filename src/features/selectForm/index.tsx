import React from "react";

import classNames from "classnames";

import { FormControl, InputLabel, MenuItem, SelectProps } from "@mui/material";
import { Select } from "src/shared/ui";

import { useStyles } from "./style";

interface IProps {
  firstItem?: SelectItem;
  data: SelectData[];
  label: string;
}

export const SelectForm: React.FC<IProps & SelectProps<string>> = ({
  data,
  label,
  fullWidth = true,
  firstItem,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth={fullWidth} className={classNames(classes.root, className)}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} {...props}>
        {!!firstItem && <MenuItem value={firstItem.value}>{firstItem.label}</MenuItem>}
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
