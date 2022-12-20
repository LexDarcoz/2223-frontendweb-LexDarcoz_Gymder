import { useAuth0 } from "@auth0/auth0-react";
import GymRatingReadOnlyComponent from "../../../components/tools/GymRatingReadOnlyComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGym from "../../../api/Gym";
import AuthLanding from "../../../components/authentication/AuthLanding";
import "./detailsGym.css";
import { Rating, Typography } from "@mui/material";
export default function DetailsGym() {
  const gymApi = useGym();
  const { id } = useParams();
  const navigate = useNavigate();
  const [gym, setGym] = useState("");
  const [value, setValue] = useState();
  function waitForElement() {
    if (typeof gym.rating !== "undefined") {
      return true;
    } else {
      setTimeout(waitForElement, 50);
    }
  }
  useEffect(() => {
    const fetchGyms = async () => {
      const data = await gymApi.getById(id);
      setGym(data);
    };
    fetchGyms();
  }, [id, gymApi]);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <form className="container min-vh-100 h-100 w-100 mb-5" id="UnderNav">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="gym-profile">
                    <div className="gym-avatar">
                      <div className="gym-avatar">
                        <img
                          src={
                            gym.image
                              ? `${baseUrl}/${gym.image}`
                              : `${gym.NoImageYet}`
                          }
                          alt="Gym profile"
                        />
                      </div>
                    </div>
                    <h5 className="gym-name">{gym.name}</h5>
                    <h6 className="gym-email">{gym.emailAddress}</h6>
                  </div>
                  <div className="about">
                    <h5 className="mb-2 text-primary">About</h5>
                    <p>
                      {gym.description
                        ? gym.description
                        : "I do not have a bio yet!"}
                    </p>

                    {waitForElement() ? (
                      <GymRatingReadOnlyComponent gymRating={gym.rating} />
                    ) : (
                      "Rating not availabe at this time"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-3 text-primary">Gym Details</h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        placeholder={gym.name}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        placeholder={gym.emailAddress}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Owner</label>
                      <input
                        className="form-control"
                        placeholder={gym.owner}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        className="form-control"
                        placeholder={
                          gym.address ? gym.address : "No gym description"
                        }
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <Typography component="legend">Give rating</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate("/discover")}
                      >
                        Go back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
  return <AuthLanding />;
}
