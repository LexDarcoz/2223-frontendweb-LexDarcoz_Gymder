import { Box, Rating, Typography } from "@mui/material";
import Transl from "../../Translation/i18n/translate";

export default function GymRatingComponent({ gymRating }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {gymRating === 0 ? (
        <Typography component="legend">{Transl("GymNotRatedYet")}</Typography>
      ) : (
        <Typography component="legend">{Transl("CurrentRating")}</Typography>
      )}

      <Rating name="read-only" value={gymRating} readOnly precision={0.5} />
    </Box>
  );
}
