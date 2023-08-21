import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import NavBar from "../components/nav";
import Footer from "../components/footer";

import Landing from "../pages/landing";
import Project from "../pages/project";
import Contact from "../pages/contact";
import About from "../pages/about";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className=" ">
      <NavBar />
      <Landing />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
