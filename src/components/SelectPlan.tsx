import React from "react";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import arcade from "../assets/images/icon-arcade.svg";
import Toggle from "./Toggle";

const SelectPlan = () => {
  const images = [arcade, advanced, pro];

  return (
    <div className="p-2 text-[#02295A] flex flex-col">
      <h1 className="text-[32px] font-bold">Select your plan</h1>
      <p className="text-[16px] text-gray-400">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className="flex mt-8 gap-4">
        {["Arcade", "Advanced", "Pro"].map((categories, index) => {
          return (
            <label
              htmlFor="online service"
              className="font-medium border hover:border-[#6A5BFF] transition-all flex flex-col rounded-lg w-[33%] h-[25vh] justify-between p-4"
              key={index}
            >
              <input type="checkbox" className="hidden" onChange={() => {}} />
              <img src={images[index]} alt="" className="h-12 w-12" />
              <div>
                <p className="font-bold text-sm">{categories}</p>
                <span className="text-gray-400 text-sm">$10/yr</span>
              </div>
            </label>
          );
        })}
      </form>
      <span className="flex gap-4 items-end justify-center mt-4">
        <p className="text-sm font-bold">Monthly</p>
        <Toggle />
        <p className="text-sm font-bold">Yearly</p>
      </span>
    </div>
  );
};

export default SelectPlan;
