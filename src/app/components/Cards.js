import Link from "next/link";
import React from "react";
import { LongIcon } from "@/assets/icon";
import Image from "next/image";

export default function Cards() {
  return (
    <section className="py-12">
      <div className="container !px-2">
        <div className="flex flex-wrap xl:gap-[40px] md:gap-[22px] gap-4 cards">
          <div className="flex md:pt-7 md:pb-6 md:ps-6 md:pe-[20px] p-4 border border-borderColor rounded-lg max-w-full w-full lg:max-w-[calc(33%_-12px)] md:max-w-[calc(50%_-12px)] xl:max-w-[calc(25%_-30px)] min-w-[calc(25%_-30px)] gap-4">
            <Image src={"assets/cards/1.svg"} width={85} height={85} />
            <div className="flex flex-col">
              <h4>
                <span className="text-lg	md:text-2xl text-blue pb-2 font-semibold mb-5 relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[1px] after:w-[100px] after:content-['']">
                  Our solutions
                </span>
              </h4>
              <p className="text-sm text-gray font-semibold mb-8">
                Browse our full range of products and services
              </p>
              <Link href={"#!"}>
                <LongIcon />
              </Link>
            </div>
          </div>
          <div className="flex md:pt-7 md:pb-6 md:ps-6 md:pe-[20px] p-4 border border-borderColor rounded-lg max-w-full w-full lg:max-w-[calc(33%_-12px)] md:max-w-[calc(50%_-12px)] xl:max-w-[calc(25%_-30px)] min-w-[calc(25%_-30px)] gap-4">
            <Image src={"assets/cards/2.svg"} width={85} height={85} />
            <div className="flex flex-col">
              <h4>
                <span className="text-lg	md:text-2xl text-blue pb-2 font-semibold mb-5 relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[1px] after:w-[100px] after:content-['']">
                  Talk to us
                </span>
              </h4>
              <p className="text-sm text-gray font-semibold mb-8">
                Get advice from one of our
              </p>
              <Link href={"#!"}>
                <LongIcon />
              </Link>
            </div>
          </div>
          <div className="flex md:pt-7 md:pb-6 md:ps-6 md:pe-[20px] p-4 border border-borderColor rounded-lg max-w-full w-full lg:max-w-[calc(33%_-12px)] md:max-w-[calc(50%_-12px)] xl:max-w-[calc(25%_-30px)] min-w-[calc(25%_-30px)] gap-4">
            <Image src={"assets/cards/3.svg"} width={85} height={85} />
            <div className="flex flex-col">
              <h4>
                <span className="text-lg	md:text-2xl text-blue pb-2 font-semibold mb-5 relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[1px] after:w-[100px] after:content-['']">
                  Book workspace
                </span>
              </h4>
              <p className="text-sm text-gray font-semibold mb-8">
                Book meeting rooms and day offices now
              </p>
              <Link href={"#!"}>
                <LongIcon />
              </Link>
            </div>
          </div>
          <div className="flex md:pt-7 md:pb-6 md:ps-6 md:pe-[20px] p-4 border border-borderColor rounded-lg max-w-full w-full lg:max-w-[calc(33%_-12px)] md:max-w-[calc(50%_-12px)] xl:max-w-[calc(25%_-30px)] min-w-[calc(25%_-30px)] gap-4">
            <Image src={"assets/cards/4.svg"} width={85} height={85} />
            <div className="flex flex-col">
              <h4>
                <span className="text-lg	md:text-2xl text-blue pb-2 font-semibold mb-5 relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[1px] after:w-[100px] after:content-['']">
                  Set up a virtual office
                </span>
              </h4>
              <p className="text-sm text-gray font-semibold mb-8">
                Start building a real presence today
              </p>
              <Link href={"#!"}>
                <LongIcon />
              </Link>
            </div>
          </div>
          <div className="flex md:pt-7 md:pb-6 md:ps-6 md:pe-[20px] p-4 border border-borderColor rounded-lg max-w-full w-full lg:max-w-[calc(33%_-12px)] md:max-w-[calc(50%_-12px)] xl:max-w-[calc(25%_-30px)] min-w-[calc(25%_-30px)] gap-4">
            <Image src={"assets/cards/5.svg"} width={85} height={85} />
            <div className="flex flex-col">
              <h4>
                <span className="text-lg	md:text-2xl text-blue pb-2 font-semibold mb-5 relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[1px] after:w-[100px] after:content-['']">
                  Buy a Membership
                </span>
              </h4>
              <p className="text-sm text-gray font-semibold mb-8">
                Access thousands of locations on demand
              </p>
              <Link href={"#!"}>
                <LongIcon />
              </Link>
            </div>
          </div>
          <div className="flex md:pt-7 md:pb-6 md:ps-6 md:pe-[20px] p-4 border border-borderColor rounded-lg max-w-full w-full lg:max-w-[calc(33%_-12px)] md:max-w-[calc(50%_-12px)] xl:max-w-[calc(25%_-30px)] min-w-[calc(25%_-30px)] gap-4">
            <Image src={"assets/cards/6.svg"} width={85} height={85} />
            <div className="flex flex-col">
              <h4>
                <span className="text-lg	md:text-2xl text-blue pb-2 font-semibold mb-5 relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[1px] after:w-[100px] after:content-['']">
                  {" "}
                  Explore our app
                </span>
              </h4>
              <p className="text-sm text-gray font-semibold mb-8">
                Download our app and get started today
              </p>
              <Link href={"#!"}>
                <LongIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
