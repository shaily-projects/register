"use client";
const Form = () => {
  return (
      <form className="">
        <div className="flex items-center gap-[14px]">
          <div className="max-w-[203px] w-[100%]">
            <label className="text-[14px] font-[400] leading-[21px] text-[#344054] font-Raleway w-[100%]">
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="font-[400] text-[#667085] text-[12px] leading-[21px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] outline-none mt-[5px] font-Raleway w-[100%]
                        shadow-[0_0.91px_1.82px_0px_#1018280D]
                        "
            />
          </div>
          <div className="max-w-[203px] w-[100%]">
            <label className="text-[14px] font-[400] leading-[21px] text-[#344054] font-Raleway w-[100%]">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="font-[400] text-[#667085] text-[12px] leading-[21px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] outline-none mt-[5px] font-Raleway w-[100%]
                        shadow-[0_0.91px_1.82px_0px_#1018280D]
                        "
            />
          </div>
        </div>
        <div className="flex items-center gap-[14px] mt-[8px]">
          <div className="max-w-[203px] w-[100%] flex flex-col">
            <label className="text-[14px] font-[400] leading-[21px] text-[#344054] font-Raleway w-[100%]">
              City
            </label>
            <input
              type="text"
              placeholder="City name"
              className="font-[400] text-[#667085] text-[12px] leading-[21px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] outline-none mt-[5px] font-Raleway w-[100%]
                        shadow-[0_0.91px_1.82px_0px_#1018280D]
                        "
            />
          </div>
          <div className="max-w-[203px] w-[100%] flex flex-col">
            <label className="text-[14px] font-[400] leading-[21px] text-[#344054] font-Raleway w-[100%]">
              Designation
            </label>
            <input
              type="text"
              placeholder="Your Designation"
              className="font-[400] text-[#667085] text-[12px] leading-[21px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] outline-none mt-[5px] font-Raleway w-[100%]
                        shadow-[0_0.91px_1.82px_0px_#1018280D]
                        "
            />
          </div>
        </div>
        <div className="flex items-center gap-[14px] mt-[8px]">
          <div className="w-[100%] flex flex-col">
            <label className='text-[14px] font-[400] leading-[21px] text-[#344054] font-["Raleway"] w-[100%]'>
              Mobile
            </label>
            <input
              type="number"
              placeholder="Mobile no."
              className="font-[400] text-[#667085] text-[12px] leading-[21px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] outline-none mt-[5px] font-Raleway w-[100%]
                        shadow-[0_0.91px_1.82px_0px_#1018280D]
                        "
            />
          </div>
        </div>
        <div className="flex items-center gap-[14px] mt-[8px]">
          <div className="w-[100%] flex flex-col">
            <label className="text-[14px] font-[400] leading-[21px] text-[#344054] font-Raleway w-[100%]">
              Email
            </label>
            <input
              type="email"
              placeholder="Email ID"
              className="font-[400] text-[#667085] text-[12px] leading-[21px] border border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] outline-none mt-[5px] font-Raleway w-[100%]
                        shadow-[0_0.91px_1.82px_0px_#1018280D]
                        "
            />
          </div>
        </div>
        <button className="bg-[#3424C2] text-[#ffffff] mt-[32px] w-[100%] py-[10px] rounded-[8px] font-[700] text-[14px] leading-[28px] font-Montserrat">
          Submit
        </button>
      </form>
  );
};

export default Form;
