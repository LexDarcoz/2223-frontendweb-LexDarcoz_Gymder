import { Link } from "react-router-dom";
import Transl from "../../Translation/i18n/translate";

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>{Transl("OurServices")}</h2>
              <p>
                What does gymder exactly do for you?
                <br />
                Why use gymder over other apps?
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-laptop"></i>
                <h3 className="card-title">{Transl("AddOthers")}</h3>
                <p className="lead">{Transl("AddFriendsDiscoverButton")}</p>
                <Link to="/discover" className="btn bg-warning text-dark">
                  {Transl("CheckItOut")}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-journal"></i>
                <h3 className="card-title">Progression</h3>
                <p className="lead">
                  Gymder provides the ability to track progression and make up
                  your schedule
                </p>
                <Link to="/myGym" className="btn bg-warning text-dark">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-intersect"></i>
                <h3 className="card-title">Integrity</h3>
                <p className="lead">
                  Gymder is open source and will not steal data without your
                  consent
                </p>
                <button className="btn bg-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
