import { useState, useEffect, useContext } from "react";
import { Box, Rating, Typography } from "@mui/material";

export default function BasicRating() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
      <Typography component="legend">Rate this Restaurant</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
