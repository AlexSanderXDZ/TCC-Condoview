import logo from "../../assets/imgs/condoview.png"; 
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="header flex justify-between items-center w-full p-5 lg:px-20"
      id="logo"
    >
      <Link className="flex space-x-2 items-center" to={"/"}>
        <img src={logo} alt="Condoview Logo" className="w-8 lg:w-10" />
        <h1 className="text-xl sm:text-4xl font-bold">CondoView</h1>
      </Link>

      <div onClick={handleClick} className="lg:hidden z-10 text-2xl sm:text-4xl">
        {!nav ? <FaBars /> : <FaTimes className="hover:text-red-500" />}
      </div>

      <div className="w-3/5 justify-between items-center hidden lg:flex">
        <div className="w-2/3 flex justify-between text-black text-lg font-semibold">
          <ScrollLink
            to="inicio"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            inicio
          </ScrollLink>
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            Sobre
          </ScrollLink>
          <ScrollLink
            to="sobra"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            Sobre o app
          </ScrollLink>
          <ScrollLink
            to="proposta"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            Propostas
          </ScrollLink>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-20 left-0 w-full h-screen flex bg-[#C5B4E3] z-40 flex-col justify-center items-center"
        }
      >
        <li className="py-8 text-6xl">
          <ScrollLink
            to="inicio"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            inicio
          </ScrollLink>
        </li>
        <li className="py-8 text-6xl">
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            Sobre
          </ScrollLink>
        </li>
        <li className="py-8 text-6xl">
          <ScrollLink
            to="sobra"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            Sobre o app
          </ScrollLink>
        </li>
        <li className="py-8 text-6xl">
          <ScrollLink
            to="Proposta"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            Propostas
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
