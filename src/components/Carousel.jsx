import { Link } from "react-router-dom";

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
          <img alt="..." className="d-block w-100" src="img/home-1.jpg" />
          <div className="carousel-caption">
            <h5>Your Gym</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <Link className="btn btn-warning mt-3" to="/register">
                Make your account today!
              </Link>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="..." className="d-block w-100" src="img/home-2.jpg" />
          <div className="carousel-caption">
            <h5>Always Dedicated</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <a className="btn btn-warning mt-3" href="#">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="..." className="d-block w-100" src="img/home-3.jpg" />
          <div className="carousel-caption">
            <h5>True Construction</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <a className="btn btn-warning mt-3" href="#">
                Learn More
              </a>
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
