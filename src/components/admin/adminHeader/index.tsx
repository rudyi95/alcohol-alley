import React, { useEffect, useState } from "react";

import { CustomSelect } from "src/components/CustomSelect";
import { ActionButton } from "src/components/common/buttons";

import { AddItemModal } from "src/containers/modals";

import { getItemsAll } from "src/redux/services/itemsService";
import { itemsSlice } from "src/redux/newReducers/items";

import { useAppDispatch } from "src/utils/hooks/redux";
import { itemsCategory } from "src/utils/constants/select";

import { useStyles } from "./style";
import { Box, SelectChangeEvent } from "@mui/material";

const ProductsHeader: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("");

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSelect = (e: SelectChangeEvent<string>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(getItemsAll({ category: filter || undefined }));

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
      {openModal && <AddItemModal open={openModal} handleClose={handleModal} />}
    </Box>
  );
};

export default ProductsHeader;
