import { useState } from "react";
import "./App.css";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Stepper from "./components/Stepper";
import Summary from "./components/Summary";
import Confirmation from "./components/Confirmation";
import { usePlans } from "./context/Plans";
import { Toaster, toast } from "sonner";

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

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { personalData } = usePlans();

  const handleSumbit = () => {
    if (!personalData.name || !personalData.email || !personalData.number) {
      toast.error("Please fill out your Information");
      setCurrentStep(1);
      return;
    }
    setIsComplete(true);
  };

  const goBackButton = {
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

  const nextPageButton = {
    onClick: () => {
      setCurrentStep((prevStep: number) => {
        if (prevStep === stepsConfig.length) {
          handleSumbit();
          return prevStep;
        } else {
          return prevStep + 1;
        }
      });
    },
  };

  const ActiveComponent = stepsConfig[currentStep - 1].Component;

  return (
    <div className="flex items-center justify-center bg-[#F0F6FF] w-full h-[100vh] rounded-lg">
      <div className="min-w-[60%] min-h-[80%] bg-white flex items-center justify-evenly">
        <Stepper stepsConfig={stepsConfig} currentStep={currentStep} />
        <div className="w-[65%]">
          {isComplete ? (
            <Confirmation />
          ) : (
            <>
              <ActiveComponent />
              <Toaster position="top-right" richColors />
              <div className="mt-6 flex justify-between p-2">
                {currentStep > 1 ? (
                  <button onClick={goBackButton.onClick} className="underline">
                    Go Back
                  </button>
                ) : (
                  <div></div>
                )}
                <button
                  onClick={nextPageButton.onClick}
                  className={`h-11 w-24 rounded-lg text-white bg-[#02295A] ${
                    currentStep === stepsConfig.length ? "bg-[#483EFF]" : ""
                  }`}
                >
                  {currentStep === stepsConfig.length ? "Confirm" : "Next Page"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
