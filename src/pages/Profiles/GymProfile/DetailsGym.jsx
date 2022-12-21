import { useAuth0 } from "@auth0/auth0-react";
import GymRatingReadOnlyComponent from "../../../components/tools/GymRatingReadOnlyComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGym from "../../../api/Gym";
import AuthLanding from "../../../components/authentication/AuthLanding";
import "./detailsGym.css";
import { Rating, Typography } from "@mui/material";
import useUserGym from "../../../api/userGym";
export default function DetailsGym() {
  const { isAuthenticated } = useAuth0();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const gymApi = useGym();
  const { id } = useParams();

  const navigate = useNavigate();
  const [gym, setGym] = useState("");
  const [value, setValue] = useState();
  const userGymApi = useUserGym();
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

  function addGymToUser(gymId) {
    userGymApi.save(gymId);
  }

  if (isAuthenticated) {
    return (
      <form className="container min-vh-100 h-100 w-100 mb-5" id="UnderNav">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card p-0">
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
            <div className="card p-0">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-3 text-primary">Gym Details</h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>
                        <strong> Name:</strong>
                      </label>
                      <p>{gym.name}</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>
                        <strong> Email:</strong>
                      </label>
                      <p>{gym.emailAddress}</p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>
                        <strong> Owner:</strong>
                      </label>
                      <p>{gym.owner}</p>
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label>
                        <strong> Address:</strong>
                      </label>
                      <p>{gym.address ? gym.address : "No gym description"}</p>
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
                      <p
                        className="btn btn-primary  m-2"
                        onClick={() => addGymToUser(gym.id)}
                      >
                        Add Gym
                      </p>
                      <button
                        className="btn btn-primary m-2"
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
