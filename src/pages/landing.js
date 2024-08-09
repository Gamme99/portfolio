import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profile from "../images/profile.png";

import { Tilt_Prism, Khand } from "next/font/google";

// import Layout from "./layout";

const tilt_Prism = Tilt_Prism({
  weight: "400",
  subsets: ["latin"],
});

const khand = Khand({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section
      id="home"
      // className=" flex flex-col justify-center items-center bg-gradient-to-r from-blue-300 to-teal-200 min-h-screen bg-yellow-700 shadow-md mt-20"
      className=" bg-gradient-to-r from-zinc-600 to-slate-600 flex flex-col justify-center items-center  min-h-screen  shadow-lg mt-20"
    >
      <div className="text-center pt-10">
        <p
          className={`${khand.className} text-4xl text-white text-with-shadow pb-3`}
        >
          Hello, I am
          <span
            className={`${tilt_Prism.className} px-5 text-4xl text-red-700`}
          >
            Galmo
          </span>
        </p>
        <p
          className={`${khand.className} text-white text-4xl text-with-shadow`}
        >
          I am a web and application developer
        </p>
      </div>

      <div className="flex justify-center pt-10">
        <Image
          src={profile}
          alt="profile"
          className=" bg-red-500 object-cover w-40 h-40 rounded-full overflow-hidden "
        />
      </div>
      <div className="text-3xl flex justify-center gap-2 pt-4">
        <a href="hhttps://www.linkedin.com/in/galmo-said-75739718b/">
          <AiFillLinkedin className=" hover:text-blue-700" />
        </a>
        <a href="https://github.com/Gamme99">
          <AiFillGithub className=" hover:text-purple-700" />
        </a>

        <a
          href="https://docs.google.com/document/d/10cVgJX3dB0EEQxpChEB4t1e2Lk1pxQgUzs5vXoBgPDs/edit?usp=sharing"
          className=" text-lg hover:text-blue-800"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
