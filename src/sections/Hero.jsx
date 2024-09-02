import React from 'react';
import Header from '../components/layout/Header';
import HeroText from '../components/hero/HeroText';
import img from "../assets/imgs/conda.png";

const Hero = () => {
  return (
    <div id="inicio" className='bg-[#C5B4E3] flex flex-col lg:justify-between lg:h-screen w-screen'>
      <Header />
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-4 px-4 lg:px-0'> {/* Ajuste o espaço horizontal entre os itens */}
        <div className='relative lg:w-4/4 flex justify-center lg:justify-start lg:mr-4 overflow-hidden'> {/* Ajuste a margem direita */}
          <img 
            src={img} 
            className='object-cover h-auto w-full lg:w-[110%]' // Aumenta a largura da imagem em telas grandes
            alt="Imagem Hero" 
            style={{ transform: 'translateX(-10%)' }} // Ajuste a transformação conforme necessário
          />
        </div>
        <HeroText />
      </div>
    </div>
  );
}

export default Hero;
