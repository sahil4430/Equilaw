import React from "react";
import { Spotlight } from "../components/ui/spotlight";
import CustomGrid from "./Grid";
import Navbar from "./Navbar";

export function SpotlightPreview() {
  return (
    (<>
    <div
      className="h-[40rem] w-full flex rounded-md bottom-0 md:items-center md:justify-center bg-black/[0.01] antialiased bg-grid-white/[0.1] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          we build a online infrastructure for efficiently resolving disputes.<br /> 
        </h1>
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Our AI-driven platform ensures fast, secure,
           and transparent online dispute resolution with automated workflows,
            virtual hearings, and seamless case management.
        </p>
      </div> 
    </div>
    <CustomGrid/>
    </>)
  );
}
