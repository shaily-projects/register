import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Solution() {
  return (
    <section className="md:pt-[130px] md:pb-[100px] pt-16">
      <div className="container lg:!px-2">
        <div className="flex items-center lg:flex-row flex-col-reverse">
          <div className="flex w-full lg:w-1/2 lg:pe-10 md:pt-0 pt-10 justify-center">
            <Image
              src={"assets/solution.png"}
              width={526}
              height={700}
              className="max-h-[700px] max-w-[526px] block w-full md:mb-0 mb-[-50px]"
            />
          </div>
          <div className="flex lg:w-1/2 w-full flex-col">
            <h2 className="max-w-[580px] md:mb-6 mb-4 text-3xl md:text-4xl xl:text-[52px]">
              Discover the Ultimate Workspace Solution
            </h2>
            <p className="max-w-[580px]">
              From solo entrepreneurs to growing teams, find everything you need
              under one roof. Whether it's pay-per-use plans or fixed desks, our
              flexible options cater to your unique work style, ensuring
              seamless productivity and success.
            </p>
            <ul className="mt-12 gap-x-6 md:gap-y-10 gap-y-6 flex flex-wrap">
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Prestigious Business Addresses
                </h3>
                <p className="text-[#777777]">
                  Access to prestigious business addresses in key locations,
                  enhancing your brand image and credibility.
                </p>
              </li>
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Nationwide Presence
                </h3>
                <p className="text-[#777777]">
                  Establish a presence in multiple cities across India without
                  the need for physical office space.
                </p>
              </li>
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Mail Handling Services
                </h3>
                <p className="text-[#777777]">
                  Efficient management of mail and packages, including
                  forwarding, scanning, and storage, ensuring seamless
                  communication.
                </p>
              </li>
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Professional Call Answering
                </h3>
                <p className="text-[#777777]">
                  Professional receptionists manage incoming calls with
                  personalized greetings, providing a professional image for
                  your business.
                </p>
              </li>
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Flexibility and Cost-Effectiveness
                </h3>
                <p className="text-[#777777]">
                  Enjoy the flexibility of virtual office solutions with
                  customizable plans, avoiding the high costs associated with
                  traditional office leases.
                </p>
              </li>
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Meeting Room Facilities
                </h3>
                <p className="text-[#777777]">
                  Access to meeting rooms and conference facilities in various
                  cities, allowing for seamless collaboration and client
                  meetings.
                </p>
              </li>
              <li className="flex flex-col md:gap-2 gap-1 w-full md:w-[calc(50%_-_12px)] md:ps-8 ps-6 relative after:absolute after:top-[12px] md:after:top-[10px] md:after:left-[10px] after:left-[6px] md:after:w-[8px] after:w-[4px] md:after:h-[8px] after:h-[4px] after:content-[''] after:rounded-full after:bg-black">
                <h3 className="text-lg	md:text-xl font-bold">
                  Business Expansion
                </h3>
                <p className="text-[#777777]">
                  Expand your business footprint across India without the
                  overhead costs of physical office space, enabling growth and
                  scalability.
                </p>
              </li>
            </ul>
            <Link
              href={"#!"}
              className="text-blue md:text-lg md:mt-10 md:ps-10 mt-6"
            >
              <u>Talk to an expert &gt; </u>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
