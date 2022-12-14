import { Box, Rating, Typography } from "@mui/material";
import GymRatingReadOnlyComponent from "../tools/GymRatingReadOnlyComponent";

export default function GymCard({
  name,
  description,
  gymRating,
  id,
  handleClick,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4" onClick={() => handleClick(id)}>
      <div className="card text-center">
        <div className="card-body">
          <img
            alt=""
            className="img-fluid rounded-circle"
            src="img/team-1.jpg"
          />
          <h3 className="card-title py-2">{name}</h3>
          <p className="card-text">{description}</p>
          <p>
            <GymRatingReadOnlyComponent gymRating={gymRating} />
          </p>
          <p className="socials">
            <i className="bi bi-twitter text-dark mx-1"></i>
            <i className="bi bi-facebook text-dark mx-1"></i>
            <i className="bi bi-linkedin text-dark mx-1"></i>
            <i className="bi bi-instagram text-dark mx-1"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
