"use client";
import Image from "next/image";
import { HumbergerIcon } from "@/assets/icon";
import { useState } from "react";

const Head = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuToggle = () => {
    document.body.classList.toggle("menu-open");
    setMobileMenu(!mobileMenu);
  };
  return (
    <div>
      <header className="py-4 px-[20px]">
        <div className="flex items-center landing-head-container justify-between ">
          <Image
            src={"image/logo.svg"}
            alt="My Image"
            width={123}
            height={88}
          />
          <div
            className={`items-center gap-[37px] lg:flex ${
              mobileMenu ? "menu-mobile" : "hidden"
            }`}
          >
            <ul className="flex gap-[19px] lg:items-center lg:flex-row flex-col">
              <li>
                <a
                  href="#"
                  className="text-[#393939] font-Montserrat text-[#212121] text-[14px] font-[600]
                  "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#393939] font-Montserrat text-[#212121] text-[14px] font-[600]
                  "
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#393939] font-Montserrat text-[#212121] text-[14px] font-[600]
                  "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#393939] font-Montserrat text-[#212121] text-[14px] font-[600]
                  "
                >
                  Contact
                </a>
              </li>
            </ul>
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
          <button
            type="button"
            className="lg:hidden block"
            onClick={menuToggle}
          >
            <HumbergerIcon />
          </button>{" "}
        </div>
      </header>
    </div>
  );
};

export default Head;
