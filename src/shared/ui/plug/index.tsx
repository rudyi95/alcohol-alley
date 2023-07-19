import React from "react";

import { Box, Typography } from "@mui/material";

export const Plug: React.FC<IPlug> = ({ text }) => {
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
