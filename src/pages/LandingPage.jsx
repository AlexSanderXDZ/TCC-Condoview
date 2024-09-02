import React from "react";
import Hero from "../sections/Hero";
import Sobre from "../sections/Sobre";
import Indo from "../sections/Indo";
import Beneficio from "../sections/Beneficio";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Sobre />
      <Beneficio />
      <Indo />
      <Footer/>
    </div>
  );
};

export default LandingPage;
