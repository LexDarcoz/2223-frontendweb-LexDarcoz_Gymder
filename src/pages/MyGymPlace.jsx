import { useState } from "react";
import { Calendar } from "react-calendar";

import "react-calendar/dist/Calendar.css";
export default function MyGymPlace() {
  const [level, setLevel] = useState();

  function lvlFunc() {

  }

  return (
    <>
      <div style={{ color: "#ecdf8f" }}>
        <h4>Welcome (hier komt user)!</h4>
        <div id="User-Level">
          My level: {level}
          <br />
          (hier komt xp bar)
        </div>
        <div>
          <button className="btn btn-info">Click me to add xp</button>
        </div>
        <div id="calendar" className="ca" style={{ backgroundColor: "black" }}>
          <Calendar />
        </div>
      </div>
    </>
  );
}
