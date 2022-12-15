import { Box, Rating, Typography } from "@mui/material";

export default function GymRatingComponent({ gymRating }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {gymRating === 0 ? (
        <Typography component="legend">
          This gym has not been rated yet
        </Typography>
      ) : (
        <Typography component="legend">Current rating</Typography>
      )}

      <Rating name="read-only" value={gymRating} readOnly precision={0.5} />
    </Box>
  );
}
