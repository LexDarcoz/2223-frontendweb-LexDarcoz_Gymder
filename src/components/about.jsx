import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-img">
              <img alt="" className="img-fluid" src="img/about.jpg" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>
                We Are GymDer
                <br />
                Providing You Your Gym Assets
              </h2>
              <p>
                Our mission at Gymder is to motivate people and provide them an
                easy to use app <br /> to meet other people, find gyms near you
                and set up a workout plan. <br /> Exercising with a friend is a
                great way to keep you motivated. It's also a great way to meet
                new people. <br /> We think it's <strong>crucial</strong> for
                people to hit the gym for numerous reasons listed below.
              </p>
              <Link className="btn btn-warning" to="GymHealth">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
