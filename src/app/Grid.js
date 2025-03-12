import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { OrbitingCirclesDemo } from './OrbitingCircle';
export default function CustomGrid() {
    return (
      <div className="grid grid-cols-4 gap-4 p-6 bg-white opacity-0.3 relative z-10 bottom-[32rem] right-0 left-0 mx-auto max-w-9xl rounded-lg shadow-lg">
        {/* First Column (1 row) */}
        <div className="bg-zinc-600 rounded-2xl h-86 p-6 col-span-1 row-span-1">
          <h2 className="text-4xl color-white font-bold">Modal <br/>Explained</h2>
          < div className="mt-40 bg-black p-4 rounded-2xl h-16 text-lg flex items-center ">
          <PlayCircleFilledIcon className="mr-2 w-max"/>
          Learn what we do 
          </div>
        </div>
  
        {/* Second Column (4 rows) */}
        <div className="grid gap-4 col-span-1">
          <div className="bg-black rounded-2xl p-4">Scalable apps</div>
          <div className="bg-black rounded-2xl p-4">Future-ready tech</div>
          <div className="bg-black rounded-2xl p-4">Custom solutions</div>
          <div className="bg-black rounded-2xl p-4">AI-powered solutions</div>
        </div>
        {/* Third Column (2 rows) */}
        <div className="grid gap-4 col-span-1">
          <div className="bg-black rounded-2xl p-6">
            
          <OrbitingCirclesDemo className="absoulte inset-0 z-10"/>
          <p className="text-xl text-bold mt-4 font-medium">Any integration you can imagine.</p>
           
          </div>
          <div className="bg-black rounded-2xl text-xl text-bold pl-6 p-4 font-bold ">Stack use build the equilaw 
            <NavigateNextIcon className="ml-20 h-12 w-max"/>
            </div>
        </div>
  
        {/* Fourth Column (1 row) */}
        <div className="bg-black rounded-2xl p-4 md:p-6 col-span-1 row-span-1 flex flex-col items-center w-full max-w-full overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-2">Analytics</h2>
  <p className="font-medium text-center text-sm md:text-base mb-4">Problem faced by the public due to traditional judicial method</p>
  <div className="w-full flex justify-center">
    <img 
      className="h-64 w-auto object-contain relative z-0 bg-radial from-gray-400 from-40% to-slate-900"
      src="/Frame 3.svg"
      alt="Analytics visualization"
    />
  </div>
</div>
      </div>
    );
  }
  