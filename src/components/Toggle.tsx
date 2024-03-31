// import { usePlans } from "../context/Plans";

// const Toggle = () => {
//   const plans = usePlans();
//   return (
//     <label
//       htmlFor="AcceptConditions"
//       className="relative h-7 w-[52px] cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-500 mt-4"
//     >
//       <input
//         type="checkbox"
//         id="AcceptConditions"
//         className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
//         onChange={plans.handleYearlyPlansToggle}
//       />
//       <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-5 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-blue-600">
//         <svg
//           data-unchecked-icon
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-4 w-4"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//             clip-rule="evenodd"
//           />
//         </svg>

//         <svg
//           data-checked-icon
//           xmlns="http://www.w3.org/2000/svg"
//           className="hidden h-4 w-4"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//             clip-rule="evenodd"
//           />
//         </svg>
//       </span>
//     </label>
//   );
// };

// export default Toggle;

import React from "react";
import { usePlans } from "../context/Plans";

const Toggle = () => {
  const { billingFrequency, handleYearlyPlansToggle } = usePlans();

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative h-7 w-[52px] cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-500 mt-4"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
        onChange={handleYearlyPlansToggle}
        checked={billingFrequency === "yearly"}
      />
      <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-5 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-blue-600">
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${billingFrequency === "yearly" ? "hidden" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${billingFrequency !== "yearly" ? "hidden" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </label>
  );
};

export default Toggle;
