import React, { useEffect, useState } from "react";

import { Box, SelectChangeEvent } from "@mui/material";

import { CustomInput } from "src/components/CustomInput";
import { CustomSelect } from "src/components/CustomSelect";

import { itemsCategory } from "src/utils/constants/select";
import { useAppDispatch } from "src/utils/hooks/redux";

import { getItemsAll } from "src/redux/services/itemsService";

import { useStyles } from "./style";

export const FilterContainer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState("");

  const handleSelect = ({ target: { value } }: SelectChangeEvent<string>) => {
    setFilter(value);
  };

  useEffect(() => {
    dispatch(getItemsAll({ category: filter || undefined }));
  }, [filter, dispatch]);

  return (
    <Box className={classes.root}>
      <CustomInput label="Search" maxWidth={350} />
      <CustomSelect
        label="Category"
        name="category"
        items={itemsCategory}
        firstItem={{ value: 0, label: "All" }}
        onChange={handleSelect}
        variant="outlined"
      />
    </Box>
  );
};
