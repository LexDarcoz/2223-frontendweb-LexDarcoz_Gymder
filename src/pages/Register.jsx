import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section class="vh-100 under-Navbar" style={{ backgroundcolor: " #eee" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div
              class="text-white bg-dark bg-gradient"
              style={{ borderRadius: "15px" }}
            >
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            required
                            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                            id="form3Example3c"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">
                            Repeat your password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="row d-flex">
                        <div className="d-flex">
                          <button
                            type="submit"
                            className="align-self-end btn btn-primary btn-lg"
                          >
                            Register
                          </button>

                          <Link to="/login" className="m-lg-auto">
                            I already have an account
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="yes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
