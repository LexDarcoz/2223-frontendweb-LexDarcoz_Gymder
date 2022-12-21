import { useAuth0 } from "@auth0/auth0-react";
import GymRatingReadOnlyComponent from "../../../components/tools/GymRatingReadOnlyComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGym from "../../../api/Gym";
import AuthLanding from "../../../components/authentication/AuthLanding";
import "./detailsGym.css";
import { Rating, Typography } from "@mui/material";
import useUserGym from "../../../api/userGym";
import ToolTip from "../../../components/tools/ToolTip";
import Transl from "../../../Translation/i18n/translate";
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

  useEffect(() => {
    const fetchGyms = async () => {
      const data = await gymApi.getById(id);
      setGym(data);
    };
    fetchGyms();
  }, [id, gymApi]);

  function addGymToUser(gymId) {
    TooltipActivation();
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
                    <h5 className="mb-2 text-primary">{Transl("About")}</h5>
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
                    <h6 className="mb-3 text-primary">
                      {Transl("GymDetails")}
                    </h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>
                        <strong> {Transl("Name")}</strong>
                      </label>
                      <p>{gym.name}</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>
                        <strong> {Transl("Email")}</strong>
                      </label>
                      <p>{gym.emailAddress}</p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>
                        <strong> {Transl("Owner")}</strong>
                      </label>
                      <p>{gym.owner}</p>
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label>
                        <strong> {Transl("Address")}</strong>
                      </label>
                      <p>{gym.address ? gym.address : "No gym address"}</p>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <Typography component="legend">
                      {Transl("GiveRating")}
                    </Typography>
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
                        {Transl("AddGymToYourGym")}
                      </p>
                      <button
                        className="btn btn-primary m-2"
                        onClick={() => navigate("/discover")}
                      >
                        {Transl("GoBack")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToolTip
          open={open}
          onClose={handleClose}
          severity="success"
          message="Succesfully added a gym to your page!"
        />
      </form>
    );
  }
  return <AuthLanding />;
}
