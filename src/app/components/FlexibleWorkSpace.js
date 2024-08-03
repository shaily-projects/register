import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AgentIcon,
  BrandedIcon,
  CalenderIcon,
  ClockIcon,
  MoneyIcon,
  SearchIcon,
  SearchIconBlack,
  TeamIcon,
} from "@/assets/icon";

export default function FlexibleWorkSpace() {
  return (
    <section className="py-16 bg-bgGray">
      <div className="container">
        <div className="flex justify-between mb-10 xl:flex-row flex-col">
          <h2 className="md:text-[40px] text-3xl xl:mb-0 md:mb-10 mb-5 ">
            Flexible workspace designed around your needs
          </h2>
          <div className="flex flex-col md:gap-4 gap-3">
            <div className="flex gap-5">
              <Image
                src={"assets/india.png"}
                width={25}
                height={25}
                className="rounded-full"
              />
              <p>Prices for India</p>
            </div>
            <div className="flex gap-6">
              <SearchIconBlack />
              <Link href={"#search"} className="border-b border-black">
                Search for a city or area to refine pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-full border border-borderColor  h-[64px] tab mb-7 md:flex hidden">
          <span className="w-full h-[64px] flex justify-center items-center xl:text-3xl text-xl text-gray rounded-full active">
            Office Space
          </span>
          <span className="w-full h-[64px] flex justify-center items-center xl:text-3xl text-xl text-gray rounded-full">
            Coworking
          </span>
          <span className="w-full h-[64px] flex justify-center items-center xl:text-3xl text-xl text-gray rounded-full">
            Virtual Offices
          </span>
          <span className="w-full h-[64px] flex justify-center items-center xl:text-3xl text-xl text-gray rounded-full">
            Meeting rooms
          </span>
        </div>
        <p>
          Our flexible, fully-customisable office rentals are available by the
          hour, day, or as long as you need.
        </p>
        <div className="workspace flex gap-4 mt-8 overflow-x-auto ">
          <div className="md:min-w-[310px] min-w-[250px] min-w-[250px] flex flex-col bg-white rounded-lg overflow-hidden">
            <Image
              src={"assets/workspace/workspace_1.svg"}
              width={310}
              height={300}
              className="hidden md:block mt-[-1px] "
            />
            <div className="content relative h-full  p-3  md:pb-[60px] pb-10   ">
              <p className="md:text-lg	mb-2 font-bold">Private offices</p>
              <p className="md:text-lg	mb-4">
                A range of ready-to-use, fully equipped offices with everything
                you need to get started.
              </p>
              <p className="flex gap-3 text-gray items-center mb-2">
                <CalenderIcon /> By month or year
              </p>

              <p className="flex gap-3 text-gray items-center mb-4">
                <TeamIcon /> Teams of any size
              </p>
              <p className="text-[#008385] ">From $ 89 per person per month</p>
              <div className="mt-4 flex items-center gap-4 absolute md:bottom-[20px] bottom-[10px] ">
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-blue border-blue text-white	"
                >
                  Get a quote
                </button>
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-white border border-blue text-blue"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="md:min-w-[310px] min-w-[250px] flex flex-col bg-white rounded-lg overflow-hidden">
            <Image
              src={"assets/workspace/workspace_2.svg"}
              width={310}
              height={300}
              className="hidden md:block mt-[-1px]"
            />
            <div className="content relative h-full  p-3  md:pb-[60px] pb-10 ">
              <p className="md:text-lg	mb-2 font-bold">Custom Offices</p>
              <p className="md:text-lg	mb-4">
                When off-the-shelf simply isn't enough. Customise all aspects of
                your space, including furniture and branding.
              </p>
              <p className="flex gap-3 text-gray items-center mb-2">
                <BrandedIcon /> By month or year + customised
              </p>

              <p className="flex gap-3 text-gray items-center mb-4">
                <TeamIcon /> Teams of any size
              </p>
              <p className="text-[#008385] ">From $ 89 per person per month</p>
              <div className="mt-4 flex items-center gap-4 absolute md:bottom-[20px] bottom-[10px] ">
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-blue border-blue text-white"
                >
                  Get a quote
                </button>
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-white border border-blue text-blue"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="md:min-w-[310px] min-w-[250px] flex flex-col bg-white rounded-lg overflow-hidden">
            <Image
              src={"assets/workspace/workspace_3.svg"}
              width={310}
              height={300}
              className="hidden md:block mt-[-1px]"
            />
            <div className="content relative h-full  p-3  md:pb-[60px] pb-10 ">
              <p className="md:text-lg	mb-2 font-bold">Day Offices</p>
              <p className="md:text-lg	mb-4">
                A professional on-demand office space. Perfect when you need to
                get your head down and do your best work.
              </p>
              <p className="flex gap-3 text-gray items-center mb-2">
                <ClockIcon /> By the hour or day
              </p>

              <p className="flex gap-3 text-gray items-center mb-4">
                <TeamIcon /> Teams of any size
              </p>
              <p className="text-[#008385] ">From $ 25 per day</p>
              <div className="mt-4 flex items-center gap-4 absolute md:bottom-[20px] bottom-[10px] ">
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-blue border-blue text-white"
                >
                  Get a quote
                </button>
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-white border border-blue text-blue"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          <div className="md:min-w-[310px] min-w-[250px] flex flex-col bg-white rounded-lg overflow-hidden">
            <Image
              src={"assets/workspace/workspace_4.svg"}
              width={310}
              height={300}
              className="hidden md:block mt-[-1px]"
            />
            <div className="content relative h-full  p-3  md:pb-[60px] pb-10 ">
              <p className="md:text-lg	mb-2 font-bold">Office membership</p>
              <p className="md:text-lg	mb-4">
                Flexible access to Day Offices where and when you choose, at
                thousands of locations worldwide.
              </p>
              <p className="flex gap-3 text-gray items-center mb-2">
                <MoneyIcon /> 5, 10 or unlimited days per month
              </p>

              <p className="flex gap-3 text-gray items-center mb-4 visiblity-hidden">
                <TeamIcon /> Teams of any size
              </p>
              <p className="text-[#008385] ">From $ 225 per month</p>
              <div className="mt-4 flex items-center gap-4 absolute md:bottom-[20px] bottom-[10px] ">
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-blue border-blue text-white"
                >
                  Get a quote
                </button>
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-white border border-blue text-blue"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="md:min-w-[310px] min-w-[250px] flex flex-col bg-[#333] rounded-lg overflow-hidden">
            <Image
              src={"assets/workspace/workspace_5.svg"}
              width={310}
              height={300}
              className="hidden md:block mt-[-1px]"
            />
            <div className="content relative h-full  p-3  md:pb-[60px] pb-10 ">
              <p className="md:text-lg	mb-2 text-white">Need a helping hand?</p>
              <p className="md:text-lg	mb-4 text-white">
                Arrange a 1:1 call with a professional advisor.
              </p>
              <p className="flex gap-3 text-white items-center mb-2">
                <AgentIcon /> Agents available worldwide
              </p>

              <p className="flex gap-3 text-white items-center mb-2">
                <AgentIcon /> Discuss different options
              </p>

              <p className="flex gap-3 text-white items-center mb-2">
                <AgentIcon /> Receive a personalised quote
              </p>

              <p className="flex gap-3 text-white items-center mb-2">
                <AgentIcon /> Sign up and get started
              </p>

              <p className="flex gap-3 text-white items-center mb-2">
                <AgentIcon /> Sign up and get started
              </p>

              <div className="mt-4 flex items-center gap-4 absolute md:bottom-[20px] bottom-[10px] ">
                <button
                  type="button"
                  className="px-3 py-1 rounded-full md:text-[15px] text-[12px] whitespace-nowrap bg-blue border-blue text-white"
                >
                  Talk to an expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
