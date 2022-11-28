export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipisicing elit. Non, quo.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-laptop"></i>
                <h3 className="card-title">Chat with other gym rats!</h3>
                <p className="lead">
                  Gymder provides the ability to chat with people who have added
                  eachother, this is via firebase.
                </p>
                <button className="btn bg-warning text-dark">
                  Check it out!
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-journal"></i>
                <h3 className="card-title">Sustainability</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eligendi modi temporibus alias iste. Accusantium?
                </p>
                <button className="btn bg-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-intersect"></i>
                <h3 className="card-title">Integrity</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eligendi modi temporibus alias iste. Accusantium?
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
