import React from 'react';
import Header from '../components/layout/Header';
import HeroText from '../components/hero/HeroText';
import img from "../assets/imgs/conda.png";

const Hero = () => {
  return (
    <div id="inicio" className="bg-[#C5B4E3] flex flex-col lg:justify-between lg:min-h-screen w-screen">
      <Header />
      <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">
        {/* Primeira imagem (aparece em telas menores, some em maiores) */}
        <div className="lg:w-5/9 flex justify-end"> 
          <img src={img} className="block lg:hidden w-full h-auto" alt="Imagem Hero" />
        </div>

        {/* HeroText com margem personalizada */}
        <HeroText className="lg:mt-10" />

        {/* Segunda imagem (some em telas menores, aparece em maiores) */}
        <div className="lg:w-5/9 flex justify-end"> 
          <img src={img} className="hidden lg:block w-full h-auto" alt="Imagem Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
