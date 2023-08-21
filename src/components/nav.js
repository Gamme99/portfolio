import React from "react";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className=" bg-gradient-to-r from-blue-300 to-teal-200 fixed right-0 left-0 top-0 flex flex-col lg:flex-row items-center justify-between shadow-md  p-6">
      {/* Logo */}
      <div className=" lg:mb-0">
        <a href="/">
          <Image src={logo} alt="logo image" className="w-20 h-20" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="  flex-col justify-center items-center">
        <div className="text-sm  lg:flex-grow flex items-center gap-2">
          <Link
            href="./landing"
            className="block lg:inline-block text-lg mt-4 lg:mt-0 lg:mr-4 text-white hover:text-teal-800"
          >
            Home
          </Link>
          <Link
            href="./project"
            className="block lg:inline-block text-lg mt-4 lg:mt-0 lg:mr-4 text-white hover:text-teal-800"
          >
            Project
          </Link>
          <Link
            href="./about"
            className="block lg:inline-block text-lg mt-4 lg:mt-0 lg:mr-4 text-white hover:text-teal-800"
          >
            About
          </Link>
          <Link
            href="./contact"
            className="block lg:inline-block text-lg mt-4 lg:mt-0 text-white hover:text-teal-800"
          >
            Contact
          </Link>
        </div>

        {/* Resume Link */}
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://docs.google.com/document/d/16rjJjCbGCbPAVuBuM_Kmpnbp_cllLRy8TqZWNLJXKp8/edit?usp=sharing"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
