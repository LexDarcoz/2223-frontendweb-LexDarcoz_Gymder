import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-collapse "
        id="navbar"
      >
        <Link to="/" className="nav-link ">
          <img
            id="logoTopLeft"
            src={require("../images/GymderLogo.jpg")}
            alt="Gymder logo"
          />
        </Link>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link to="/" className="nav-link ">
              My Gym
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/apparaten" className="nav-link ">
              Apparaten
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/locaties" className="nav-link ">
              Locaties
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link ">
              Contacteer ons!
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link regin">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link regin">
              Login
            </Link>
          </li>
        </ul>
        <Link to="myProfile">
          <span
            className="glyphicon glyphicon-user me-5"
            style={{
              fontSize: "25px",
              color: "#ecdf8f",
            }}
          ></span>
        </Link>

        {/* <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
          <div
            className="tab-pane fade bg-light"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          ></div>
        </div> */}
      </nav>
    </>
  );
}
