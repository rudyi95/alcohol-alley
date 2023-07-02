/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Box, LinearProgress, Typography } from "@mui/material";
import classNames from "classnames";
import { split } from "lodash";

import { ActionButton } from "src/components/common/buttons";
import CustomIcon from "src/components/customIcon";

import { IconType } from "src/types/enums";

import { useStyles } from "./style";

interface IProps {
  accept: "image" | "video" | "other";
  name: string;
  title: string;
  subtitle: string;
  btnText: string;
  maxFiles?: number;
  customLink?: string;
  onChange: (name: string, file: any) => void;
  onRemove?: () => void;
  files: any[];
  onlyShow?: boolean;
  inputEl?: React.RefObject<HTMLInputElement>;
  buttonEl?: React.RefObject<HTMLButtonElement>;
  isDocument?: boolean;
  maxSize?: number;
  loader?: boolean;
  imgThumbClass?: string;
}

export const DropZone: React.FC<IProps> = ({
  accept,
  name,
  title,
  subtitle,
  btnText,
  onChange,
  customLink,
  onRemove,
  files,
  onlyShow = false,
  inputEl,
  buttonEl,
  isDocument,
  maxSize,
  loader,
  imgThumbClass,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const input: any = useRef(null);
  const acceptData = {
    image: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
    },
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: maxSize,
    accept: acceptData.image,
    onDrop: (acceptedFiles: any[]) => {
      if (!!acceptedFiles.length) {
        setLoading(true);
        onChange(
          name,
          acceptedFiles.map((file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
  });

  const thumbs = files.map((file: any) => {
    switch (split(file.type, "/")[0]) {
      case "image":
        return (
          <div className={classes.thumb} key={file.name}>
            <img
              src={file.preview}
              className={classNames(classes.img, imgThumbClass)}
              alt="test"
              // Revoke data uri after image is loaded
              // onLoad={() => {
              //   URL.revokeObjectURL(file.preview)
              // }}
            />
          </div>
        );
      default:
        return null;
    }
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    if (customLink) {
      onChange("video", [{ name: "", preview: customLink, type: "video/*" }]);
    }
    // if (!customLink) {
    //   onChange('video', [])
    // }
  }, [customLink]);

  useEffect(() => {
    if (!loader) {
      setLoading(loader || false);
    }
  }, [loader]);

  return (
    <Box className={classNames(classes.root)}>
      {!!onRemove && (
        <Box component="button" onClick={onRemove} className={classes.removeBtn}>
          <CustomIcon type={IconType.basket} />
        </Box>
      )}
      {onlyShow && <Box className={classes.onlyShowPreview} />}
      <Box
        {...getRootProps({
          className: classNames(classes.content, { [classes.documentContent]: isDocument }),
        })}
      >
        <input {...getInputProps()} className={classes.input} ref={inputEl || input} />
        <Box className={classes.normalContainer}>
          {!thumbs.length && (
            <Box className={classes.textContainer}>
              <CustomIcon type={IconType.basket} />
              <Box className={classes.textGroup}>
                <Typography variant="h8">{title}</Typography>
                <Typography variant="labels">{subtitle}</Typography>
              </Box>
              <ActionButton text={btnText} size="MD" ref={buttonEl} />
            </Box>
          )}
          {loading && (
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                background: "white",
                zIndex: 1,
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "50%",
                  zIndex: 2,
                  top: "100%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <LinearProgress />
              </Box>
            </Box>
          )}
          {!!thumbs.length && <aside className={classes.thumbsContainer}>{thumbs}</aside>}
        </Box>
      </Box>
    </Box>
  );
};
