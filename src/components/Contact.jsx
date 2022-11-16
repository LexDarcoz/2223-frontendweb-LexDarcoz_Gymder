import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Contact Us</h2>
              <p>
                <Link to="/contactForm">
                  Alexander.Schatteman@student.hogent.be
                </Link>
                <br />+ 0485 47 48 78 (not real phonenumber)
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
