import tick from "../assets/images/icon-thank-you.svg";
import { usePlans } from "../context/Plans";

const Confirmation = () => {
  const { personalData } = usePlans();
  return (
    <div className="p-2 text-[#02295A] flex flex-col items-center justify-center">
      <img src={tick} alt="" />
      <p className="text-[32px] font-bold mt-6">Thank you!</p>
      <p className="text-[16px] text-gray-400 w-[30rem] text-center mt-2">
        Thanks for checking out the project, {personalData.name}. I hope you
        liked it. Visit vibhour.vercel.app for more such projects. Also, for any
        feedback please feel free to email at vibhour121@gmail.com.
      </p>
    </div>
  );
};

export default Confirmation;
