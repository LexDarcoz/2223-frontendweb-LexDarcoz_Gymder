import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";
import { LOCALES } from "../Translation/i18n";
import Transl from "../Translation/i18n/translate";
import AuthenticationButton from "./authentication/AuthenticationButton";

export default function Navbar(props) {
  const { pathname } = useLocation();
  const { languageFunct } = props;

  const path = pathname === "/";

  console.log(pathname);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {path ? (
            <a className="navbar-brand" href="/#">
              <span className="text-warning">Gym</span>Der
            </a>
          ) : (
            <Link className="navbar-brand" to="/#">
              <span className="text-warning">Gym</span>Der
            </Link>
          )}

          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {path ? (
                  <a href="/#" className="nav-link">
                    {Transl("Home")}
                  </a>
                ) : (
                  <Link className="nav-link" to="/#contact">
                    {Transl("Home")}
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {path ? (
                  <a className="nav-link" href="/#about">
                    {Transl("About")}
                  </a>
                ) : (
                  <Link className="nav-link" to="/#contact">
                    {Transl("About")}
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {path ? (
                  <a className="nav-link" href="/#services">
                    {Transl("Services")}
                  </a>
                ) : (
                  <Link className="nav-link" to="/#contact">
                    {Transl("Services")}
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {path ? (
                  <a className="nav-link" href="/#ranking">
                    {Transl("GymRanking")}
                  </a>
                ) : (
                  <Link className="nav-link" to="/#ranking">
                    {Transl("GymRanking")}
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {path ? (
                  <a className="nav-link" href="/#contact">
                    {Transl("Contact")}
                  </a>
                ) : (
                  <Link className="nav-link" to="/#contact">
                    {Transl("Contact")}
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/discover">
                  {Transl("Discover")}
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "10px" }}>
                <AuthenticationButton prop={""} />
              </li>
              <li className="nav-item" style={{ marginLeft: "10px" }}>
                <select>
                  <option
                    value="English"
                    onClick={() => languageFunct(LOCALES.ENGLISH)}
                  >
                    English
                  </option>
                  <option
                    value="French"
                    onClick={() => languageFunct(LOCALES.FRENCH)}
                  >
                    French
                  </option>
                  <option
                    value="Dutch"
                    onClick={() => languageFunct(LOCALES.DUTCH)}
                  >
                    Dutch
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
