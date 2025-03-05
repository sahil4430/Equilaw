"use client";
import React from "react";
import { BoxesCore } from "../components/ui/background-boxes";
import { SpotlightPreview } from "./spotlight";

export function BackgroundBoxesDemo() {
  return (
    (
      
    <div
      className="h-screen relative w-full overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-10">
        <SpotlightPreview />
      </div>

        
      <div 
        className="absolute inset-0 w-full h-full bg-black z-20 
        [mask-image:radial-gradient(transparent,white)] 
        pointer-events-none" 
      />
      <div className="absolute inset-0 z-0">
        <BoxesCore />
      </div>
      
      
    </div>
    )
  )
}
// "use client";

// import React from "react";
// import { BoxesCore } from "../components/ui/background-boxes";
// import { SpotlightPreview } from "./spotlight";

// export function BackgroundBoxesDemo() {
//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       {/* Background Boxes - full screen */}
//       <div className="absolute inset-0 z-0">
//         <BoxesCore />
//       </div>

//       {/* Content Layer */}
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
//       <SpotlightPreview />
//       </div>
//     </div>
//   );
// }

// export default BackgroundBoxesDemo;
