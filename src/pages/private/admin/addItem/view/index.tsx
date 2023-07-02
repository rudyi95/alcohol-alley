/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";

import { Box, Button, Modal, Typography } from "@mui/material";
import { FormikValues } from "formik";

import { CustomInput, CustomSelect } from "src/components/common/inputs";

import { DRINK_CATEGORY, LOGIC_TYPE } from "src/utils/constants/constants";

import { useStyles } from "./style";
import { DropZone } from "src/containers/dropZone";
import { UploadButton } from "src/components/common/buttons/UploadButton";
import { ActionButton } from "src/components/common/buttons";
import { ImageCropper } from "src/components/ImageCropper";
import { useAppDispatch } from "src/utils/hooks/redux";
import { upload } from "src/redux/services/fileService";

const AddItemPageView: React.FC<FormikValues> = ({ values, handleChange }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [fileLoad, setFileLoad] = useState<any>();
  const [cropper, setCropper] = useState<Cropper>();
  const [image, setImage] = useState<string | undefined>(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmitCrop = async () => {
    setDisabled(true);
    if (cropper) {
      const res: Response = await fetch(cropper.getCroppedCanvas().toDataURL(fileLoad?.type));
      const blob: Blob = await res.blob();
      if (fileLoad) {
        const file = new File([blob], fileLoad.name, { type: fileLoad.type }) as any;
        file.preview = fileLoad.preview;
        file.path = fileLoad.path;

        const formData = new FormData();
        formData.append("image", file);

        dispatch(
          upload({
            data: { name: "image", formData },
            func: (data: any) => {
              //   const img = {
              //     path: data.originalName,
              //     preview: getImageSrc(data),
              //     name: data.name,
              //     type: fileLoad.type,
              //   };
              //   props.setFieldValue("uploadData.images", [
              //     ...props.values.uploadData.images,
              //     { id: data.id },
              //   ]);
              //   props.setFieldValue("image.preview", [img]);
              //   props.setFieldValue("image.list", [...props.values.image.list, img]);
              //   setDisabled(false);
              //   setOpenModal(false);
              //   dispatch(fileSlice.actions.resetUpload());
            },
          })
        );
      }
    }
  };

  const handleCloseModal = () => {
    setCropper(undefined);
    setImage(undefined);
    setOpenModal(false);
  };

  const handleImage = useCallback(
    (name: string, file: [any], index?: number) => {
      const reader = new FileReader();

      setFileLoad(file[0]);

      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file[0]);

      setOpenModal(true);
    },
    [values]
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.items}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "-webkit-fill-available",
              rowGap: "20px",
              maxWidth: "400px",
            }}
          >
            <CustomInput name="name" label="Name" onChange={handleChange} value={values.name} />
            <CustomInput
              name="description"
              label="Description"
              onChange={handleChange}
              value={values.description}
            />
          </Box>
          <Box sx={{ maxWidth: "320px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
            <CustomSelect
              name="category"
              label="Category"
              value={values.category}
              onChange={handleChange}
              data={DRINK_CATEGORY}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                rowGap: "20px",
              }}
            >
              <CustomInput
                name="price"
                type="number"
                label="Price"
                onChange={handleChange}
                value={values.price}
                className={classes.itemOption}
              />
              <CustomInput
                name="count"
                type="number"
                label="Count"
                onChange={handleChange}
                value={values.count}
                className={classes.itemOption}
              />
              <CustomInput
                name="volume"
                type="number"
                label="Volume"
                onChange={handleChange}
                value={values.volume}
                className={classes.itemOption}
              />
              <CustomSelect
                name="popular"
                label="Popular"
                value={values.popular}
                onChange={handleChange}
                data={LOGIC_TYPE}
                className={classes.itemOption}
                fullWidth={false}
              />
            </Box>
          </Box>
        </Box>
        <img src="/images/63e7e5098b8d9e86176e09de8db8125c" />
        <Box sx={{ width: "400px", height: "500px" }}>
          <DropZone
            name="image"
            accept="image"
            title="Select an image or drag and drop here"
            subtitle="PNG, JPG, file size no more than 10MB"
            btnText="Select an image"
            onChange={handleImage}
            files={values.imagePreview}
            onlyShow={!!values.imagePreview.length}
          />
          <Modal open={openModal} onClose={handleCloseModal} className={classes.cropModal}>
            <Box className={classes.cropModalContainer}>
              <Typography>Crop your image</Typography>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <ImageCropper image={image} setCropper={setCropper} />
              </Box>

              <Box className={classes.cropButtonContainer}>
                <ActionButton
                  text="Cancel"
                  variant="text"
                  size="SM"
                  onClick={handleCloseModal}
                  disabled={disabled}
                />
                <Box className={classes.cropButtonGroup}>
                  <UploadButton
                    text="Replace image"
                    callBack={handleChange}
                    variant="text"
                    disabled={disabled}
                  />
                  <ActionButton
                    text="Crop"
                    variant="contained"
                    size="SM"
                    onClick={handleSubmitCrop}
                    disabled={disabled}
                  />
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
      <Button variant="outlined" color="primary" type="submit" sx={{ margin: "20px" }}>
        Add
      </Button>
    </Box>
  );
};

export default AddItemPageView;
