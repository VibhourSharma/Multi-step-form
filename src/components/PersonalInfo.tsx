const PersonalInfo = () => {
  return (
    <div className="p-2 text-[#02295A]">
      <h1 className="text-[32px] font-bold">Personal Information</h1>
      <p className="text-[16px] text-gray-400">
        Please provide your name, email, address, and phone number.
      </p>
      <form action="" className="flex flex-col mt-10">
        <label htmlFor="Name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          id="Name"
          placeholder="e.g. Stephen King"
          className="p-2 rounded-lg my-2 border outline-none focus:border-[#6A5BFF] transition-all"
        />
        <label htmlFor="Email" className="font-medium mt-4">
          Email Address
        </label>
        <input
          type="email"
          id="Email"
          placeholder="e.g. StephenKing@lorem.com"
          className="p-2 rounded-lg my-2 border outline-none focus:border-[#6A5BFF] transition-all"
        />
        <label htmlFor="phoneNumber" className="font-medium mt-4">
          Phone Number
        </label>
        <input
          type="number"
          id="phoneNumber"
          placeholder="e.g. +1 2345 6789"
          className="p-2 rounded-lg my-2 border outline-none focus:border-[#6A5BFF] transition-all"
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
