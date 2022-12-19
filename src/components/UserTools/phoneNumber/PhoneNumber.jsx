import "./PhoneNumber.css";
export default function PhoneNumber({ userData }) {
  return (
    <div className="phoneNumber">
      <p>
        Mobile:+
        {userData.phoneNumber
          ? userData.phoneNumber
          : "Information not available"}
      </p>
    </div>
  );
}
