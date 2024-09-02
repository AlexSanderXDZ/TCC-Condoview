import React from "react";
import img from "../assets/imgs/sa.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useGlobalState } from "../store";

const Benefits = () => {
  const [benefits] = useGlobalState("benefits");
  return (
    <div
      className="bg-[#FAFAFA] lg:flex justify-between px-5 py-12 lg:p-20"
      id="proposta"
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
        <img src={img} className="lg:w-[90%] mt-6 lg:mt-0" alt="" />
      </div>
      <div className="w-full lg:w-1/2 space-y-3 mt-5">
        <h1 className="text-[#111827] text-3xl font-bold lg:text-4xl mb-6">
          Propostas
        </h1>
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="flex bg-white items-center space-x-3 shadow-md p-6 lg:p-5 rounded-lg"
          >
            <FaRegCircleCheck className="text-2xl text-black-500" />
            <p className="text-base lg:text-xl">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
