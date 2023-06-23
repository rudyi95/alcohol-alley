import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import classNames from "classnames";

import { useStyles } from "./style";

interface IProps {
  firstItem?: SelectItem;
  items: SelectItem[];
  value?: string;
  label?: string;
  name?: string;
  id?: string;
  className?: string;
  selectClass?: string;
}

export const CustomSelect: React.FC<IProps & SelectProps<string>> = ({
  firstItem,
  items,
  value,
  label,
  name,
  id,
  onChange,
  className,
  selectClass,
  variant,
  defaultValue,
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="standard" className={classNames(classes.root, className)}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        id={id}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        labelId="demo-simple-select-standard-label"
        label={label}
        variant={variant}
        className={classNames(classes.select, selectClass)}
      >
        {!!firstItem && <MenuItem value={firstItem.value}>{firstItem.label}</MenuItem>}
        {items.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
