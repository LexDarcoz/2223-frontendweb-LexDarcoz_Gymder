import React from "react";
import About from "../../components/landingPage/About";
import Carousel from "../../components/landingPage/Carousel";
import Contact from "../../components/landingPage/Contact";
// heih
import Services from "../../components/landingPage/Services";
import { useAuth0 } from "@auth0/auth0-react";
import GymListTopThree from "../../components/gymTools/GymListTopThree";

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
