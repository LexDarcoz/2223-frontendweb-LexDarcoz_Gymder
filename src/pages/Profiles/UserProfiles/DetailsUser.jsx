import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthLanding from "../../../components/authentication/AuthLanding";
import NoImageYet from "../../../images/logo/NoImageYet.jpg";
import "./detailsUser.css";
import useUser from "../../../api/User";
export default function DetailsGym() {
  const userApi = useUser();
  const { id } = useParams();
  const [user, setUser] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchGyms = async () => {
      const data = await userApi.getById(id);
      setUser(data);
    };
    fetchGyms();
  }, [id, userApi]);

  if (isAuthenticated) {
    return (
      <form className="container min-vh-100 h-100 w-100" id="UnderNav">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src={
                          user.image
                            ? `${baseUrl}/${user.image}`
                            : `${NoImageYet}? `
                        }
                        alt="User profile pic"
                      />
                    </div>
                    <h5 className="user-name">
                      {user.fullName
                        ? user.fullName
                        : "You do not have a name yet"}
                    </h5>
                  </div>
                  <div className="about">
                    <h5 className="mb-2 text-primary">About</h5>
                    <p>
                      {user.bio ? user.bio : "This user has not set his bio"}
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
                          user.fullName
                            ? user.fullName
                            : "This user has not set his full name"
                        }
                        readOnly
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
                          user.emailAddress
                            ? user.emailAddress
                            : "This user has not set his email"
                        }
                        readOnly
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
                          user.phoneNumber
                            ? user.phoneNumber
                            : "This user has not set his phone number"
                        }
                        readOnly
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
                          user.country
                            ? user.country
                            : "This user has not set his country"
                        }
                        readOnly
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
                        placeholder={
                          user.state
                            ? user.state
                            : "This user has not set his state"
                        }
                        readOnly
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
                        placeholder={
                          user.city
                            ? user.city
                            : "This user has not set his city"
                        }
                        readOnly
                      />
                    </div>
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
