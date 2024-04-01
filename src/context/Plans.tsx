import React, { useState, createContext, useContext, ReactNode } from "react";

interface PersonalInfo {
  name: string;
  email: string;
  number: number | string;
}

interface PlansContextType {
  personalData: PersonalInfo;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  plansValue: number;
  setPlansValue: React.Dispatch<React.SetStateAction<number>>;
  addOnValue: number[];
  setAddOnValue: React.Dispatch<React.SetStateAction<number[]>>;
  handlePlanToggle: (value: number) => void;
  handleAddOnToggle: (value: number) => void;
  billingFrequency: string;
  setBillingFrequency: React.Dispatch<React.SetStateAction<string>>;
  handleYearlyPlansToggle: () => void;
  getAddonPrice: (price: number) => number;
}

export const PlansContext = createContext<PlansContextType | undefined>(
  undefined
);

export const usePlans = (): PlansContextType => {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error("usePlans must be used within a PlansProvider");
  }
  return context;
};

interface PlansProviderProps {
  children: ReactNode;
}

export const PlansProvider: React.FC<PlansProviderProps> = ({ children }) => {
  const [personalData, setPersonalData] = useState<PersonalInfo>({
    name: "",
    email: "",
    number: "",
  });
  const [plansValue, setPlansValue] = useState<number>(9);
  const [addOnValue, setAddOnValue] = useState<number[]>([]);
  const [billingFrequency, setBillingFrequency] = useState<string>("monthly");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("Personal Information:", personalData);
  };

  const handlePlanToggle = (value: number) => {
    setPlansValue(value);
    console.log(`value, ${value}`);
  };

  const handleAddOnToggle = (value: number) => {
    setAddOnValue((prevValue) =>
      prevValue.includes(value)
        ? prevValue.filter((item) => item !== value)
        : [...prevValue, value]
    );
    console.log(`Value: ${value}`);
  };

  const handleYearlyPlansToggle = () => {
    setBillingFrequency((prevFrequency) =>
      prevFrequency === "monthly" ? "yearly" : "monthly"
    );
    if (billingFrequency === "monthly") {
      setPlansValue(90);
    } else {
      setPlansValue(9);
    }
  };

  const getAddonPrice = (price: number) => {
    return billingFrequency === "yearly" ? price * 10 : price;
  };

  return (
    <PlansContext.Provider
      value={{
        handleInputChange,
        handleSubmit,
        personalData,
        setPersonalData,
        plansValue,
        setPlansValue,
        addOnValue,
        setAddOnValue,
        handlePlanToggle,
        handleAddOnToggle,
        billingFrequency,
        setBillingFrequency,
        handleYearlyPlansToggle,
        getAddonPrice,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};
