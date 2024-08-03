"use client";
import Image from "next/image";

const Foot = () => {
  return (
    <footer className="bg-[#191C20] ">
      <div className="max-w-[1365px] w-full mx-auto pt-[71px] pb-[60px] xl:pl-[71px] xl:px-0 md:px-8 px-[20px]">
        <Image
          src={"image/register-logo.svg"}
          alt="My Image"
          width={123}
          height={40}
        />
        <div className="flex lg:items-center mt-[62px] gap-[88px] lg:flex-row flex-col">
          <div className="max-w-[350px] w-[100%] ">
            <h3 className="font-[600] text-[40px] leading-[52px] font-Assistant text-[#FFFFFF]">
              Speak to our experts
            </h3>
            <p className="font-[400] text-[16px] leading-[20px] font-Assistant mt-[22px] mb-[44px] text-[#FFFFFF]">
              Please don't hesitate to reach out to us. Our team of experts is
              always available and prepared to address and resolve any inquiries
              you may have.
            </p>
            <button className="bg-[#23A6F0] text-[#FFFFFF] py-[15px] px-[25px] flex items-center gap-[15px] rounded-[5px] font-[700] text-[14px] leading-[22px]">
              Enquire now
              <Image
                src={"image/arrow-left.svg"}
                alt="arrow"
                width={12}
                height={10}
              />
            </button>
          </div>
          <div className="xl:flex-1 w-auto">
            <div className="flex md:items-center gap-[40px] max-w-[869px] w-[100%] md:flex-row flex-col">
              <div className="bg-[#ECECEC] relative md:max-w-[446px] w-[100%] py-[12px] md:px-[33px] px-4 rounded-[8px]">
                <h2 className="font-[700] text-[16px] leading-[20px] mb-1 text-[#000000] font-Montserrat">
                  Email
                </h2>
                <p className="font-[400] text-[16px] leading-[20px] text-[#000000] font-Assistant">
                  virtualoffice@teamco.work
                </p>
                <Image
                  src={"image/message.svg"}
                  alt="My Image"
                  width={46}
                  height={46}
                  className="absolute top-[-28px] right-[23px]"
                />
              </div>
              <div className="bg-[#ECECEC] relative md:max-w-[446px] w-[100%] py-[12px] md:px-[33px] px-4 rounded-[8px]">
                <h2 className="font-[700] text-[16px] leading-[20px] mb-1 text-[#000000] font-Montserrat">
                  Telephone
                </h2>
                <p className="font-[400] text-[16px] leading-[20px] text-[#000000] font-Assistant">
                  +91 93112 21210
                </p>
                <Image
                  src={"image/message.svg"} //telephone image is not exported from figma
                  alt="telephone"
                  width={46}
                  height={46}
                  className="absolute top-[-28px] right-[23px]"
                />
              </div>
            </div>
            <div className="bg-[#ECECEC] relative max-w-[869px] w-[100%] py-[12px] md:px-[33px] px-4 rounded-[8px] mt-[44px]">
              <h2 className="font-[700] text-[16px] leading-[20px] mb-1 text-[#000000] font-Montserrat">
                Location
              </h2>
              <p className="font-[400] text-[16px] leading-[20px] text-[#000000] font-Assistant">
                704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007
              </p>
              <Image
                src={"image/message.svg"} //location image is not exported from figma
                alt="loaction "
                width={46}
                height={46}
                className="absolute top-[-28px] right-[23px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2B2F33] py-[16px]">
        <p className="text-center text-[#C2C2C2] font-[700] text-[15px] leading-[28px] font-Montserrat">
          © 2024 - Safe Ledger Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Foot;
