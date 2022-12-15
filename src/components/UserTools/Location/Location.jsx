import "./Location.css";
export default function Location({ location }) {
  return (
    <div className="location">
      <p>{location.state}</p>

      <p>{location.country}</p>
    </div>
  );
}
