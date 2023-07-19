import React, { useEffect, useState } from "react";

import { Box, SelectChangeEvent } from "@mui/material";

import { SelectForm } from "src/features";
import { Input } from "src/shared/ui";

import { useAppDispatch } from "src/utils/hooks/redux";
import { DRINK_CATEGORY } from "src/utils/constants/constants";

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
      <Input label="Search" size="MD" />
      <SelectForm
        label="Category"
        name="category"
        data={DRINK_CATEGORY}
        firstItem={{ value: 0, label: "All" }}
        onChange={handleSelect}
        variant="outlined"
      />
    </Box>
  );
};
