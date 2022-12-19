import { useAuth0 } from "@auth0/auth0-react";
import { Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGym from "../../../api/Gym";
import AuthLanding from "../../../components/authentication/AuthLanding";
import "./detailsGym.css";
export default function DetailsGym() {
  const gymApi = useGym();
  const { id } = useParams();
  const [gym, setGym] = useState("");

  useEffect(() => {
    const fetchGyms = async () => {
      const data = await gymApi.getById(id);
      setGym(data);
    };
    fetchGyms();
  }, [id, gymApi]);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { isAuthenticated } = useAuth0();
  const [value, setValue] = useState();
  if (isAuthenticated) {
    return (
      <form className="container min-vh-100 h-100 w-100" id="UnderNav">
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
                          alt="User profile pic"
                        />
                      </div>
                    </div>
                    <h5 className="gym-name">{}</h5>
                    <h6 className="gym-email">{}</h6>
                  </div>
                  <div className="about">
                    <h5 className="mb-2 text-primary">About</h5>
                    <p>
                      {gym.description
                        ? gym.description
                        : "I do not have a bio yet!"}
                    </p>
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
                      <label htmlFor="fullName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Owner</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          gym.owner ? gym.owner : "No gym description"
                        }
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
