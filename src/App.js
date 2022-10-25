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
        <Route path="Locations" element={<Locations />} />
        <Route path="Equipment" element={<Equipment />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
