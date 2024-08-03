import Image from "next/image";
import Accordion from "../components/accordion";
import Foot from "../components/foot";
import Head from "../components/head";
import Form from "../components/form";

const page = () => {
  return (
    <>
      <Head/>
      <section className="lg:px-[38px] px-0">
        <div className="bg-[url('/register/image/section-bg.png')] lg:min-h-[717px] h-[100%]  bg-no-repeat bg-cover mt-[16px] relative rounded-[30px] ">
          <div className="md:pt-[81px] md:pb-[29px] md:pr-[51px] md:pl-[66px] px-5 pb-4 h-[100%] flex flex-col max-w-[1500px] mx-auto">
            <div className="flex xl:gap-[158px] md:gap-[60px] gap-8 justify-between lg:flex-row flex-col">
              <div className="max-w-[609px] w-[100%] border-1-[red] mt-[40px]">
                <h1 className="font-[700] lg:text-[40px] text-2xl lg:leading-[48px] font-Montserrat text-[white]">
                  Work From Anywhere, Grow Everywhere Get Your Instant Virtual
                  Office
                </h1>
                <p className="font-Raleway font-[500] text-[#FFFFFF] lg:text-[18px] text-sm	 lg:leading-[22px] lg:mt-[32px] mt-4">
                  To Provide Business solutions to the "entrepreneurs, by
                  shifting their conventional" mindset and enabling them to
                  scale business without incurring bad cost . Join us to unlock
                  your virtual office and empower your business!
                </p>
              </div>
              <div className="bg-[white] rounded-[30px] md:py-[42px] md:px-[29px] p-6 max-w-[481px] w-[100%] lg:mx-0 mx-auto">
                <div>
                  <h3 className="mb-[16px] font-[700] text-[22px] text-[#383838] font-Raleway">
                    Get in touch with us
                  </h3>
                  <p className="font-[400] text-[14px] text-[#667085] leading-[17px]">
                    Become a career progressive school with LaunchMyCareer.
                  </p>
                </div>
                <div className="mt-[32px]">
                  <Form />
                </div>
              </div>
            </div>
            <div className="lg:mt-[14px] mt-6   gap-4 md:gap-[30px] mb-[20px] flex md:flex-row flex-col ">
              <div className="flex items-center gap-[16px]">
                <Image
                  src={"image/green-ticks.svg"}
                  alt="green-tick"
                  width={38}
                  height={38}
                  className="max-w-[30px] max-h-[30px] md:max-h-[38px] md:max-w-[38px]"
                />
                <p className='font-[500] font-["Raleway"] xl:text-[20px] text-base xl:leading-[32px] text-[#FFFFFF]'>
                  Unleash Flexibility
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <Image
                  src={"image/green-ticks.svg"}
                  alt="green-tick"
                  width={38}
                  height={38}
                  className="max-w-[30px] max-h-[30px] md:max-h-[38px] md:max-w-[38px]"
                />
                <p className='font-[500] font-["Raleway"] xl:text-[20px] text-base xl:leading-[32px] text-[#FFFFFF]'>
                  Simplify Operations
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <Image
                  src={"image/green-ticks.svg"}
                  alt="green-tick"
                  width={38}
                  height={38}
                  className="max-w-[30px] max-h-[30px] md:max-h-[38px] md:max-w-[38px]"
                />
                <p className='font-[500] font-["Raleway"] xl:text-[20px] text-base xl:leading-[32px] text-[#FFFFFF]'>
                  Boost Credibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[32px] max-w-[1145px] w-[100%] m-auto xl:px-0 md:px-8 px-5">
        <div className="py-[51px] lg:px-[30px]">
          <div className="ld:mb-[68px] mb-10">
            <h2 className="font-[500] text-[#252B42]  text-2xl md:text-[32px] lg:leading-[20px] font-Raleway">
              Get Your Virtual Office Up and Running in{" "}
              <span className="font-[700] font-Raleway leading-[20px]">
                {" "}
                3 Easy Steps!
              </span>{" "}
            </h2>
            <p className="font-[300] text-[#2E2E2E] md:text-[20px] md:leading-[36px] mt-[10px]">
              Get Your Virtual Office Up and Running in 3 Easy Steps!
            </p>
          </div>
          <div>
            <ul className="flex gap-[35px] flex-wrap">
              <li className="max-w-full md:max-w-[calc(50%_-_20px)] xl:max-w-[calc(33%_-_20px)] w-[100%]">
                <a
                  href="#"
                  className="min-h-[182px] h-[100%] rounded-[8px]  w-[100%]"
                >
                  <div className="w-[100%]">
                    <div className="bg-[url('/register/image/card-bg.png')] h-[182px] bg-no-repeat bg-cover w-[100%] bg rounded-[8px] ">
                      <div className="w-[100%] flex justify-between md:px-[32px] px-4">
                        <Image
                          src={"image/phone.svg"}
                          alt="phone"
                          width={43}
                          height={43}
                        />
                        <p className="font-Rubik text-[142px] font-[400] leading-[53px] mt-[8px] text-[white]">
                          1
                        </p>
                      </div>
                      <p className="pt-[46px] md:pl-[32px] pl-4 text-[#252B42] text-[20px] font-[700] leading-[31px] font-Raleway">
                        Connect with RegisterKaro
                      </p>
                    </div>
                    <p className="text-[#737373] text-[12px] font-[500] mt-[15px] ml-[6px]">
                      Reach out to our friendly customer support team through
                      chat, email, or phone. They'll guide you through the
                      process.
                    </p>
                  </div>
                </a>
              </li>
              <li className="max-w-full md:max-w-[calc(50%_-_20px)] xl:max-w-[calc(33%_-_20px)] w-[100%]">
                <a
                  href="#"
                  className="min-h-[182px] h-[100%] rounded-[8px]  w-[100%]"
                >
                  <div className="w-[100%]">
                    <div className="bg-[url('/register/image/card-bg.png')] h-[182px] bg-no-repeat bg-cover w-[100%] bg rounded-[8px] ">
                      <div className="w-[100%] flex justify-between md:px-[32px] px-4">
                        <Image
                          src={"image/text.svg"}
                          alt="text"
                          width={43}
                          height={43}
                        />
                        <p className="font-Rubik text-[142px] font-[400] leading-[53px] mt-[8px] text-[#FFFFFF]">
                          2
                        </p>
                      </div>
                      <p className="pt-[46px] md:pl-[32px] pl-4 text-[#252B42] text-[20px] font-[700] leading-[31px] font-Raleway">
                        Give Essential Details & Documents
                      </p>
                    </div>
                    <p className="text-[#737373] text-[12px] font-[500] mt-[15px] ml-[6px]">
                      Upload essential documents required for registration,
                      following our clear and secure guidelines.{" "}
                    </p>
                  </div>
                </a>
              </li>
              <li className="max-w-full md:max-w-[calc(50%_-_20px)] xl:max-w-[calc(33%_-_20px)] w-[100%]">
                <a
                  href="#"
                  className="min-h-[182px] h-[100%] rounded-[8px]  w-[100%]"
                >
                  <div className="w-[100%]">
                    <div className="bg-[#3424C2] rounded-[8px] h-[182px] ">
                      <div className="w-[100%] flex justify-between md:px-[32px] px-4">
                        <Image
                          src={"image/building.svg"}
                          alt="building"
                          width={43}
                          height={43}
                        />
                        <p className='font-["Rubik"] text-[142px] font-[400] leading-[53px] mt-[8px] text-[#FFFFFF]'>
                          3
                        </p>
                      </div>
                      <p className="pt-[46px] md:pl-[32px] pl-4 text-[#252B42] text-[20px] font-[700] leading-[31px] font-Raleway md:max-w-[282px] w-[100%] text-[white]">
                        Get Your Virtual Office Ready To Work
                      </p>
                    </div>
                    <p className="text-[#737373] text-[12px] font-[500] mt-[15px] ml-[6px]">
                      Once your application is approved, your virtual office is
                      activated instantly!
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="xl:mt-[100px] mt-4 md:mt-10 m-auto max-w-[1276px] w-[100%] lg:px-[30px]">
        <div className="lg:pt-[38px] lg:pl-[89px] lg:pr-[66px] lg:pb-[63px] md:px-10 md:py-12 py-6 px-5 bg-[#F4F4F4] rounded-[30px] ">
          <div>
            <h2 className="font-[500] md:text-[32px] text-2xl	 md:leading-[31px] leading-[34px] text-[black] font-Raleway md:mb-0 mb-4">
              Accessible. Affordable. Adaptable
            </h2>
            <p className="text-[#666666] font-[400] text-[13px] leading-[18px]">
              Whether you're an established enterprise or a scaling startup,
              your Virtual office should drive your business forward. Our
              virtual office solutions take your business places!{" "}
            </p>
          </div>
          <div className="md:pt-[52px] pt-8">
            <div className=" gap-[60px]  flex xl:flex-row flex-col ">
              <div className="max-w-[614px] w-[100%]">
                <div className="flex  gap-8 md:gap-[50px] md:flex-row flex-col">
                  <div className="md:max-w-[282px] w-[100%]">
                    <Image
                      src={"image/office-building.svg"}
                      alt="office"
                      width={50}
                      height={50}
                    />

                    <p className="text-[#252B42] font-[600] font-Raleway md:text-[21px] text-lg mb-2 md:mb-0 md:leading-[31px]">
                      Professional Image & Enhanced Credibility
                    </p>
                    <p className="font-[400] text-[14px] leading-[18px] font-Raleway text-[#353535DE]">
                      Elevate your company's image and attract top talent with a
                      professional virtual address for websites, business cards,
                      and marketing materials.
                    </p>
                  </div>
                  <div className="md:max-w-[282px] w-[100%]">
                    <Image
                      src={"image/bussiness.svg"}
                      alt="office"
                      width={50}
                      height={50}
                    />

                    <p className="text-[#252B42] font-[600] font-Raleway md:text-[21px] text-lg mb-2 md:mb-0 md:leading-[31px]">
                      Streamlined Business Operations
                    </p>
                    <p className="font-[400] text-[14px] leading-[18px] font-Raleway text-[#353535DE]">
                      Access essential services like virtual assistants,
                      answering services, and teleconferencing – all under one
                      roof.
                    </p>
                  </div>
                </div>
                <div className="flex  gap-8 md:gap-[50px] md:flex-row flex-col md:mt-[40px] mt-8">
                  <div className="md:max-w-[282px] w-[100%]">
                    <Image
                      src={"image/scale.svg"}
                      alt="office"
                      width={50}
                      height={50}
                    />

                    <p className="text-[#252B42] font-[600] font-Raleway md:text-[21px] text-lg mb-2 md:mb-0 md:leading-[31px]">
                      Scalable & Cost-Effective Solution
                    </p>
                    <p className="font-[400] text-[14px] leading-[18px] font-Raleway text-[#353535DE]">
                      Choose a virtual office plan that fits your needs and
                      budget, with options for various locations and service
                      levels.
                    </p>
                  </div>
                  <div className="md:max-w-[282px] w-[100%]">
                    <Image
                      src={"image/homework.svg"}
                      alt="office"
                      width={50}
                      height={50}
                    />

                    <p className="text-[#252B42] font-[600] font-Raleway md:text-[21px] text-lg mb-2 md:mb-0 md:leading-[31px]">
                      Unmatched Work Flexibility
                    </p>
                    <p className="font-[400] text-[14px] leading-[18px] font-Raleway text-[#353535DE]">
                      Improve work-life balance by eliminating commutes and
                      allowing flexible schedules.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"image/handshake.png"}
                alt="My Image"
                width={447}
                height={450}
                className="mx-auto xl:mx-0 w-full max-w-[447px] #2B2F33"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="xl:my-[150px] md:my-[100px] mt-16 mb-4  max-w-[1200px] w-[100%] m-auto  xl:px-0 md:px-8 px-[20px] ">
        <div className="gap-[40px] flex  xl:flex-row flex-col  md:gap-[30px] ">
          <h2 className="text-[#393939] md:text-[32px] text-2xl xl:mb-0 mb-4 font-[800] leading-[38px] xl:max-w-[264px] w-[100%]">
            Trusted by the world’s largest companies
          </h2>
          <div className="flex md:gap-[54px] gap-8 items-center flex-wrap">
            <Image
              src={"image/microsoft.svg"}
              alt="microsoft"
              width={100}
              height={21}
            />
            <Image
              src={"image/paypal.svg"}
              alt="paypal"
              width={100}
              height={21}
            />
            <Image
              src={"image/disney.svg"}
              alt="disney"
              width={100}
              height={21}
            />
            <Image
              src={"image/samsung.svg"}
              alt="samsung"
              width={100}
              height={21}
            />
            <Image
              src={"image/spotify.svg"}
              alt="spotify"
              width={100}
              height={21}
            />
            <Image
              src={"image/mcafe.svg"}
              alt="hsbc"
              width={100}
              height={21}
            />

            <Image
              src={"image/nttgroups.svg"}
              alt="ntt"
              width={100}
              height={21}
            />
            <Image
              src={"image/blackrock.svg"}
              alt="blackrock"
              width={100}
              height={21}
            />
            <Image src={"image/hsbc.svg"} alt="hsbc" width={100} height={21} />
            <Image
              src={"image/accenture.svg"}
              alt="accenture"
              width={100}
              height={21}
            />
            <Image src={"image/uber.svg"} alt="uber" width={100} height={21} />
            <Image
              src={"image/slack.svg"}
              alt="slack"
              width={100}
              height={21}
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1064px] w-[100%] m-auto lg:py-[100px] mt-[100px] mb-16 xl:px-0 md:px-8 px-[20px]">
        <h2 className="font-[500] text-2xl md:text-[40px] leading-[32px] text-[#000000] text-center font-Raleway md:mb-[60px] mb-8">
          Frequently Asked Questions
        </h2>

        <div>
          <Accordion
            title="How can a virtual office benefit my business in India?"
            content="A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
          />
          <Accordion
            title="How can I cancel my virtual office service if needed?"
            content="A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
          />
          <Accordion
            title="Can I legally register my business using a virtual office address in India?"
            content="A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
          />
          <Accordion
            title="How will I receive my business mail and packages with a virtual office?"
            content="A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
          />
          <Accordion
            title="Do virtual office services in India include call answering and forwarding?"
            content="A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
          />
        </div>
      </section>
      <Foot/>
    </>
  );
};

export default page;
