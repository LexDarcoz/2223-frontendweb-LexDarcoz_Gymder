import { Link } from "react-router-dom";
import Transl from "../../Translation/i18n/translate";
import GymderLogo from "../../images/GymderLogo.jpg";

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 d-flex align-items-center">
            <div className="about-img">
              <img alt="Gymder logo" className="img-fluid" src={GymderLogo} />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>
                {Transl("WeAreGymder")}
                <br />
                {Transl("ProvidingGymAssets")}
              </h2>
              <p>{Transl("AboutGymder")}</p>
              <Link className="btn btn-warning" to="GymHealth">
                {Transl("LearnMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
