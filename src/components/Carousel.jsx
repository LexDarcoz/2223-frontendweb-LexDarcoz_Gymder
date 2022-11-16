import { Link } from "react-router-dom";
import CarouselImg1 from "../images/Carousel1.jpeg";
import CarouselImg2 from "../images/Carousel2.jpeg";
import CarouselImg3 from "../images/Carousel3.jpeg";

export default function Carousel() {
  return (
    <div
      className="carousel slide"
      data-bs-ride="carousel"
      id="carouselExampleIndicators"
    >
      <div className="carousel-indicators">
        <button
          aria-label="Slide 1"
          className="active"
          data-bs-slide-to="0"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        ></button>
        <button
          aria-label="Slide 2"
          data-bs-slide-to="1"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        ></button>
        <button
          aria-label="Slide 3"
          data-bs-slide-to="2"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img alt="..." className="d-block w-100" src={CarouselImg2} />
          <div className="carousel-caption">
            <h5>Your Gym</h5>
            <p>Setup a routine of exercises and meet other people!</p>
            <p>
              <Link className="btn btn-warning mt-3" to="/register">
                Make your account today!
              </Link>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="..." className="d-block w-100" src={CarouselImg3} />
          <div className="carousel-caption">
            <h5>Gym in your area</h5>
            <p>You can add gyms which will be available for others to see.</p>
            <p>
              <a className="btn btn-warning mt-3" href="#">
                Add your gym!
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="..." className="d-block w-100" src={CarouselImg1} />
          <div className="carousel-caption">
            <h5>Socializing with people from around you!</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <Link className="btn btn-warning mt-3" href="#">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-slide="prev"
        data-bs-target="#carouselExampleIndicators"
        type="button"
      >
        <span aria-hidden="true" className="carousel-control-prev-icon"></span>{" "}
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-slide="next"
        data-bs-target="#carouselExampleIndicators"
        type="button"
      >
        <span aria-hidden="true" className="carousel-control-next-icon"></span>{" "}
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
