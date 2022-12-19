import "./Bio.css";
export default function Bio({ userData }) {
  return (
    <div className="bio">
      <p>{userData.bio}</p>
    </div>
  );
}
