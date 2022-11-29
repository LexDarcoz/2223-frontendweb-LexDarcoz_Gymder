import { useState } from "react";
import gymList from "../../api/Mock_data/Gyms_DATA";

export default function GymList(props) {
  const [Gymlist, setGymList] = useState({ gymList });

  function addGym() {
    setGymList([...gymList, { name: "yes" }]);
    console.log(gymList);
  }

  return (
    <div>
      <button onClick={addGym}>Add a gym my dude</button>
    </div>
  );
}
