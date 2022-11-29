import Location from "../Location/Location";
import PhoneNumber from "../phoneNumber/PhoneNumber";
import "./UserCard.css";
export default function UserCard({ userData }) {
  return (
    <div className="card col-lg-3 col-md-6 col-12 p-3 m-3  ">
      <div className="card_title">
        {userData.name.first} {userData.name.last}
        <div className="card_body">
          <Location location={userData.location} />
          <PhoneNumber type="Home" number={userData.phone} />
          <PhoneNumber type="Mobile" number={userData.cell} />
          <div className="card_image">
            <img src={userData.picture.medium} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
