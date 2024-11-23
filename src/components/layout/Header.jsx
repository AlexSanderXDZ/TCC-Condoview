import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="header flex justify-between items-center w-full p-5 lg:px-20 bg-[#C5B4E3] shadow-md sticky top-0 z-50"
      id="logo"
    >
      <Link className="flex space-x-2 items-center" to={"/"}>
        <h1 className="text-xl sm:text-4xl font-bold text-[#141414]">CondoView</h1>
      </Link>

      {/* Botão do menu hambúrguer */}
      <div
        onClick={handleClick}
        className="lg:hidden z-50 text-2xl sm:text-4xl text-[#141414] cursor-pointer transition-transform transform hover:scale-110"
      >
        {!nav ? <FaBars /> : <FaTimes className="hover:text-red-500" />}
      </div>

      {/* Menu Desktop */}
      <div className="w-3/5 justify-between items-center hidden lg:flex">
        <div className="w-2/3 flex justify-between text-black text-lg font-semibold">
          <ScrollLink
            to="Início"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            Início
          </ScrollLink>
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            Sobre
          </ScrollLink>
          <ScrollLink
            to="sobra"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            Sobre o app
          </ScrollLink>
          <ScrollLink
            to="proposta"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            Propostas
          </ScrollLink>
        </div>
      </div>

      {/* Menu Mobile */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#6D28D9] text-white flex flex-col items-center justify-center transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <li className="py-8 text-4xl font-semibold hover:scale-105 transition-transform">
          <ScrollLink
            to="Início"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="cursor-pointer"
          >
            Início
          </ScrollLink>
        </li>
        <li className="py-8 text-4xl font-semibold hover:scale-105 transition-transform">
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="cursor-pointer"
          >
            Sobre
          </ScrollLink>
        </li>
        <li className="py-8 text-4xl font-semibold hover:scale-105 transition-transform">
          <ScrollLink
            to="sobra"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="cursor-pointer"
          >
            Sobre o app
          </ScrollLink>
        </li>
        <li className="py-8 text-4xl font-semibold hover:scale-105 transition-transform">
          <ScrollLink
            to="Proposta"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="cursor-pointer"
          >
            Propostas
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
