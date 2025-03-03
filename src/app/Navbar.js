"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo: Icon and Text */}
        <div className="flex items-center">
          <img src="./Group 1.svg" alt="Logo" className="h-12 w-48" />
          {/* <span className="ml-2 text-xl font-bold">Equilaw</span> */}
        </div>

        {/* Desktop Navigation: Three-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-center">
          <Link href="/" className="text-lg font-medium hover:text-gray-300">
            Home
          </Link>
          <Link href="/prodect" className="text-lg font-medium hover:text-gray-300">
            Prodect
          </Link>
          <Link
            href="/getstart"
            className="bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200 text-center"
          >
            getstart
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 grid grid-cols-1 gap-4">
          <Link href="/" className="block text-lg font-medium hover:text-gray-300">
            Home
          </Link>
          <Link href="/prodect" className="block text-lg font-medium hover:text-gray-300">
            Prodect
          </Link>
          <Link
            href="/getstart"
            className="block bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200 text-center"
          >
            getstart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
