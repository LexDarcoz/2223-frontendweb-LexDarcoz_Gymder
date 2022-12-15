import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/pageOutline/Navbar";
import ContactForm from "./pages/contactForm/ContactForm";
import MyGym from "./pages/myGym/MyGym";
import MyProfile from "./pages/userProfile/MyProfile";
import "./styling/App.css";
import NotFound from "./components/tools/NotFound";
import { I18nProvider, LOCALES } from "./Translation/i18n";
import Footer from "./components/pageOutline/Footer";
import AddGym from "./pages/addGym/AddGym";
import AuthLanding from "./components/authentication/AuthLanding";
import LandingPage from "./pages/LandingPage";
import Discover from "./pages/userList/Discover";
import ScrollToTop from "./components/tools/ScrollToTop";
import Settings from "./pages/settings/Settings";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  function languageFunct(language) {
    setLocale(language);
  }
  return (
    <>
      <I18nProvider locale={locale}>
        <Navbar languageFunct={languageFunct} />
        <ScrollToTop />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="login" element={<AuthLanding />} />
          <Route path="myGym" element={<MyGym />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="addGym" element={<AddGym />} />
          <Route path="discover" element={<Discover />} />
          <Route path="/myProfile/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </I18nProvider>
    </>
  );
}

export default App;
