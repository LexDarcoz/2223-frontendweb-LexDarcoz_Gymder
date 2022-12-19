import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";

import useUser from "../../../api/User";
import AuthLanding from "../../../components/authentication/AuthLanding";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./myProfile.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../../../App";
export default function MyProfile() {
  const { isAuthenticated, user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState([]);

  const userApi = useUser();
  const theme = useContext(ThemeContext);

  const TooltipActivation = () => {
    setOpen(true);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userProfile = await userApi.getByAuthId();
      setUserProfile([...userProfile]);
    };
    fetchUser();
  }, [userApi]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function updateProfile(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("name", e.target[0].value);
    data.append("emailAddress", e.target[1].value);
    data.append("phone", e.target[2].value);
    data.append("country", e.target[3].value);
    data.append("state", e.target[4].value);
    data.append("city", e.target[5].value);
    data.append("bio", e.target[6].value);

    TooltipActivation();

    await userApi.save({
      name: data.get("name") ? data.get("name") : user.name,
      emailAddress: data.get("emailAddress")
        ? data.get("emailAddress")
        : user.emailAddress,
      phone: data.get("phone") ? data.get("phone") : user.phone,
      country: data.get("country") ? data.get("country") : user.country,
      state: data.get("state") ? data.get("state") : user.state,
      city: data.get("city") ? data.get("city") : user.city,
      bio: data.get("bio") ? data.get("bio") : user.bio,
    });
  }

  if (isAuthenticated) {
    return (
      <form
        onSubmit={updateProfile}
        className="container min-vh-100 h-100 w-100"
        id="UnderNav"
      >
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src={user.picture} alt="User profile pic" />
                    </div>
                    <h5 className="user-name">{user.name}</h5>
                    <h6 className="user-email">{user.given_name}</h6>
                  </div>
                  <div className="about">
                    <h5 className="mb-2 text-primary">About</h5>
                    <p>{user.text ? user.text : "I do not have a bio yet!"}</p>
                    <p></p>
                    <p onClick={() => theme.toggleTheme()}>
                      {theme.theme === "dark" ? (
                        <DarkModeIcon />
                      ) : (
                        <LightModeIcon />
                      )}
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
                    <h6 className="mb-3 text-primary">Personal Details</h6>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
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
                      <label htmlFor="phone">Bio</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={
                          user.bio ? user.bio : "Enter your bio here!"
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="reset" className="btn btn-secondary">
                        Cancel
                      </button>
                      <button className="btn btn-primary">Update</button>
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
