import "./Location.css";
export default function Location({ location }) {
  return (
    <div className="location">
      <p>
        {location.street.number}, {location.street.name}
      </p>
      <p>{location.city}</p>
      <p>{location.state}</p>
      <p>{location.postcode}</p>
      <p>{location.country}</p>
    </div>
  );
}
