import React from 'react';
import btn1 from '../../assets/hero/play_store.svg';
import btn2 from '../../assets/hero/apple-store-black.svg';
import btnsm from '../../assets/hero/apple-sm.svg';
import btn2sm from '../../assets/hero/playstore-sm.svg';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 px-5 lg:px-0 lg:ml-20 my-10"
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, stiffness: 100, type: 'spring' }}
    >
      <div className="space-y-5 mb-5">
        <h1 className="text-[141414] font-bold hero-text text-4xl lg:text-5xl leading-[30px] lg:leading-[45px] tracking-[-2%] lg:tracking-[-2.5%]">
        Sistema e Aplicativo para Administração de Condomínios
        </h1>
        <p className="text-[#475467] font-light text-lg lg:text-xl leading-6 lg:leading-8">
        INOVAÇÃO QUE TRANSFORMA CONDOMINIOS
        </p>
      </div>
      <div className="hidden lg:flex lg:space-x-5">
        <img src={btn1} className="w-40" alt="Disponível no Google Play" />
        <img src={btn2} className="w-40" alt="Baixar na App Store" />
      </div>
      <div className="block lg:hidden space-y-5">
        <img src={btnsm} className="w-full sm:w-96" alt="Baixar na App Store" />
        <img src={btn2sm} className="w-full sm:w-96" alt="Disponível no Google Play" />
      </div>
    </motion.div>
  );
};

export default HeroText;
