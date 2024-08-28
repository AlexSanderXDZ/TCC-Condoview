import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center text-center md:pt-20 pb-10 p-5">
      <div className="w-full lg:w-3/5 space-y-4 lg:space-y-5">
        <h1 className="text-[#111827] text-3xl font-bold md:text-5xl">
          Sobre o CondoView
        </h1>
        <p className=" text-center text-[#525252] text-lg lg:text-xl">
        CondoView é um aplicativo para gestão de condomínios que visa facilitar a
        omunicação entre moradores, administradores e síndicos. O aplicativo inclui
        funcionalidades para visualização de avisos, gerenciamento de despesas, encomendas,
        reservas e muito mais.
        </p>
      </div>
    </div>
  );
};

export default Header;
