export default function CustomGrid() {
    return (
      <div className="grid grid-cols-4 gap-4 p-6 bg-white relative z-10 bottom-[28rem] right-0 left-0 mx-auto max-w-9xl rounded-lg shadow-lg">
        {/* First Column (1 row) */}
        <div className="bg-black rounded-2xl h-86 p-6 col-span-1 row-span-1">
          <h2 className="text-4xl color-white font-bold">Modal <br/>Explained</h2>
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
          <div className="bg-black rounded-2xl p-6">Any integration you can imagine.</div>
          <div className="bg-black rounded-2xl p-6">Full stack</div>
        </div>
  
        {/* Fourth Column (1 row) */}
        <div className="bg-black rounded-2xl p-6 col-span-1 row-span-1">
          <h2 className="text-lg font-bold">Analytics</h2>
        </div>
      </div>
    );
  }
  