import { Link } from "react-router-dom";
import Transl from "../../Translation/i18n/translate";

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>
                {" "}
                <strong> {Transl("OurServices")}</strong>
              </h2>
              <p>
                {Transl("WhatDoesGymderDo")}
                <br />
                {Transl("WhyUseGymder")}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-intersect"></i>
                <h3 className="card-title">{Transl("Integrity")}</h3>
                <p className="lead">{Transl("isOpenSource")}</p>
              </div>
            </div>
          </div>

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
                <h3 className="card-title">{Transl("Memorizing")}</h3>
                <p className="lead">{Transl("SaveGymList")}</p>
                <Link to="/myGym" className="btn bg-warning text-dark">
                  {Transl("CheckItOut")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
