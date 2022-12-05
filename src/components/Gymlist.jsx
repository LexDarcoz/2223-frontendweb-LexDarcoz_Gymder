import Transl from "../Translation/i18n/translate";

export default function Gymlist() {
  return (
    <section className="team section-padding" id="ranking">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>{Transl("TopThree")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center">
              <div className="card-body">
                <img
                  alt=""
                  className="img-fluid rounded-circle"
                  src="img/team-1.jpg"
                />
                <h3 className="card-title py-2">Gym1</h3>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam....
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                  <i className="bi bi-facebook text-dark mx-1"></i>
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center">
              <div className="card-body">
                <img
                  alt=""
                  className="img-fluid rounded-circle"
                  src="img/team-2.jpg"
                />
                <h3 className="card-title py-2">Gym2</h3>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam.
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1"></i>{" "}
                  <i className="bi bi-facebook text-dark mx-1"></i>{" "}
                  <i className="bi bi-linkedin text-dark mx-1"></i>{" "}
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center">
              <div className="card-body">
                <img
                  alt=""
                  className="img-fluid rounded-circle"
                  src="img/team-3.jpg"
                />
                <h3 className="card-title py-2">Gym3</h3>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam.
                </p>
                <p className="socials">
                  <i className="bi bi-twitter text-dark mx-1"></i>{" "}
                  <i className="bi bi-facebook text-dark mx-1"></i>{" "}
                  <i className="bi bi-linkedin text-dark mx-1"></i>{" "}
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
