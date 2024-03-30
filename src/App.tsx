import { useState } from "react";
import "./App.css";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Stepper from "./components/Stepper";
import Summary from "./components/Summary";

const stepsConfig = [
  {
    name: "Your Info",
    Component: () => <PersonalInfo />,
  },
  {
    name: "Select Plan",
    Component: () => <SelectPlan />,
  },
  {
    name: "Add-Ons",
    Component: () => <AddOns />,
  },
  {
    name: "Summary",
    Component: () => <Summary />,
  },
];

interface ButtonType {
  onClick: () => void;
}

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const goBackButton: ButtonType = {
    onClick: () => {
      setCurrentStep((prevStep: number) => {
        if (prevStep > 1) {
          return prevStep - 1;
        } else {
          return prevStep;
        }
      });
      setIsComplete(false);
    },
  };

  const nextPageButton: ButtonType = {
    onClick: () => {
      setCurrentStep((prevStep: number) => {
        if (prevStep === stepsConfig.length) {
          setIsComplete(true);
          return prevStep;
        } else {
          return prevStep + 1;
        }
      });
    },
  };

  const ActiveComponent = stepsConfig[currentStep - 1].Component;

  return (
    <div className="flex items-center justify-center bg-[#F0F6FF] w-full h-[100vh]">
      <div className="min-w-[60%] min-h-[80%] bg-white flex items-center justify-evenly">
        <Stepper
          stepsConfig={stepsConfig}
          currentStep={currentStep}
          isComplete={isComplete}
        />
        <div className="w-[65%]">
          <ActiveComponent />
          <div className="mt-6 flex justify-between p-2">
            <button onClick={goBackButton.onClick} className="underline">
              Go Back
            </button>
            <button
              onClick={nextPageButton.onClick}
              className="p-2 rounded-lg text-white bg-[#02295A]"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
