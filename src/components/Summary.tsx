import { usePlans } from "../context/Plans";

const Summary = () => {
  const plans = usePlans();

  const getPlanName = () => {
    if (plans.plansValue === 9 || plans.plansValue === 90) {
      return "Arcade";
    } else if (plans.plansValue === 12 || plans.plansValue === 120) {
      return "Advanced";
    } else if (plans.plansValue === 15 || plans.plansValue === 150) {
      return "Pro";
    }
  };

  const getAddonPrice = (price: number) => {
    return plans.billingFrequency === "monthly" ? price : price * 10;
  };

  const showLocalStorage = plans.addOnValue.includes(1);
  const showOnlineService = plans.addOnValue.includes(2);
  const showCustomizableProfile = plans.addOnValue.includes(3);

  const total =
    plans.plansValue +
    (showLocalStorage ? getAddonPrice(1) : 0) +
    (showOnlineService ? getAddonPrice(2) : 0) +
    (showCustomizableProfile ? getAddonPrice(3) : 0);

  return (
    <div className="p-2 text-[#02295A]">
      <h1 className="text-[32px] font-bold">Finishing up</h1>
      <p className="text-[16px] text-gray-400">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-[#F0F6FF] p-10 rounded-lg mt-8">
        <div className="flex justify-between">
          <p className="text-xl font-medium">
            {getPlanName()} (
            {plans.billingFrequency === "monthly" ? "Monthly" : "Yearly"})
          </p>
          <p className="font-bold">
            ${plans.plansValue}/
            {plans.billingFrequency === "monthly" ? "mo" : "yr"}
          </p>
        </div>
        <div className="border my-6"></div>
        {showLocalStorage && (
          <div className="flex justify-between">
            <p>Local Storage</p>
            <p>
              ${getAddonPrice(1)}/
              {plans.billingFrequency === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        )}
        {showOnlineService && (
          <div className="flex justify-between items-center py-4">
            <p>Online Service</p>
            <p>
              ${getAddonPrice(2)}/
              {plans.billingFrequency === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        )}
        {showCustomizableProfile && (
          <div className="flex justify-between items-center">
            <p>Customizable profile</p>
            <p>
              ${getAddonPrice(3)}/
              {plans.billingFrequency === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-between p-6">
        <span className="font-bold text-xl flex gap-2">
          Total
          <p className="text-gray-400 font-medium">
            ({plans.billingFrequency === "monthly" ? "per month" : "per year"})
          </p>
        </span>
        <p className="font-bold">
          ${total}/{plans.billingFrequency === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
