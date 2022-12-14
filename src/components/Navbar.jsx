import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";
import { LOCALES } from "../Translation/i18n";
import Transl from "../Translation/i18n/translate";
import AuthenticationButton from "./authentication/AuthenticationButton";

import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LanguageSetter from "./language/LanguageSetter";

export default function Navbar(props) {
  const { pathname } = useLocation();
  const { languageFunct } = props;
  const { isAuthenticated, user } = useAuth0();
  const path = pathname === "/";

  return (
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
              {isAuthenticated ? (
                path ? (
                  <a className="nav-link" href="/#ranking">
                    {Transl("GymRanking")}
                  </a>
                ) : (
                  <Link className="nav-link" to="/#ranking">
                    {Transl("GymRanking")}
                  </Link>
                )
              ) : null}
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
              {isAuthenticated ? (
                <Link className="nav-link" to="/discover">
                  {Transl("Discover")}
                </Link>
              ) : null}
            </li>
            <li className="nav-item d-flex gap-5 mx-auto">
              <AuthenticationButton prop={""} />
              <LanguageSetter languageFunct={languageFunct} />
            </li>

            <li
              id="LanguageSetter"
              className="text-right"
              style={{ marginRight: "15px" }}
            ></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
