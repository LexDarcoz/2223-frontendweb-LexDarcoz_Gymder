import { Link } from "react-router-dom";
import CarouselImg1 from "../../images/Carousel/Carousel1.jpeg";
import CarouselImg2 from "../../images/Carousel/Carousel2.jpeg";
import CarouselImg3 from "../../images/Carousel/Carousel3.jpeg";
import Transl from "../../Translation/i18n/translate";
import LoginButton from "../authentication/LoginButton";
import "../../styling/App.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Carousel() {
  const { isAuthenticated, user } = useAuth0();

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
          {isAuthenticated ? (
            <div className="carousel-caption ">
              <h5>Welcome {user.name}</h5>
              <p>{Transl("SetupRoutine")}</p>
              <p>
                <Link className="btn btn-warning" to="myGym">
                  My gym
                </Link>
              </p>
            </div>
          ) : (
            <div className="carousel-caption ">
              <h5>{Transl("YourGym")}</h5>
              <p>{Transl("SetupRoutine")}</p>
              <p>
                <LoginButton prop={"btn btn-warning"} />
              </p>
            </div>
          )}
        </div>
        <div className="carousel-item ">
          <img alt="..." className="d-block w-100" src={CarouselImg3} />
          <div className="carousel-caption">
            <h5>{Transl("GymInArea")}</h5>
            <p>{Transl("AddGymsOthersToSee")}</p>
            <p>
              <Link to="addGym" className="btn btn-warning">
                {Transl("AddGym")}
              </Link>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="..." className="d-block w-100" src={CarouselImg1} />
          <div className="carousel-caption">
            <h5>{Transl("SocializeWithPeople")}</h5>
            <p>Find other gymders!</p>
            <p>
              <Link className="btn btn-warning mt-3" to="/discover">
                Find other people now!
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
        <span aria-hidden="true" className="carousel-control-prev-icon"></span>
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
