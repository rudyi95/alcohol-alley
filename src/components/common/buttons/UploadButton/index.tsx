import React, { BaseSyntheticEvent } from "react";

import { Typography, ButtonProps } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import classnames from "classnames";
import { split } from "lodash";

import { useStyles } from "./style";

const Input = styled("input")({
  display: "none",
});

interface IProps {
  text?: string;
  className?: string;
  accept?: string;
  callBack: (name: string, file: [File]) => void;
}

export const UploadButton: React.FC<IProps & ButtonProps> = ({
  text,
  variant = "outlined",
  className,
  accept,
  callBack,
  ...props
}) => {
  const classes = useStyles();

  return (
    <label htmlFor="contained-button-file" className={classes.root}>
      <Input
        accept={accept}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e: BaseSyntheticEvent) =>
          callBack(split(e.target.files[0].type, "/")[0], e.target.files)
        }
      />
      <Button
        className={classnames(classes.root, className)}
        variant={variant}
        size="MD"
        component="span"
        {...props}
      >
        <Typography>{text}</Typography>
      </Button>
    </label>
  );
};
