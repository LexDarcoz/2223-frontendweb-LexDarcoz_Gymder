import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";

import useUser from "../../../api/User";
import AuthLanding from "../../../components/authentication/AuthLanding";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./myProfile.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../../../App";
import ToolTip from "../../../components/tools/ToolTip";
export default function MyProfile() {
  const { isAuthenticated, user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const [fullName, setFullName] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [bio, setBio] = useState(null);
  const userApi = useUser();
  const theme = useContext(ThemeContext);

  const TooltipActivation = () => {
    setOpen(true);
  };

  const authId = user.sub;

  useEffect(() => {
    const fetchUser = async () => {
      const userProfile = await userApi.getByAuthId(authId);
      setUserProfile(userProfile);

      setFullName(userProfile.fullName);
      setEmailAddress(userProfile.emailAddress);
      setPhoneNumber(userProfile.phoneNumber);
      setCountry(userProfile.country);
      setState(userProfile.state);
      setCity(userProfile.city);
      setBio(userProfile.bio);
    };

    fetchUser();
  }, [userApi, authId]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function updateProfile(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("fullName", e.target[0].value);
    data.append("emailAddress", e.target[1].value);
    data.append("phone", e.target[2].value);
    data.append("country", e.target[3].value);
    data.append("state", e.target[4].value);
    data.append("city", e.target[5].value);
    data.append("bio", e.target[6].value);

    TooltipActivation();

    await userApi.save({
      fullName: data.get("fullName")
        ? data.get("fullName")
        : userProfile.fullName,
      emailAddress: data.get("emailAddress")
        ? data.get("emailAddress")
        : userProfile.emailAddress,
      phoneNumber: data.get("phone") ? data.get("phone") : null,
      country: data.get("country") ? data.get("country") : null,
      state: data.get("state") ? data.get("state") : null,
      city: data.get("city") ? data.get("city") : null,
      bio: data.get("bio") ? data.get("bio") : null,
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
                    <h5 className="user-name">
                      {fullName ? fullName : "You do not have a name yet"}
                    </h5>
                    <h6 className="user-email">
                      {emailAddress
                        ? emailAddress
                        : "You do not have an email address yet"}
                    </h6>
                  </div>
                  <div className="about">
                    <h5 className="mb-2 text-primary">About</h5>
                    <p>{bio ? bio : "I do not have a bio yet!"}</p>
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
                        placeholder={
                          fullName ? fullName : "Enter your full name here!"
                        }
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
                        placeholder={
                          emailAddress
                            ? emailAddress
                            : "Enter your e-mail here!"
                        }
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
                        placeholder={
                          phoneNumber
                            ? phoneNumber
                            : "Enter your phone number here!"
                        }
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
                        placeholder={
                          country ? country : "Enter your country here!"
                        }
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
                        placeholder={state ? state : "Enter your state here!"}
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
                        placeholder={city ? city : "Enter your city here!"}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Bio</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={bio ? bio : "Enter your bio here!"}
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
        <ToolTip
          open={open}
          onClose={handleClose}
          severity="success"
          message="Succesfully updated your profile!"
        />
      </form>
    );
  }
  return <AuthLanding />;
}
