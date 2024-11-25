import React from "react";
import img from "../assets/imgs/indominus.png";

const SignUp = () => {
  return (
    <div className="lg:h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center w-full">
      <div className="w-full lg:w-1/4 flex  items-center">
        <img src={img} className="max-w-full h-auto" alt="Indominus" />
      </div>
      <div className="space-y-4 p-5 lg:p-20 flex flex-col justify-center lg:w-1/2">
        <h1 className="text-4xl font-bold md:text-4xl">Visite o site da Indominus também</h1>
        <p className="text-lg lg:text-3xl">Veja mais sobre nossa equipe</p> 
        <a
          href="https://site-indominus.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 py-3 px-4 font-medium text-xl rounded-md text-white bg-[#141414] hover:bg-[#333333] transition-colors duration-300 transform hover:scale-105 text-center block"
        >
          Visitar
        </a>
      </div>
      
    </div>
  );
};

export default SignUp;
