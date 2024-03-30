import React, { useState } from "react";

interface Checkboxes {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

const AddOns: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<Checkboxes>({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCheckboxToggle = (checkbox: keyof Checkboxes) => {
    setCheckboxes({
      ...checkboxes,
      [checkbox]: !checkboxes[checkbox],
    });
  };

  return (
    <div className="p-2 text-[#02295A]">
      <h1 className="text-[32px] font-bold">Pick Add-ons</h1>
      <p className="text-[16px] text-gray-400">
        Add-ons help to enhance your gaming experience.
      </p>
      <form action="" className="flex flex-col mt-8">
        <label
          htmlFor="online service"
          className={`font-medium p-7 border hover:border-[#6A5BFF] transition-all flex justify-between items-center rounded-lg ${
            checkboxes.onlineService ? "bg-[#F0F6FF] border-[#6A5BFF]" : ""
          }`}
          onClick={() => handleCheckboxToggle("onlineService")}
        >
          <div className="flex">
            <input
              type="checkbox"
              className="mr-4"
              checked={checkboxes.onlineService}
              onChange={() => {}}
            />
            <div>
              <p className="font-bold text-[18px]">Online Service</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <span>$10/yr</span>
        </label>

        <label
          htmlFor="larger storage"
          className={`font-medium mt-4 p-7 border hover:border-[#6A5BFF] transition-all flex justify-between items-center rounded-lg ${
            checkboxes.largerStorage ? "bg-[#F0F6FF] border-[#6A5BFF]" : ""
          }`}
          onClick={() => handleCheckboxToggle("largerStorage")}
        >
          <div className="flex">
            <input
              type="checkbox"
              className="mr-4"
              checked={checkboxes.largerStorage}
              onChange={() => {}}
            />
            <div>
              <p className="font-bold text-[18px]">Larger Storage</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <span>$20/yr</span>
        </label>

        <label
          htmlFor="customizable profile"
          className={`font-medium mt-4 p-7 border hover:border-[#6A5BFF] transition-all flex justify-between items-center rounded-lg ${
            checkboxes.customizableProfile
              ? "bg-[#F0F6FF] border-[#6A5BFF]"
              : ""
          }`}
          onClick={() => handleCheckboxToggle("customizableProfile")}
        >
          <div className="flex">
            <input
              type="checkbox"
              className="mr-4"
              checked={checkboxes.customizableProfile}
              onChange={() => {}}
            />
            <div>
              <p className="font-bold text-[18px]">Customizable profile</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <span>$20/yr</span>
        </label>
      </form>
    </div>
  );
};

export default AddOns;
