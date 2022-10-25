import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Equipment from "./components/Equipment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Locations" element={<Locations />} />
        <Route path="Equipment" element={<Equipment />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
