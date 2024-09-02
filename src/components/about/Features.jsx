import React from "react";
import hero from "../../assets/imgs/sb.jpg";
import { useGlobalState } from "../../store";
import { FaRegCircleCheck } from "react-icons/fa6";

const Features = () => {
  const [about] = useGlobalState("about");
  return (
    <div className="lg:flex justify-center lg:justify-between items-center lg:space-x-8 p-5">
      <div className="lg:w-1/3 w-full mx-auto">
        <img
          src={hero}
          className="w-full h-auto max-h-[600px] object-cover object-top rounded-lg shadow-lg"
          alt="Hero"
        />
      </div>

      <div className="w-full lg:w-1/2 py-10 px-5 lg:px-0 space-y-4">
        <h1 className="text-[#111827] text-3xl font-bold md:text-4xl mb-4">
          Sobre o App
        </h1>
        {about.map((item, i) => (
          <div
            key={i}
            className="flex items-center space-x-3 bg-[#FEFBE8] p-5 rounded-lg"
          >
            <FaRegCircleCheck className="text-2xl text-black-500" />
            <p className="text-xl lg:text-2xl">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
