import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";
import { LOCALES } from "../Translation/i18n";
import Transl from "../Translation/i18n/translate";
import AuthenticationButton from "./authentication/AuthenticationButton";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EnglishFlag from "../images/CountryFlags/UK_EnglishFlag.jpeg";
import DutchFlag from "../images/CountryFlags/NL_DutchFlag.jpeg";
import FrenchFlag from "../images/CountryFlags/FR_FrenchFlag.jpeg";
import { useState } from "react";

export default function Navbar(props) {
  const { pathname } = useLocation();
  const { languageFunct } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
            </ul>
          </div>
        </div>
        <div id="LanguageSetter" style={{ marginRight: "15px" }}>
          <FormControl fullWidth>
            <InputLabel style={{ padding: "3px" }} variant="standard">
              Language
            </InputLabel>
            <Select
              defaultValue={1}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              <MenuItem
                value={1}
                onClick={() => languageFunct(LOCALES.ENGLISH)}
              >
                <img src={EnglishFlag} alt="" />
              </MenuItem>
              <MenuItem value={2} onClick={() => languageFunct(LOCALES.DUTCH)}>
                <img src={DutchFlag} alt="" />
              </MenuItem>
              <MenuItem value={3} onClick={() => languageFunct(LOCALES.FRENCH)}>
                <img src={FrenchFlag} alt="" />
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav>
    </>
  );
}
