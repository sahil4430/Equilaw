import CustomGrid from "./Grid";
import { BackgroundBoxesDemo } from "./Overbg";
import { SpotlightPreview } from "./spotlight";

export default function Home() {
  return (
    <><BackgroundBoxesDemo className= "bg-no-repeat"/> 
    
    <CustomGrid className=" relative z-10 top-0"/>
    </>
    
  );
}