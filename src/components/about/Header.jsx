import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center text-center md:pt-20 pb-10 p-5">
      <div className="w-full lg:w-3/5 space-y-4 lg:space-y-5">
        <h1 className="text-[#111827] text-3xl font-bold md:text-5xl">
          Sobre o CondoView
        </h1>
        <p className=" text-center text-[#525252] text-lg lg:text-xl">
        O CondoView é um aplicativo inovador desenvolvido para transformar
         a maneira como condomínios são administrados. Projetado com foco na 
         praticidade, acessibilidade e eficiência, ele atua como uma ponte
          entre moradores, administradores e síndicos, promovendo uma comunicação 
          mais clara e ágil dentro do condomínio.
        </p>
      </div>
    </div>
  );
};

export default Header;
