import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import SignUp from "../sections/Indo";
import Benefits from "../sections/Benefits";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <SignUp />
      <Benefits />
      <Footer/>
    </div>
  );
};

export default LandingPage;
