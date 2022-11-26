import Location from "../Location/Location";
import PhoneNumber from "../phoneNumber/PhoneNumber";
import "./UserCard.css";
export default function UserCard({ userData }) {
  console.log("why you ghef to be mad");
  return (
    <div className="card col-12 col-md-12 col-lg-4 mx-auto p-5">
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
