import React from 'react';
import { motion } from 'framer-motion';

const HeroText = () => {
  // URL do arquivo beta do app
  const betaAppUrl = 'https://example.com/path/to/beta-app.apk'; 

  return (
    <motion.div
      className="w-full lg:w-1/2 px-5 lg:px-0 lg:ml-20 my-10"
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, stiffness: 100, type: 'spring' }}
    >
      <div className="space-y-5 mb-5">
        <h1 className="text-[#141414] font-bold hero-text text-4xl lg:text-5xl leading-[30px] lg:leading-[45px] tracking-[-2%] lg:tracking-[-2.5%]">
          Sistema e Aplicativo para Administração de Condomínios
        </h1>
        <p className="text-gray-800 font-normal text-lg lg:text-xl leading-6 lg:leading-8">
          INOVAÇÃO QUE TRANSFORMA CONDOMÍNIOS
        </p>
      </div>
      <div className="space-y-5">
        <a 
          href={betaAppUrl} 
          download 
          className="inline-block px-6 py-3 bg-[#6D28D9] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#4C1D95] transition duration-300"
        >
          Baixe Nossa Versão Beta para Android
        </a>
      </div>
    </motion.div>
  );
};

export default HeroText;