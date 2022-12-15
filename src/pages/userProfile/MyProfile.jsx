import { useAuth0 } from "@auth0/auth0-react";
import AuthLanding from "../../components/authentication/AuthLanding";

export default function MyProfile() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <section
        className="min-vh-100 mb-5 h-100 container under-Navbar "
        id="UnderNav"
        style={{ backgroundcolor: " #eee" }}
      >
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5 overflow-auto">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src={user.picture}
                  alt="ProfilePictureOfUser"
                />
                <span className="font-weight-bold">{user.name}</span>
                <span className="text-black-50">{user.given_name}</span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label class="labels">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label class="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="state"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                  >
                    Save Profile
                  </button>
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
