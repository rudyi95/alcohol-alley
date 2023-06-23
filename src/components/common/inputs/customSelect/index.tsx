import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from "@mui/material";

interface IProps {
  data: SelectData[];
  label: string;
}

export const CustomSelect: React.FC<IProps & SelectProps> = ({ data, label, ...props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label} {...props}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
