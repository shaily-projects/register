import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Virtual() {
  return (
    <section className="md:py-[70px] pt-[130px] bg-bgGray">
      <div className="container lg:!px-2">
        <div className="flex items-center lg:flex-row flex-col">
          <div className="flex w-full lfg:w-1/2 flex-col">
            <h2 className=" md:mb-6 mb-4 md:text-4xl text-3xl md:text-[52px]">
              Use Virtual Address For
            </h2>
            <ul className="flex flex-col gap-8 lg:gap-[50px]">
              <li className="flex gap-4 md:gap-[40px] items-center">
                <Image
                  src={"assets/virtual/virtual_1.svg"}
                  width={100}
                  height={100}
                  className="max-w-[70px] max-h-[70px] md:max-w-[100px] md:max-h-[100px] "
                />
                <div className="flex flex-col">
                  <h3 className="text-lg	xl:text-3xl md:text-xl	text-blue font-semibold mb-2 md:mb-3">
                    Company Registration
                  </h3>
                  <p className="text-[#777777]">
                    {" "}
                    Enhance your professional image and organizational presence
                    by choosing a virtual address over your residential one.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 md:gap-[40px] items-center">
                <Image
                  src={"assets/virtual/virtual_2.svg"}
                  width={100}
                  height={100}
                  className="max-w-[70px] max-h-[70px] md:max-w-[100px] md:max-h-[100px] "
                />
                <div className="flex flex-col">
                  <h3 className="text-lg	xl:text-3xl md:text-xl	text-blue font-semibold mb-2 md:mb-3">
                    Streamlined GST Registration
                  </h3>
                  <p className="text-[#777777]">
                    Simplify your GST registration process through the use of a
                    virtual address, meeting government requirements efficiently
                    and affordably.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 md:gap-[40px] items-center">
                <Image
                  src={"assets/virtual/virtual_3.svg"}
                  width={100}
                  height={100}
                  className="max-w-[70px] max-h-[70px] md:max-w-[100px] md:max-h-[100px] "
                />
                <div className="flex flex-col">
                  <h3 className="text-lg	xl:text-3xl md:text-xl	text-blue font-semibold mb-2 md:mb-3">
                    Centralized Business Hub
                  </h3>
                  <p className="text-[#777777]">
                    Establish your virtual office as the hub of your business
                    operations, utilizing it as your official business and
                    mailing address, ensuring efficient mail handling without
                    physical office space constraints.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 md:gap-[40px] items-center">
                <Image
                  src={"assets/virtual/virtual_4.svg"}
                  width={100}
                  height={100}
                  className="max-w-[70px] max-h-[70px] md:max-w-[100px] md:max-h-[100px] "
                />
                <div className="flex flex-col">
                  <h3 className="text-lg	xl:text-3xl md:text-xl	text-blue font-semibold mb-2 md:mb-3">
                    Efficient Call Management
                  </h3>
                  <p className="text-[#777777]">
                    Ensure seamless communication with clients and stakeholders
                    by routing all calls to your virtual address, where a
                    virtual receptionist provides professional and prompt
                    responses.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 md:gap-[40px] items-center">
                <Image
                  src={"assets/virtual/virtual_5.svg"}
                  width={100}
                  height={100}
                  className="max-w-[70px] max-h-[70px] md:max-w-[100px] md:max-h-[100px] "
                />
                <div className="flex flex-col">
                  <h3 className="text-lg	xl:text-3xl md:text-xl	text-blue font-semibold mb-2 md:mb-3">
                    Flexible Meeting Solutions
                  </h3>
                  <p className="text-[#777777]">
                    Impress investors and clients with access to fully-equipped
                    meeting facilities, including boardrooms and conference
                    rooms, available on-demand without the commitment of
                    traditional office leases.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex w-full lg:w-1/2 justify-end lg:ps-10 lg:pt-0 pt-10 justify-center">
            <Image
              src={"assets/virtual.png"}
              width={526}
              height={700}
              className="max-h-[700px] max-w-[526px] block w-full md:mb-0 mb-[-50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
