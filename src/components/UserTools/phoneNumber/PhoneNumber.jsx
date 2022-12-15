import "./PhoneNumber.css";
export default function PhoneNumber({ number, type }) {
  return (
    <div className="phoneNumber">
      <p>
        {type}: {number}
      </p>
    </div>
  );
}
