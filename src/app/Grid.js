import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { OrbitingCirclesDemo } from './OrbitingCircle';
import { Ripple } from '@/components/magicui/ripple';
export default function CustomGrid() {
    return (
      <div className="grid grid-cols-4 gap-4 p-6 bg-white relative z-10 bottom-[30rem] right-0 left-0 mx-auto max-w-9xl rounded-lg shadow-lg">
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
            
          <OrbitingCirclesDemo className="absoulte inset-0 z-10"/> Any integration you can imagine.
          
          </div>
          <div className="bg-black rounded-2xl ">Full stack</div>
        </div>
  
        {/* Fourth Column (1 row) */}
        <div className="bg-black rounded-2xl p-6 col-span-1 row-span-1">
          <h2 className="text-lg font-bold">Analytics</h2>
        </div>
      </div>
    );
  }
  