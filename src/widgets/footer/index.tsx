import React from "react";

import { Box } from "@mui/material";

import { IconType } from "src/types/enums";
import { TextList } from "src/entities";
import { Icon } from "src/shared/ui";

import { useStyles } from "./style";

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.footerInner}>
        <Box className={classes.logoContainer}>
          <Icon type={IconType.logo} />
        </Box>
        <Box className={classes.footerLinks}>
          <TextList
            className={classes.column}
            data={["FAQ", "Privacy Policy", "Types of payment"]}
          />
          <TextList
            className={classes.column}
            data={["+45 567 893 705", "123 Main Street Brooklyn, NY 12345"]}
          />
        </Box>
      </Box>
    </Box>
  );
};
