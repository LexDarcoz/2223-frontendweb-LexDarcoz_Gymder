import { Routes, Route } from "react-router-dom";
import Locations from "./pages/location/Locations";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Equipment from "./pages/Equipment";
import MyGymPlace from "./pages/MyGymPlace";
import MyProfile from "./pages/MyProfile";
import "./styling/App.css";
import Form from "./pages/login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MyGymPlace />} />
        <Route path="locations" element={<Locations />} />
        <Route path="apparaten" element={<Equipment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="myProfile" element={<MyProfile />} />
        {/* <Route path="login" element={<Form />} /> */}
      </Routes>
    </>
  );
}

export default App;
