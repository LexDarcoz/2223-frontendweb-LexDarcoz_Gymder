import smallGymImg from "../../images/addGym/SmallGym.jpeg";
import useGym from "../../api/Gym";
import { useAuth0 } from "@auth0/auth0-react";
import AuthLanding from "../../components/authentication/AuthLanding";
import ToolTip from "../../components/tools/ToolTip";
import { useState } from "react";

export default function AddGym() {
  const gymApi = useGym();
  const [open, setOpen] = useState(false);
  const TooltipActivation = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function addGym(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("name", e.target[0].value);
    data.append("emailAddress", e.target[1].value);
    data.append("owner", e.target[2].value);
    data.append("description", e.target[3].value);
    data.append("image", e.target[4].files[0]);

    console.log(data.get("image"));
    TooltipActivation();
    await gymApi.save({
      name: data.get("name"),
      emailAddress: data.get("emailAddress"),
      owner: data.get("owner"),
      description: data.get("description"),
      image: data.get("image"),
    });
  }
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <section
        className="min-vh-100 mb-3 h-100 container under-Navbar mt-2 "
        id="UnderNav"
        style={{ backgroundcolor: " #eee" }}
      >
        <div>
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11 ">
              <div
                className="text-white bg-dark bg-gradient"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-md-4 ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Add your gym!
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={addGym}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Gym name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              E-mail
                            </label>
                            <input
                              type="email"
                              required
                              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Owner
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Additional info
                            </label>
                            <textarea
                              className="form-control"
                              name="AdditionalInfo"
                              id="AdInfo"
                              rows="4"
                              type="text"
                              style={{ color: "black" }}
                            ></textarea>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              className="form-control"
                              name="image"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5 ">
                          <input
                            className="form-check-input me-2  fs-6"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            required
                          />
                          <label
                            className="form-check-label fs-6 "
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="reset" className="btn btn-secondary">
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Add Gym
                          </button>

                          <ToolTip
                            open={open}
                            onClose={handleClose}
                            severity="success"
                            message="Succesfully added a gym!"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                      <img src={smallGymImg} className="img-fluid" alt="yes" />
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
  return <AuthLanding />;
}
