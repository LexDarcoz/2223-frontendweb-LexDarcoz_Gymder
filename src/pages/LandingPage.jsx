import React from "react";
import About from "../components/LandingPage/About";
import Carousel from "../components/LandingPage/Carousel";
import Contact from "../components/LandingPage/Contact";
// heih
import Services from "../components/LandingPage/Services";
import { useAuth0 } from "@auth0/auth0-react";
import GymListTopThree from "../components/gymTools/GymListTopThree";

export default function LandingPage() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Carousel />
      <About />
      <Services />

      {isAuthenticated ? <GymListTopThree /> : null}

      <Contact />
    </>
  );
}
