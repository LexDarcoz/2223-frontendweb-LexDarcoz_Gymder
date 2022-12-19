import Bio from "./Bio/Bio";
import PhoneNumber from "./phoneNumber/PhoneNumber";
import NoImageYet from "../../images/logo/NoImageYet.jpg";
import "./UserCard.css";

const baseUrl = process.env.REACT_APP_BASE_URL;
export default function UserCard({ userData }) {
  return (
    <div
      className="card col-lg-2 col-md-5 col-12 p-3 m-3  "
      style={{ minHeight: "150px" }}
    >
      <div className="card_title">
        {userData.fullName}
        <div className="card_body">
          <Bio userData={userData} />
          <PhoneNumber userData={userData} />
          <div className="card_image">
            <img
              alt=""
              className="img-fluid rounded-circle"
              style={{
                marginTop: "auto",
                maxWidth: "80px",
                maxHeight: "80px",
                minWidth: "80px",
                minHeight: "80px",
              }}
              src={
                userData.image
                  ? `${baseUrl}/${userData.image}`
                  : `${NoImageYet}`
              }
            />
          </div>
        </div>
        <p className="socials">
          <i className="bi bi-twitter text-dark mx-1"></i>
          <i className="bi bi-facebook text-dark mx-1"></i>
          <i className="bi bi-linkedin text-dark mx-1"></i>
          <i className="bi bi-instagram text-dark mx-1"></i>
        </p>
      </div>
    </div>
  );
}
