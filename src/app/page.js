// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../public/logo.png";
// import { useRouter } from "next/navigation";

import NavBar from "../components/nav";
import Footer from "../components/footer";

import Landing from "../pages/landing";
import Project from "../pages/project";
import Contact from "../pages/contact";
import About from "../pages/about";

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
