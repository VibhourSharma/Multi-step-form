import React from "react";
import { usePlans } from "../context/Plans";

const AddOns: React.FC = () => {
  const { addOnValue, handleAddOnToggle, billingFrequency, getAddonPrice } =
    usePlans();
  return (
    <div className="p-2 text-[#02295A]">
      <h1 className="text-[32px] font-bold">Pick Add-ons</h1>
      <p className="text-[16px] text-gray-400">
        Add-ons help to enhance your gaming experience.
      </p>
      <form action="" className="flex flex-col mt-8">
        <label
          htmlFor="onlineService"
          className={`font-medium p-7 border hover:border-[#6A5BFF] transition-all flex justify-between items-center rounded-lg ${
            addOnValue.includes(1) ? "bg-[#F0F6FF] border-[#6A5BFF]" : ""
          }`}
        >
          <input
            type="checkbox"
            id="onlineService"
            value="1"
            checked={addOnValue.includes(1)}
            onChange={() => handleAddOnToggle(1)}
            className="custom-checkbox"
          />
          <div className="flex cursor-pointer">
            <div>
              <p className="font-bold text-[18px]">Online Service</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <span className="font-bold text-[#6259FF]">
            ${getAddonPrice(1)}/{billingFrequency === "monthly" ? "mo" : "yr"}
          </span>
        </label>

        <label
          htmlFor="largerStorage"
          className={`font-medium mt-4 p-7 border hover:border-[#6A5BFF] transition-all flex justify-between items-center rounded-lg ${
            addOnValue.includes(2) ? "bg-[#F0F6FF] border-[#6A5BFF]" : ""
          }`}
        >
          <input
            type="checkbox"
            id="largerStorage"
            value="2"
            checked={addOnValue.includes(2)}
            onChange={() => handleAddOnToggle(2)}
            className="custom-checkbox"
          />
          <div className="flex cursor-pointer">
            <div>
              <p className="font-bold text-[18px]">Larger Storage</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <span className="font-bold text-[#6259FF]">
            ${getAddonPrice(2)}/{billingFrequency === "monthly" ? "mo" : "yr"}
          </span>
        </label>

        <label
          htmlFor="customizableProfile"
          className={`font-medium mt-4 p-7 border hover:border-[#6A5BFF] transition-all flex justify-between items-center rounded-lg ${
            addOnValue.includes(3) ? "bg-[#F0F6FF] border-[#6A5BFF]" : ""
          }`}
        >
          <input
            type="checkbox"
            id="customizableProfile"
            value="3"
            checked={addOnValue.includes(3)}
            onChange={() => handleAddOnToggle(3)}
            className="custom-checkbox"
          />
          <div className="flex cursor-pointer">
            <div>
              <p className="font-bold text-[18px]">Customizable profile</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <span className="font-bold text-[#6259FF]">
            ${getAddonPrice(3)}/{billingFrequency === "monthly" ? "mo" : "yr"}
          </span>
        </label>
      </form>
    </div>
  );
};

export default AddOns;
