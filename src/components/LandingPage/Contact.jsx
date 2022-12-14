import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="card bg-dark ">
            <div className="section-header row text-center pb-5">
              <h2 style={{ color: "#ffc100" }}>Contact Us</h2>
              <p className="text-white">
                📧
                <Link to="/contactForm" className="text-center">
                  Alexander.Schatteman <br />
                  @student.hogent.be
                </Link>
                <br />
                <i className="bi bi-phone"></i> 0485 47 48 78
              </p>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-12 p-0 pt-4 pb-4"></div>
        </div>
      </div>
    </section>
  );
}
