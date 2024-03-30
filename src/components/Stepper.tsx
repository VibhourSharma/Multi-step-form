import bgsidebar from "../assets/images/bg-sidebar-desktop.svg";

interface StepsConfigType {
  name: string;
  Component: () => JSX.Element;
}

const Stepper: React.FC<{
  stepsConfig: StepsConfigType[];
  currentStep: number;
  isComplete: boolean;
}> = ({ stepsConfig, isComplete, currentStep }) => {
  return (
    <div className="p-2">
      <img src={bgsidebar} alt="Background Sidebar" className=" object-cover" />
      <div className="absolute top-20 w-68 ml-8 mt-8 flex flex-col gap-10">
        {stepsConfig.map((step, index) => {
          return (
            <div className="flex gap-4" key={step.name}>
              <span
                className={`text-white w-10 h-10 rounded-full flex items-center justify-center border border-white cursor-pointer ${
                  currentStep === index + 1
                    ? "bg-[#BFE2FD] text-black border-none"
                    : ""
                } transition-all`}
              >
                {index + 1}
              </span>
              <div className="flex flex-col text-white">
                <span>Step {index + 1}</span>
                <span className="uppercase font-bold"> {step.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
