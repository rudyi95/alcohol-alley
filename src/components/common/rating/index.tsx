import React from "react";
import { Box } from "@mui/material";

export default function SimpleRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Rating
          name="simple-controlled"
          value={value}
          onChange={(event: any, newValue: any) => {
            setValue(newValue);
          }}
        /> */}
      </Box>
    </div>
  );
}
