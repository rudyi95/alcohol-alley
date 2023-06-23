import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";

import { ActionModal } from "src/components/modal";

import { getItemsAll, postItem } from "src/redux/services/itemsService";

import { CustomInput, CustomSelect } from "src/components/common/inputs";

import { DRINK_CATEGORY, LOGIC_TYPE } from "src/utils/constants/constants";
import { useAppDispatch } from "src/utils/hooks/redux";

import { useStyles } from "./style";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const imageToBinary = (file: File): Promise<Uint8Array> => {
  return new Promise<Uint8Array>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const buffer = reader.result as ArrayBuffer;
      const binary = new Uint8Array(buffer);
      resolve(binary);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const AddItemModal: React.FC<IProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [binary, setBinary] = useState<Uint8Array | undefined>(undefined);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      imageToBinary(file).then((binary) => {
        setBinary(binary);
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "Nazar",
      category: "",
      price: 1,
      volume: 1,
      description: "ыфв",
      popular: false,
      count: 2,
      image: "",
    },
    onSubmit: (value) => {
      dispatch(
        postItem({
          data: { ...value, image: JSON.stringify(binary) },
          func: () => {
            dispatch(getItemsAll({}));
          },
        })
      );
    },
  });

  return (
    <ActionModal className={classes.root} open={open} onClose={handleClose}>
      <Box className={classes.content}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <div className={classes.headText}>New item</div>
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
              onChange={formik.handleChange}
              data={DRINK_CATEGORY}
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
            <CustomSelect
              name="popular"
              label="Popular"
              value={formik.values.popular}
              onChange={formik.handleChange}
              data={LOGIC_TYPE}
            />
            <input type="file" onChange={handleImageUpload} />
            {binary && <p>Binary data: {binary}</p>}
          </div>
          <Button variant="outlined" color="primary" type="submit">
            Add
          </Button>
        </form>
      </Box>
    </ActionModal>
  );
};
