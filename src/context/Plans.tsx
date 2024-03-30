import React, { useState, createContext, useContext, ReactNode } from "react";

interface PlansContextType {
  plansValue: string;
  setPlansValue: React.Dispatch<React.SetStateAction<string>>;
  addOnValue: string;
  setAddOnValue: React.Dispatch<React.SetStateAction<string>>;
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
  const [plansValue, setPlansValue] = useState<string>("Advanced");
  const [addOnValue, setAddOnValue] = useState<string>("");

  return (
    <PlansContext.Provider
      value={{
        plansValue,
        setPlansValue,
        addOnValue,
        setAddOnValue,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};
