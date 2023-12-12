import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const HomePage = () => {
  return (
    <main className="flex h-full items-center justify-center ">
      <div className=" max-w-3xl max-lg:mb-10 ">
        <div className="mb-5 flex flex-col space-y-3 whitespace-nowrap text-center leading-normal lg:mb-8 lg:space-y-5">
          <h5 className="text-sm text-primary-100 lg:text-base">
            Hi, my name is
          </h5>
          <h1 className="text-5xl font-extrabold text-text-100 lg:text-8xl">
            Tobi Fon.
          </h1>
          <h2 className=" text-2xl font-semibold tracking-widest text-text-100 lg:text-4xl">
            <span className="text-primary-100">Full-Stack</span> developer.
          </h2>
          <h3 className="text-lg text-text-200 lg:text-2xl">
            I love building cool things for the internet.
          </h3>
        </div>
        <div className="flex justify-between">
          <Button className="lg:px-8 lg:py-6 lg:text-base rounded-md">
            Download my CV
            <DownloadIcon className="ml-3" />
          </Button>
          <Button
            className="lg:px-8 lg:py-6 lg:text-base rounded-md "
            variant={"ghost"}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
