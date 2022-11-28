import { useState } from "react";
import { Link } from "react-router-dom";
import smallGymImg from "../../images/SmallGym.jpeg";

import gymList from "../../api/mock_data/Gyms_DATA";
export default function AddGym() {
  const [gymList, setGymList] = useState(gymList[0]);

  function addGym() {
    setGymList([...gymList, { name: "yes" }]);
  }

  return (
    <section class="vh-100 under-Navbar" style={{ backgroundcolor: " #eee" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100 ">
          <div class="col-lg-12 col-xl-11 ">
            <div
              class="text-white bg-dark bg-gradient"
              style={{ borderRadius: "15px" }}
            >
              <div class="card-body p-md-5 ">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Add your gym!
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            Gym name
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
                            E-mail
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
                            Owner
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">
                            Owner
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">
                            Owner
                          </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">
                            Additional info
                          </label>
                          <textarea
                            name="AdditionalInfo"
                            id="AdInfo"
                            cols="28"
                            rows="5"
                            type="text"
                            style={{ color: "black" }}
                          ></textarea>
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          required
                        />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          onClick={addGym}
                          class="btn btn-primary btn-lg"
                        >
                          Add Gym
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={smallGymImg} class="img-fluid" alt="yes" />
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
