"use client";
import Image from "next/image";
import React from "react";
import AboutTabs from "./AboutTabs";

const AboutPage = () => {
  return (
    <section className=" col mt-5 flex min-h-5/6 xl:h-[85vh] max-lg:pb-20 w-full flex-col items-center align-middle justify-center gap-20 xl:flex-row-reverse">
      <div className="">
        <AboutTabs />
      </div>

      <div className="flex gap-10">
        <div className="img-container relative max-md:h-60 max-md:w-44 h-80 w-60 rounded-lg border-8 border-primary-100 duration-500 2xl:w-80 2xl:h-96">
          <div className="absolute h-full w-full overflow-hidden transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
          <div className="absolute h-full w-full rounded-xl transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
          <div className="absolute h-full w-full rounded-xl transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
          <div className="absolute h-full w-full rounded-xl transition-all duration-500">
            <Image src={"/me.jpeg"} alt="my image" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
