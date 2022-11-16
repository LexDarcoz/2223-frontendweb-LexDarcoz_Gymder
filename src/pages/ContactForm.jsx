export default function ContactForm() {
  return (
    <section className="mb-12 mt-4 section-padding " id="ContactForm">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="row mx-auto">
        <div className="col-md-9 mb-md-0 mb-5 ">
          <form
            id="contact-form"
            name="contact-form"
            action="mailto:Alexander.schatteman@student.hogent.be"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label for="name" className="">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label for="email" className="">
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label for="subject" className="">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <label for="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <input
                className="btn btn-primary p-3 w-25 "
                type="submit"
                value="Send"
              />
              <input
                className="btn btn-warning p-3 w-25 ms-auto"
                type="reset"
                value="Reset"
              />
            </div>
          </form>

          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Schoonmeersen, Voskenslaan, Belgium</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 0485 47 48 78</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>Alexander.schatteman@student.hogent.be</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
