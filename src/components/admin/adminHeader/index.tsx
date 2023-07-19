import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, SelectChangeEvent } from "@mui/material";

import { Button } from "src/shared/ui";
import { SelectForm } from "src/features";

import { DRINK_CATEGORY } from "src/utils/constants/constants";
import { useAppDispatch } from "src/utils/hooks/redux";

import { getItemsAll } from "src/redux/services/itemsService";
import { itemsSlice } from "src/redux/newReducers/items";

import { useStyles } from "./style";

const ProductsHeader: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState("");

  const handleModal = () => {
    navigate("/admin/add-item");
  };

  const handleSelect = (e: SelectChangeEvent<string>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (!!filter) {
      dispatch(getItemsAll({ category: filter || undefined }));
    }

    return () => {
      dispatch(itemsSlice.actions.resetState());
    };
  }, [filter, dispatch]);

  return (
    <Box className={classes.root}>
      <Box className={classes.actions}>
        <Button onClick={handleModal} text="Add item:" size="MD" noWrap />
        <SelectForm
          data={DRINK_CATEGORY}
          label="Category"
          name="category"
          value={filter}
          firstItem={{ value: 0, label: "All" }}
          onChange={handleSelect}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default ProductsHeader;
