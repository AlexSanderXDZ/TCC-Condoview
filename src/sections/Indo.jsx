import React from "react";
import img from "../assets/imgs/indominus.png";

const SignUp = () => {
  return (
    <div className="lg:h-screen flex-col flex lg:flex-row lg:justify-between lg:items-center w-full">
      <div className="space-y-4 p-5 lg:p-20 flex flex-col justify-center lg:w-1/2">
        <h1 className="text-4xl font-bold md:text-4xl">Visite a Indominus Também</h1>
        <p className="text-lg lg:3xl">E veja sobre nossa equipe</p> 
        <a
          href="https://indominus.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 py-3 px-4 font-medium text-xl rounded-md text-white bg-[#141414] hover:bg-[#333333] transition-colors duration-300 transform hover:scale-105 text-center block"
        >
          Visitar
        </a>
      </div>
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img src={img} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
