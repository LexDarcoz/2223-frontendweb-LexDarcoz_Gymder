import { Box, Rating, Typography } from "@mui/material";

export default function GymRatingComponent({ gymRating }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Current rating</Typography>
      <Rating name="read-only" value={gymRating} readOnly precision={0.5} />
    </Box>
  );
}
