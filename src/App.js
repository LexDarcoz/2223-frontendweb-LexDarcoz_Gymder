import { Routes, Route } from "react-router-dom";
import Locations from "./pages/Locations";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Equipment from "./pages/Equipment";
import MyGym from "./pages/MyGym";
import MyProfile from "./pages/MyProfile";
import "./styling/App.css";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MyGym />} />
        <Route path="locations" element={<Locations />} />
        <Route path="apparaten" element={<Equipment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="login" element={<Form />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
