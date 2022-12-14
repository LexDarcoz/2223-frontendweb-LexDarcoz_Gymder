import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Locations from "./pages/locations/Locations";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/contactForm/ContactForm";
import Equipment from "./pages/ToBeContinued/Equipment";
import MyGym from "./pages/MyGym";
import MyProfile from "./pages/userProfile/MyProfile";
import "./styling/App.css";
import NotFound from "./pages/NotFound";
import { I18nProvider, LOCALES } from "./Translation/i18n";

import Footer from "./components/Footer";
import AddGym from "./pages/addGym/AddGym";

import UserList from "./pages/userList/UserList";
import AuthLanding from "./components/authentication/AuthLanding";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  function languageFunct(language) {
    setLocale(language);
  }
  return (
    <>
      <I18nProvider locale={locale}>
        <Navbar languageFunct={languageFunct} />
        <Routes>
          <Route index element={<MyGym />} />

          <Route path="locations" element={<Locations />} />
          <Route path="apparaten" element={<Equipment />} />
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="/login" element={<AuthLanding />} />

          <Route path="myProfile" element={<MyProfile />} />
          <Route path="addGym" element={<AddGym />} />
          <Route path="discover" element={<UserList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </I18nProvider>
    </>
  );
}

export default App;
