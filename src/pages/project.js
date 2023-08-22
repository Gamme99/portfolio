import Image from "next/image";
import Link from "next/link";
import {
  DiReact,
  DiDjango,
  DiPython,
  DiBootstrap,
  DiJsBadge,
  DiMongodb,
  DiJqueryLogo,
  DiHtml5,
  DiCss3,
  DiGithubBadge,
  DiMysql,
  DiPhp,
  Dilinux,
  DiWindows,
  DiDocker,
  DiJava,
  DiNodejs,
} from "react-icons/di";

import django1 from "../images/django1.png";
import tailwind_icon from "../images/tailwind-icon.png";
import django2 from "../images/django2.png";
import home1 from "../images/home1.png";
import gabaya from "../images/gabaya.png";
import portfolio from "../images/portfolio.png";
import mobile_loadup from "../images/mobile-loadUp.png";

import {
  Roboto,
  Tilt_Prism,
  Sacramento,
  Sofia_Sans,
  Monoton,
  Khand,
} from "@next/font/google";

const tilt_Prism = Tilt_Prism({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Project() {
  return (
    <section
      id="project"
      className=" px-10 bg-gradient-to-r from-blue-300 to-teal-200 min-h-screen flex flex-col justify-center items-center md:gap-28"
    >
      {/* <div className=" flex flex-col justify-center items-center w-full h-full"> */}
      {/* <div className=" w-60 h-60 "></div> */}

      {/* gives content below have more space at the top*/}
      <div className="flex flex-col justify-center items-center w-full h-full mb-10 ">
        <div className="mt-60 flex flex-col lg:flex-row items-center justify-around w-full h-full ">
          <div className="flex flex-col items-center justify-center ">
            <div className=" flex flex-col justify-start items-center  project1  ">
              <div className="w-80">
                <h1 className={`${tilt_Prism.className} text-2xl `}>loadUp </h1>
                <div className={`${roboto.className}  text-sm pl-2 `}>
                  Collaborated on a cross-platform logistics dispatch system{" "}
                  using React Native, serving drivers for navigation, earnings
                  tracking, and order completion, while offering suppliers and
                  merchants real-time order tracking capabilities.
                </div>
              </div>
              <Image
                src={mobile_loadup}
                alt="loadUp image"
                className="block w-80 rounded-md"
              />
              <div className="flex flex-row items-center justify-around ">
                <a
                  href="https://github.com/Gamme99/Logistics-Dispatch"
                  className=""
                >
                  <DiGithubBadge className="w-16 h-16 text-blue-400 hover:text-blue-900 transition-all " />
                </a>
                <Link
                  href="./error"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md text-sm hover:from-orange-800 hover:to-orange-800"
                >
                  view
                </Link>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <h1 className=" text-2xl text-with-shadow">tools: </h1>
                <DiJsBadge className="text-yellow-500 w-10 h-10  " />{" "}
                <DiReact className="text-blue-700 w-10 h-10" />
                <div>
                  <DiMongodb className="text-green-900 w-10 h-10" />
                  <p className="text-sm"> mongoDB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center  project2">
              <div className="w-80">
                <h1 className={`${tilt_Prism.className} text-2xl`}>gabaya</h1>
                <div className={`${roboto.className} text-sm pl-2`}>
                  versatile e-commerce platform enabling users to seamlessly
                  browse and make purchases via Stripe or PayPal as well as sell
                  their own products
                </div>
              </div>
              <Image
                src={gabaya}
                alt="gabaya image"
                className="block w-80 rounded-md"
              />
              <div className="flex flex-row items-center justify-between ">
                <a href="https://github.com/Gamme99/Gabayaa" className="">
                  <DiGithubBadge className="w-16 h-16 text-blue-400 hover:text-blue-900 transition-all " />
                </a>
                <Link
                  href="./error"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md text-sm hover:from-orange-800 hover:to-orange-800"
                >
                  view
                </Link>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <h1 className=" text-2xl text-with-shadow">tools: </h1>
                <DiJsBadge className="text-yellow-500 w-10 h-10 " />{" "}
                <DiDjango className="text-green-900 w-16 h-16" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around w-full h-full ">
          {/* the second row */}
          <div className="flex flex-col items-center justify-center">
            <div className=" flex flex-col justify-center items-center project3">
              <div className="w-80">
                <h1 className={`${tilt_Prism.className} text-2xl khan`}>
                  residenceFinder{" "}
                </h1>
                <div className={`${roboto.className} text-sm pl-2`}>
                  <p>A react-based web application that empowers</p>
                  <p>users to search for properties for sale or rent</p>
                  <p>in a specified area with dynamic filtering.</p>
                </div>
              </div>
              <Image
                src={home1}
                alt="residenceFinder image"
                className="block w-80 rounded-md"
              />
              <div className="flex flex-row items-center justify-around ">
                <a
                  href="https://github.com/Gamme99/CS446-group-project"
                  className=""
                >
                  <DiGithubBadge className="w-16 h-16 text-blue-400 hover:text-blue-900 transition-all " />
                </a>
                <a
                  href="https://zesty-blini-6ec0ac.netlify.app/"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md text-sm hover:from-orange-800 hover:to-orange-800"
                >
                  view
                </a>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <h1 className=" text-2xl text-with-shadow">tools: </h1>
                <DiJsBadge className="text-yellow-500 w-10 h-10 " />{" "}
                <DiReact className="text-blue-600 w-16 h-16" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex flex-col justify-center items-center project4">
              <div className="w-80">
                <h1 className={`${tilt_Prism.className} text-2xl khan`}>
                  loanTracker{" "}
                </h1>
                <div className={`${roboto.className} text-sm pl-2`}>
                  <p>Django-based loan tracker website,</p>
                  <p>facilitating loaner data management</p>
                  <p>with CRUD functionality.</p>
                </div>
              </div>
              <Image
                src={django1}
                alt="loanTracker image"
                className="block w-80 rounded-md"
              />
              <div className="flex flex-row items-center justify-around ">
                <a href="https://github.com/Gamme99/loanTracker" className="">
                  <DiGithubBadge className="w-16 h-16 text-blue-400 hover:text-blue-900 transition-all " />
                </a>
                <Link
                  href="./error"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md text-sm hover:from-orange-800 hover:to-orange-800"
                >
                  view
                </Link>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <h1 className=" text-2xl text-with-shadow">tools: </h1>
                {/* <DiJsBadge className="text-yellow-500 w-10 h-10 " />{" "} */}
                <DiDjango className="text-green-900 w-16 h-16" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // end of projects  */}
      <div className="mb-40 pb-20 ">
        <p className={`${roboto.className} text-3xl `}>Skills</p>
      </div>
      <div className="circular-logos flex justify-center items-center overflow-auto  ">
        <DiBootstrap className=" text-purple-700 logo logo-1 hover:w-20 hover:h-20" />
        <DiCss3 className=" text-blue-400 logo logo-2 hover:w-20 hover:h-20" />
        <DiHtml5 className=" text-orange-700 logo logo-3 hover:w-20 hover:h-20" />
        <DiDjango className=" text-2xl text-green-800 logo logo-4 hover:w-20 hover:h-20" />
        <DiPhp className="  text-blue-800 logo logo-5 hover:w-20 hover:h-20" />
        <DiReact className="  text-blue-400 logo logo-6 hover:w-20 hover:h-20" />
        <DiJsBadge className="  text-yellow-500 logo logo-7 hover:w-20 hover:h-20" />
        <DiJqueryLogo className="  text-blue-400 logo logo-8 hover:w-20 hover:h-20" />
        <DiMongodb className="  text-green-800 logo logo-9 hover:w-20 hover:h-20" />
        <DiMysql className="  text-blue-400  logo logo-10 hover:w-20 hover:h-20" />
        <Image
          src={tailwind_icon}
          className="  text-blue-400 tailwind-logo  md:tailwind-logo-mobile logo-11  hover:w-20 hover:h-20"
        />
      </div>
      <div className="w-full h-full mt-40 "></div>
    </section>
  );
}
