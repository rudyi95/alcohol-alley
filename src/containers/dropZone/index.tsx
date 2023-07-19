/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Box, Typography } from "@mui/material";
import classNames from "classnames";

import { Icon, Button } from "src/shared/ui";

import { IconType } from "src/types/enums";

import { useStyles } from "./style";

interface IProps {
  title: string;
  subtitle: string;
  btnText: string;
  maxFiles?: number;
  customLink?: string;
  onChange: (name: string, file: any) => void;
  inputEl?: React.RefObject<HTMLInputElement>;
  buttonEl?: React.RefObject<HTMLButtonElement>;
  isDocument?: boolean;
  maxSize?: number;
  loader?: boolean;
  imgThumbClass?: string;
  image?: any;
}

export const DropZone: React.FC<IProps> = ({
  title,
  subtitle,
  btnText,
  onChange,
  customLink,
  inputEl,
  buttonEl,
  isDocument,
  maxSize,
  imgThumbClass,
  image,
}) => {
  const classes = useStyles();
  // const [loading, setLoading] = useState(false);
  const input: any = useRef(null);
  const acceptData = {
    image: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: maxSize,
    accept: acceptData.image,
    onDrop: (acceptedFiles: any[]) => {
      if (!!acceptedFiles.length) {
        // setLoading(true);
        onChange(
          "image",
          acceptedFiles.map((file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
  });

  useEffect(() => {
    if (customLink) {
      onChange("video", [{ name: "", preview: customLink, type: "video/*" }]);
    }
    // if (!customLink) {
    //   onChange('video', [])
    // }
  }, [customLink]);

  // useEffect(() => {
  //   if (!loader) {
  //     setLoading(loader || false);
  //   }
  // }, [loader]);

  return (
    <Box className={classNames(classes.root)}>
      <Box
        {...getRootProps({
          className: classNames(classes.content, { [classes.documentContent]: isDocument }),
        })}
      >
        <input {...getInputProps()} className={classes.input} ref={inputEl || input} />
        <Box className={classes.normalContainer}>
          {!image.url && (
            <Box className={classes.textContainer}>
              <Icon type={IconType.basket} />
              <Box className={classes.textGroup}>
                <Typography variant="h8">{title}</Typography>
                <Typography variant="labels">{subtitle}</Typography>
              </Box>
              <Button text={btnText} size="MD" ref={buttonEl} />
            </Box>
          )}
          {!!image.url && (
            <aside className={classes.thumbsContainer}>
              <div className={classes.thumb}>
                <img
                  src={image.url}
                  className={classNames(classes.img, imgThumbClass)}
                  alt="test"
                  // Revoke data uri after image is loaded
                  // onLoad={() => {
                  //   URL.revokeObjectURL(file.preview)
                  // }}
                />
              </div>
            </aside>
          )}
        </Box>
      </Box>
    </Box>
  );
};
