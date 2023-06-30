import React from "react";

import { Box, Typography } from "@mui/material";

interface IProps {
  text: string;
}

export const CustomPlug: React.FC<IProps> = ({ text }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        sx={{
          top: "50%",
          left: "50%",
          position: "absolute",
          fontSize: "40px",
          transform: "translate(-50%, -50%)",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
