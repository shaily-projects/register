"use client";
import Image from 'next/image';
import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="w-full mb-4 leading-6 border-b-[1px] border-[#7A7A7A]">
      <button
        className="w-full relative text-left md:mb-[40px] mb-8 border-none bg-transparent outline-none cursor-pointer flex items-center justify-between"
        onClick={toggle}
        type="button"
      >
        <p className="text-[#2B2B2B] text-[20px]  font-[400] font-['Raleway']">{props.title}</p>

        <span className={`mr-2 transition-transform ${isShowing ? "rotate-180" : "rotate-0"}`}>
          {isShowing ?  <Image
            src={"image/arrow-up.svg"}
            alt="My Image"
            width={24}
            height={24}
          /> :  <Image
          src={"image/arrow-down.svg"}
          alt="My Image"
          width={24}
          height={24}
        />}
        </span>
      </button>
      <div
        className={`${isShowing ? "block" : "hidden"} text-[#7D7D7D] text-[16px] font-[400] leading-[18px] font-['Raleway'] mb-[40px] `}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
