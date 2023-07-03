import React, { useEffect, useState } from "react";

import { CustomSelect } from "src/components/CustomSelect";
import { ActionButton } from "src/components/common/buttons";

import { getItemsAll } from "src/redux/services/itemsService";
import { itemsSlice } from "src/redux/newReducers/items";

import { useAppDispatch } from "src/utils/hooks/redux";
import { itemsCategory } from "src/utils/constants/select";

import { useStyles } from "./style";
import { Box, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        <ActionButton onClick={handleModal} text={"Add item:"} />
        <CustomSelect
          items={itemsCategory}
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
