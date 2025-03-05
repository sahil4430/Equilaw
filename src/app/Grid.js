export default function CustomGrid() {
    return (
      <div className="grid grid-cols-4 gap-4 p-6 bg-transparent relative z-10 fixed top-0 right-0 left-0">
        {/* First Column (1 row) */}
        <div className="bg-white rounded-2xl p-6 col-span-1 row-span-1">
          <h2 className="text-lg font-bold">Modall Explained</h2>
        </div>
  
        {/* Second Column (4 rows) */}
        <div className="grid gap-4 col-span-1">
          <div className="bg-black rounded-2xl p-4">Scalable apps</div>
          <div className="bg-white rounded-2xl p-4">Future-ready tech</div>
          <div className="bg-white rounded-2xl p-4">Custom solutions</div>
          <div className="bg-white rounded-2xl p-4">AI-powered solutions</div>
        </div>
        {/* Third Column (2 rows) */}
        <div className="grid gap-4 col-span-1">
          <div className="bg-white rounded-2xl p-6">Any integration you can imagine.</div>
          <div className="bg-white rounded-2xl p-6">Full stack</div>
        </div>
  
        {/* Fourth Column (1 row) */}
        <div className="bg-white rounded-2xl p-6 col-span-1 row-span-1">
          <h2 className="text-lg font-bold">Analytics</h2>
        </div>
      </div>
    );
  }
  