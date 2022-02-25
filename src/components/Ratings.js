import { useState, useEffect, useContext } from "react";
import { Box, Rating } from "@mui/material";

export default function BasicRating({ rating }) {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={rating}
        precision={0.5}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
    </Box>
  );
}
