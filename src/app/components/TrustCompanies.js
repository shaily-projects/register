import React from "react";

export default function TrustCompanies() {
  return (
    <section className="py-[120px]">
      <div className="container">
        <h2 className="text-3xl	lg:text-[40px] md:mb-[60px] mb-8">
          Trusted by the world’s largest companies
        </h2>
        <div className="flex items-center xl:justify-between trust flex-wrap xl:gap-0 lg:gap-10 gap-x-4 gap-y-10">
          <img src={"assets/trust/trust_1.png"} alt="trust" />
          <img src={"assets/trust/trust_2.png"} alt="trust" />
          <img src={"assets/trust/trust_3.png"} alt="trust" />
          <img src={"assets/trust/trust_4.png"} alt="trust" />
          <img src={"assets/trust/trust_5.png"} alt="trust" />
          <img src={"assets/trust/trust_6.png"} alt="trust" />
        </div>
      </div>
    </section>
  );
}
