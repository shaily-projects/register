"use client";
import React, { useState } from "react";
import {
  DropDown,
  HumbergerIcon,
  Logo,
  PhoneIcon,
  UserIcon,
} from "@/assets/icon";
import Link from "next/link";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuToggle = () => {
    document.body.classList.toggle("menu-open");
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className="flex items-center w-full">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Logo />
          </Link>
          <nav
            className={`xl:gap-[60px] gap-6 list-none lg:flex  ${
              mobileMenu ? "mobile-menu" : "hidden"
            }`}
          >
            <li>
              <Link href="#!" className="flex items-center xl:gap-2 gap-1">
                Workspace & Services <DropDown />
              </Link>
            </li>
            <li>
              <Link href="#!" className="flex items-center xl:gap-2 gap-1">
                Get started
              </Link>
            </li>
            <li>
              <Link href="#!" className="flex items-center xl:gap-2 gap-1">
                More <DropDown />
              </Link>
            </li>
            <li>
              <Link href="#!" className="flex items-center xl:gap-2 gap-1">
                Help <DropDown />
              </Link>
            </li>
          </nav>
          <div className="flex items-center xl:gap-[40px] gap-6">
            <div className="flex items-center xl:gap-4 gap-3">
              <PhoneIcon />

              <span className="text-borderColor"> | </span>
              <UserIcon />
            </div>
            <Link
              href={"#!"}
              className="xl:px-6 xl:py-4 px-4 py-3 rounded-full bg-blue border-blue text-white lg:block hidden"
            >
              ENQUIRE NOW
            </Link>
            <button
              type="button"
              className="lg:hidden block"
              onClick={menuToggle}
            >
              <HumbergerIcon />
            </button>{" "}
          </div>
        </div>
      </div>
    </header>
  );
}
