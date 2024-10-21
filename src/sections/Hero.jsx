import React from 'react';
import Header from '../components/layout/Header';
import HeroText from '../components/hero/HeroText';
import img from "../assets/imgs/conda.png";

const Hero = () => {
  return (
    <div id="inicio" className='bg-[#C5B4E3] flex flex-col lg:justify-between lg:h-screen w-screen'>
      <Header />
      <div className='lg:flex lg:justify-between'>
        <HeroText />
        <div className='lg:w-5/9 flex justify-end '> 
          <img src={img} className='w-full h-auto' alt="Imagem Hero" />
        </div>
      </div>
    </div>
  );
}
export default Hero;