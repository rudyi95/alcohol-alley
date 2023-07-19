import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  data: string[];
  className?: string;
  itemClass?: string;
}

export const TextList: React.FC<IProps> = ({ data, className, itemClass }) => {
  return (
    <Box className={className}>
      {data.map((item) => (
        <Typography className={itemClass}>{item}</Typography>
      ))}
    </Box>
  );
};
