import React from "react";
import { Box, Button, SelectChangeEvent } from "@mui/material";
import { useFormik } from "formik";

import { ActionModal } from "src/components/modal";

import { CustomInput } from "src/components/common/inputs";
import { CustomSelect } from "src/components/CustomSelect";

// import { LOGIC_TYPE } from "src/utils/constants/constants";

import { useStyles } from "./style";
import { useAppDispatch } from "src/utils/hooks/redux";
import { editItem, getItemsAll } from "src/redux/services/itemsService";
import { itemsCategory } from "src/utils/constants/select";

interface IProps {
  open: boolean;
  handleClose: () => void;
  item: Item;
}

export const EditItemModal: React.FC<IProps> = ({ open, handleClose, item }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      _id: item._id,
      name: item.name,
      category: item.category,
      price: item.price,
      volume: item.volume,
      description: item.description,
      popular: item.popular,
      count: item.count,
      image: item.image,
    },
    onSubmit: (value) => {
      dispatch(
        editItem({
          data: { ...value },
          func: () => {
            dispatch(getItemsAll({}));
            handleClose();
          },
        })
      );
    },
  });

  const handleSelect = (e: SelectChangeEvent<string>) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <ActionModal className={classes.root} open={open} onClose={handleClose}>
      <Box className={classes.content}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <div className={classes.headText}>Edit item</div>
          <div className={classes.items}>
            <CustomInput
              name="name"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <CustomSelect
              name="category"
              label="Category"
              value={formik.values.category}
              onChange={handleSelect}
              items={itemsCategory}
              variant="outlined"
            />
            <CustomInput
              name="price"
              type="number"
              label="Price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <CustomInput
              name="count"
              type="number"
              label="Count"
              onChange={formik.handleChange}
              value={formik.values.count}
            />
            <CustomInput
              name="volume"
              type="number"
              label="Volume"
              onChange={formik.handleChange}
              value={formik.values.volume}
            />
            <CustomInput
              name="description"
              label="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {/* <CustomSelect
              name="popular"
              label="Popular"
              value={formik.values.popular}
              onChange={handleSelect}
              data={LOGIC_TYPE}
            /> */}
            <CustomInput
              name="image"
              label="Image"
              onChange={formik.handleChange}
              value={formik.values.image}
            />
          </div>
          <Button variant="outlined" color="primary" onClick={() => formik.handleSubmit()}>
            Change
          </Button>
        </form>
      </Box>
    </ActionModal>
  );
};
