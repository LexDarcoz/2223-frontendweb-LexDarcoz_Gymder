import { Routes, Route } from "react-router-dom";
import Locations from "./pages/locations/Locations";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/contactForm/ContactForm";
import Equipment from "./pages/ToBeContinued/Equipment";
import MyGym from "./pages/MyGym";
import MyProfile from "./pages/userProfile/MyProfile";
import "./styling/App.css";
import NotFound from "./pages/NotFound";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Footer from "./components/Footer";
import AddGym from "./pages/addGym/AddGym";
import UserList from "./pages/userList/UserList";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<MyGym />} />

        <Route path="locations" element={<Locations />} />
        <Route path="apparaten" element={<Equipment />} />
        <Route path="contactForm" element={<ContactForm />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="addGym" element={<AddGym />} />
        <Route path="discover" element={<UserList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
