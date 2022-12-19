import GymRatingReadOnlyComponent from "../tools/GymRatingReadOnlyComponent";
import NoImageYet from "../../images/logo/NoImageYet.jpg";
export default function GymCard({
  name,
  description,
  gymRating,
  id,
  image,
  handleClick,
}) {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <div className="col-12 col-md-6 col-lg-4" onClick={() => handleClick(id)}>
      <div className="card text-center me-1" style={{ minHeight: "560px" }}>
        <div className="card-body">
          <img
            alt=""
            className="img-fluid rounded-circle"
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              minWidth: "100px",
              minHeight: "100px",
            }}
            src={image ? `${baseUrl}/${image}` : `${NoImageYet}`}
          />
          <h3 className="card-title py-2">{name}</h3>
          <p className="card-text">{description}</p>

          <GymRatingReadOnlyComponent gymRating={gymRating} />

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
