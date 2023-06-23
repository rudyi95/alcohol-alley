import React from "react";

import { Box, Typography } from "@mui/material";

import { useStyles } from "./style";
import CustomIcon from "src/components/customIcon";
import { IconType } from "src/types/enums";

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.footerInner}>
        <Box>
          <CustomIcon type={IconType.logo} />
        </Box>
        <Box className={classes.column}>
          <Typography>FAQ</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Types of payment</Typography>
        </Box>
        <Box className={classes.column}>
          <Typography>+45 567 893 705</Typography>
          <Typography>123 Main Street Brooklyn, NY 12345 </Typography>
        </Box>
      </Box>
    </Box>
  );
};
