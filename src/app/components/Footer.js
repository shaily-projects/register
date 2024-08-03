import React from "react";
import {
  Direction,
  Email,
  Fb,
  Insta,
  Linkedin,
  LogoWhite,
  Tel,
  XIcon,
} from "@/assets/icon";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="md:pt-[80px] py-10 md:pb-[60px] bg-[#191C20]">
        <div className="container">
          <div className="flex justify-between xl:gap-[80px] gap-12 xl:flex-row flex-col">
            <div className="">
              <LogoWhite />
              <div className="mt-10 flex justify-between gap-[40px] xl:max-w-full max-w-[220px]">
                <Link href={"https://www.facebook.com/"} target="_blank">
                  <Fb />
                </Link>
                <Link href={"https://www.instagram.com/"} target="_blank">
                  <Insta />
                </Link>
                <Link href={"https://www.instagram.com/"} target="_blank">
                  <Linkedin />
                </Link>
                <Link href={"https://x.com/"} target="_blank">
                  <XIcon />
                </Link>
              </div>
            </div>
            <div className="flex xl:gap-[70px] gap-10 md:flex-row flex-col">
              <div>
                <h4 className="font-bold text-white">Services</h4>
                <div className="flex flex-col gap-2 md:mt-10 mt-6 ">
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Virtual Office
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    GST Registration
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Coworking Spaces
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Business Registration
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Mailing Address
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Dedicated Desk
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white">Other Pages</h4>
                <div className="flex flex-col gap-2 md:mt-10 mt-6 ">
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Home
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    About Us
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Contact Us
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Blog
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Find Location
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    FAQ's
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white">Other Link</h4>
                <div className="flex flex-col gap-2 md:mt-10 mt-6 ">
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Privacy Policy
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Disclaimer
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Terms & Conditions
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Cookies
                  </Link>
                  <Link href={"#!"} className="text-[#C2C2C2]">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-[420px]">
              <h4 className="font-bold text-white">Join the newsletter</h4>
              <form className="flex gap-3 mb-8 mt-3 sm:flex-row flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full bg-[#2B2F33] md:w-[236px] flex-1 p-3"
                />
                <button
                  type="submit"
                  className="md:px-5 py-2 px-4 rounded-full bg-blue border-blue text-white max-w-max"
                >
                  Subscribe
                </button>
              </form>
              <h4 className="font-bold text-white mb-4">Join the newsletter</h4>
              <div className="flex flex-wrap justify-between">
                <p class="flex gap-2 text-[#C2C2C2] items-center mb-4">
                  <Tel /> +91 93112 21210
                </p>
                <p class="flex gap-2 text-[#C2C2C2] items-center mb-4">
                  <Email /> virtualoffice@teamco.work
                </p>
                <p class="flex gap-2 text-[#C2C2C2] w-full ">
                  <Direction /> 704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram,
                  Haryana 122007
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-[#2B2F33] py-12">
        <div className="container">
          <div className="mb-10">
            <h4 className="font-bold text-white mb-4">Join the newsletter</h4>
            <p className="text-[#ACACAC]">
              Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual
              Office in Bangalore | Virtual Office in Mumbai | Virtual Office in
              Pune | Virtual Office in Kolkata | Virtual Office in
              Chennai | Virtual Office in Noida | Virtual Office in
              Kochi | Virtual Office in Jaipur | Virtual Office in
              Hyderabad | Virtual Office in Chandigarh | Virtual Office in
              Lucknow | Virtual Office in Mohali
            </p>
          </div>
          <div className="mb-10">
            <h4 className="font-bold text-white mb-4">
              Virtual Office for GST in Major Cities
            </h4>
            <p className="text-[#ACACAC]">
              Virtual Office for GST in Delhi | Virtual Office for GST in
              Gurgaon | Virtual Office for GST in Bangalore | Virtual Office for
              GST in Mumbai | Virtual Office for GST in Pune | Virtual Office
              for GST in Kolkata | Virtual Office for GST in Chennai | Virtual
              Office for GST in Noida | Virtual Office for GST in
              Kochi | Virtual Office for GST in Jaipur | Virtual Office for GST
              in Hyderabad | Virtual Office for GST in Lucknow | Virtual Office
              for GST in Chandigarh | Virtual Office for GST in Mohali
            </p>
          </div>
          <div className="mb-10">
            <h4 className="font-bold text-white mb-4">
              Virtual Office for Business in Major Cities
            </h4>
            <p className="text-[#ACACAC]">
              Virtual Office for Business in Delhi | Virtual Office for Business
              in Gurgaon | Virtual Office for Business in Bangalore | Virtual
              Office for Business in Mumbai | Virtual Office for Business in
              Pune | Virtual Office for Business in Kolkata | Virtual Office for
              Business in Chennai | Virtual Office for Business in
              Noida | Virtual Office for Business in Kochi | Virtual Office for
              Business in Jaipur | Virtual Office for Business in
              Hyderabad | Virtual Office for Business in Lucknow | Virtual
              Office for Business in Chandigarh | Virtual Office for Business in
              Mohali
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-bold text-white mb-4">
              Virtual Office with Mailing Address in Major Cities
            </h4>
            <p className="text-[#ACACAC]">
              Virtual Office with Mailing Address in Delhi | Virtual Office with
              Mailing Address in Gurgaon | Virtual Office with Mailing Address
              in Bangalore | Virtual Office with Mailing Address in
              Mumbai | Virtual Office with Mailing Address in Pune | Virtual
              Office with Mailing Address in Kolkata | Virtual Office with
              Mailing Address in Chennai | Virtual Office with Mailing Address
              in Noida | Virtual Office with Mailing Address in Kochi | Virtual
              Office with Mailing Address in Jaipur | Virtual Office with
              Mailing Address in Hyderabad | Virtual Office with Mailing Address
              in Lucknow | Virtual Office with Mailing Address in
              Chandigarh | Virtual Office with Mailing Address in Mohali
            </p>
          </div>
          <hr className="text-[#ACACAC]" />
          <div className="flex items-center justify-between mt-6">
            <p class="text-[#ACACAC]">
              Copyright © 2019, Team Cowork. All Rights Reserved
            </p>
            <p class="text-[#ACACAC]">Powered by MXN Realspaces Pvt Ltd</p>
          </div>
        </div>
      </section>
    </>
  );
}
