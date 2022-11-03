import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Equipment() {
  const [apparaten, setApparaten] = useState(["", "", ""]);

  function addToestel() {
    setApparaten([...apparaten, ""]);
    console.log(apparaten);
  }

  function removeGuy() {
    let help = [...apparaten];
    help.pop();
    setApparaten([...help]);
  }
  return (
    <>
      <header>Current gym equipment</header>
      <div>
        {apparaten.map((element, index) => (
          <Navbar key={index} />
        ))}
      </div>
      <button className="btn btn-danger" onClick={addToestel}>
        add toestel
      </button>
      <button className="btn btn-warning" onClick={removeGuy}>
        remove
      </button>
    </>
  );
}
