import React from "react";
import About from "../components/LandingPage/About";
import Carousel from "../components/LandingPage/Carousel";
import Contact from "../components/LandingPage/Contact";
import Gymlist from "../components/Gymlist";
import Services from "../components/LandingPage/Services";
import { useAuth0 } from "@auth0/auth0-react";

export default function MyGym() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Carousel />
      <About />
      <Services />

      {isAuthenticated ? <Gymlist /> : null}

      <Contact />
    </>
  );
}
