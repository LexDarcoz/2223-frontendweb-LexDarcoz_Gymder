import { Routes, Route } from "react-router-dom";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Equipment from "./components/Equipment";
import MyGymPlace from "./components/MyGymPlace";
import "./styling/App.css";
import MyProfile from "./components/MyProfile";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MyGymPlace />} />
        <Route path="locations" element={<Locations />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="myProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
