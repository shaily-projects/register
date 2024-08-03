import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <section className="md:py-[80px] py-12 bg-bgGray">
      <div className="container">
        <div className="flex md:gap-[100px] gap-10 items-center xl:flex-row flex-col-reverse">
          <Image
            src={"assets/testimonial.svg"}
            width={865}
            height={410}
            className="max-w-full max-h-full xl:max-w-[865px] xl:max-h-[410px]"
          />
          <div className="max-w-[420px] xl:text-right">
            <h2 className="text-3xl	md:text-[40px] md:mb-12 mb-4">
              Client Testimonials{" "}
            </h2>
            <p>
              We love hearing feedback from our valued clients. Here's what some
              of our satisfied customers have to say about our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
