import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
// import logo from "../../public/logo.png";
import logo from "../images/logo.png";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter(); // Get the router instance

  // Function to determine if a link is active based on the current pathname
  const isLinkActive = (href) => {
    return router.pathname === href ? "text-blue-500" : "text-white";
  };

  return (
    <nav className="bg-gradient-to-r from-zinc-600 to-slate-600 fixed right-0 left-0 top-0 flex flex-col lg:flex-row lg:gap-0 items-center justify-between  shadow-md px-2">
      {/* Logo */}
      <div className="">
        <a href="./">
          <Image src={logo} alt="logo image" className="w-20 h-20" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex-col justify-center items-center">
        <div className="text-sm lg:flex-grow flex items-center gap-2">
          <Link
            href="/landing" // Update href to use route paths, not file paths
            className={`block lg:inline-block text-lg mt-4 lg:mt-0 lg:mr-4 hover:text-blue-500 ${isLinkActive(
              "/landing"
            )}`}
          >
            Home
          </Link>
          <Link
            href="/project" // Update href to use route paths, not file paths
            className={`block lg:inline-block text-lg mt-4 lg:mt-0 lg:mr-4 hover:text-blue-500  ${isLinkActive(
              "/project"
            )}`}
          >
            Project
          </Link>
          <Link
            href="/about" // Update href to use route paths, not file paths
            className={`block lg:inline-block text-lg mt-4 lg:mt-0 lg:mr-4 hover:text-blue-500  ${isLinkActive(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            href="/contact" // Update href to use route paths, not file paths
            className={`block lg:inline-block text-lg mt-4 lg:mt-0 hover:text-blue-500  ${isLinkActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://docs.google.com/document/d/10cVgJX3dB0EEQxpChEB4t1e2Lk1pxQgUzs5vXoBgPDs/edit?usp=sharing"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
