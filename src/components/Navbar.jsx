import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
        <img
          id="logoTopLeft"
          src={require("../images/GymderLogo.jpg")}
          alt="Gymder logo"
        />
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link "
              id="home-tab"
              data-toggle="tab"
              href="MyGymPlace"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              My Gym
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              id="home-tab"
              data-toggle="tab"
              href="Equipment"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Apparaten
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Locaties
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="MyProfile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Mijn profiel
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Contacteer ons!
            </a>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <a
              className="nav-link "
              id="register"
              data-toggle="tab"
              href="Equipment"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Registreren
            </a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
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
        </div>
      </nav>
    </>
  );
}
