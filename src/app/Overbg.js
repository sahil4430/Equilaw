"use client";
import React from "react";
import { BoxesCore } from "../components/ui/background-boxes";
import { SpotlightPreview } from "./spotlight";

export function BackgroundBoxesDemo() {
  return (
    (
    <div
      className="min-h-screen relative w-full overflow-hidden bg-black">
        <SpotlightPreview className="relative"/>
      <div
        className="absolute inset-0 w-full h-full bg-black  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesCore />
      
    </div>)
  );
}
