import React from "react";
import { SearchIcon } from "@/assets/icon";
import Image from "next/image";

export default function Banner() {
  const cities = [
    {
      image: "assets/icon/image_1.svg",
      city: "New Delhi",
    },
    {
      image: "assets/icon/image_2.svg",
      city: "Noida",
    },
    {
      image: "assets/icon/image_3.svg",
      city: "Bangalore",
    },
    {
      image: "assets/icon/image_4.svg",
      city: "Mumbai",
    },
    {
      image: "assets/icon/image_5.svg",
      city: "Hyderabad",
    },
    {
      image: "assets/icon/image_6.svg",
      city: "Chennai",
    },
  ];
  return (
    <section className="bg-[length:100%_100%] bg-cover bg-no-repeat bg-bottom bg-hero-pattern md:py-[135px] py-12 lg:px-0 px-4 ">
      <div className="text-center">
        <h3 className="text-white md:text-xl font-semibold md:mb-5 md:max-w-full max-w-[280px] mx-auto text-lg mb-4">
          From a single desk to a whole building. The choice is yours.
        </h3>
        <h1 className="xl:text-[50px] md:text-4xl	 text-white font-semibold mb-[52px] text-3xl">
          Discover the Ultimate Workspace Solution
        </h1>
        <form className="bg-bannerGray rounded-lg md:py-6 md:px-8 px-6 py-4 mb-8  max-w-[860px] flex items-center w-full gap-4 justify-center mx-auto ">
          <div className="relative flex-1">
            <label className="text-left md:hidden block">
              Search your city
            </label>
            <input
              type="text"
              placeholder="Search city"
              className="w-full bg-white h-[56px] p-5 rounded-md border border-borderColor"
            />
            <button
              type="button"
              className=" md:absolute md:right-[30px]  md:my-auto md:top-0 md:bottom-0 bottom-[-80px] text-blue block text-right w-full  mt-2"
            >
              <u>Search Nearby</u>
            </button>
          </div>
          <button
            type="submit"
            className="px-[55px] py-4 rounded-lg bg-blue border-blue text-white  items-center gap-1 md:flex hidden"
          >
            <SearchIcon /> Search
          </button>
        </form>
        <div className="md:max-w-[740px] max-w-[250px] mx-auto">
          <h3 className="text-white md:text-xl font-semibold mb-5 md:text-left text-center">
            Trending cities
          </h3>
          <div className="flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-y-4 gap-x-10">
            {cities.map((city, i) => (
              <div className="flex items-center flex-col" key={i}>
                <span className="md:w-[74px] md:h-[74px] w-[52px] h-[52px] md:p-0 p-2 rounded-lg flex items-center justify-center mb-2 bg-bannerGray rounded-lg">
                  <Image src={city.image} width={45} height={45} />
                </span>
                <h4 className="text-white md:text-sm text-xs font-semibold">
                  {city.city}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
