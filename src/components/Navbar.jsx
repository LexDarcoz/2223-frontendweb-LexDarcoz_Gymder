import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const path = pathname === "/";

  console.log(pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/#">
          <span className="text-warning">Gym</span>Der
        </Link>
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
                  Home
                </a>
              ) : (
                <Link className="nav-link" to="/#contact">
                  Home
                </Link>
              )}
            </li>
            <li className="nav-item">
              {path ? (
                <a className="nav-link" href="/#about">
                  About
                </a>
              ) : (
                <Link className="nav-link" to="/#contact">
                  About
                </Link>
              )}
            </li>
            <li className="nav-item">
              {path ? (
                <a className="nav-link" href="/#services">
                  Services
                </a>
              ) : (
                <Link className="nav-link" to="/#contact">
                  Services
                </Link>
              )}
            </li>
            <li className="nav-item">
              {path ? (
                <a className="nav-link" href="/#portfolio">
                  Portfolio
                </a>
              ) : (
                <Link className="nav-link" to="/#contact">
                  Portfolio
                </Link>
              )}
            </li>

            <li className="nav-item">
              {path ? (
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              ) : (
                <Link className="nav-link" to="/#contact">
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
