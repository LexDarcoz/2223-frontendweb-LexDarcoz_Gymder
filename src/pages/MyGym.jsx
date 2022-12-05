import React from "react";
import "react-calendar/dist/Calendar.css";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Gymlist from "../components/Gymlist";
import Services from "../components/Services";

export default function MyGym() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <Gymlist />

      <Contact />
    </>
  );
}
