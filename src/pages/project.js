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

// ...existing code...
export default function Project() {
  return (
    <section
      id="project"
      className="bg-gradient-to-r from-zinc-700 to-slate-800 min-h-screen flex flex-col items-center text-white py-20"
    >
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My Highlighted Projects
        </h2>

        {/* Project 1 */}
        <div className="bg-zinc-900/80 rounded-2xl shadow-lg p-8 mb-10 w-full flex flex-col md:flex-row items-center gap-8 transition hover:scale-[1.02]">
          <div className="flex-1">
            <h3 className={`${tilt_Prism.className} text-2xl mb-2`}>loadUp</h3>
            <p className={`${roboto.className} text-base mb-4`}>
              Collaborated on a cross-platform logistics dispatch system using React Native, serving drivers for navigation, earnings tracking, and order completion, while offering suppliers and merchants real-time order tracking capabilities.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Gamme99/Logistics-Dispatch"
                className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link
                href="./error"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-800 hover:to-orange-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Visit
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Tools:</span>
              <DiJsBadge className="text-yellow-500 w-8 h-8" />
              <DiReact className="text-blue-500 w-8 h-8" />
              <DiMongodb className="text-green-700 w-8 h-8" />
            </div>
          </div>
          <Image
            src={mobile_loadup}
            alt="loadUp image"
            className="rounded-xl w-64 shadow-md"
          />
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900/80 rounded-2xl shadow-lg p-8 mb-10 w-full flex flex-col md:flex-row items-center gap-8 transition hover:scale-[1.02]">
          <div className="flex-1">
            <h3 className={`${tilt_Prism.className} text-2xl mb-2`}>Gabayaa</h3>
            <p className={`${roboto.className} text-base mb-4`}>
              Versatile e-commerce platform enabling users to seamlessly browse and make purchases via Stripe or PayPal as well as sell their own products.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Gamme99/Gabayaa"
                className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link
                href="https://gabayaa.onrender.com/"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-800 hover:to-orange-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Tools:</span>
              <DiJsBadge className="text-yellow-500 w-8 h-8" />
              <DiDjango className="text-green-700 w-10 h-10" />
            </div>
          </div>
          <Image
            src={gabaya}
            alt="gabaya image"
            className="rounded-xl w-64 shadow-md"
          />
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900/80 rounded-2xl shadow-lg p-8 mb-10 w-full flex flex-col md:flex-row items-center gap-8 transition hover:scale-[1.02]">
          <div className="flex-1">
            <h3 className={`${tilt_Prism.className} text-2xl mb-2`}>loan-tracker</h3>
            <p className={`${roboto.className} text-base mb-4`}>
              Django-based loan tracker website, facilitating loaner data management with CRUD functionality.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Gamme99/loan-tracker"
                className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link
                href="./error"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-800 hover:to-orange-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Visit
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Tools:</span>
              <DiDjango className="text-green-700 w-10 h-10" />
            </div>
          </div>
          <Image
            src={django1}
            alt="loanTracker image"
            className="rounded-xl w-64 shadow-md"
          />
        </div>

        {/* Project 4 */}
        <div className="bg-zinc-900/80 rounded-2xl shadow-lg p-8 mb-10 w-full flex flex-col md:flex-row items-center gap-8 transition hover:scale-[1.02]">
          <div className="flex-1">
            <h3 className={`${tilt_Prism.className} text-2xl mb-2`}>residenceFinder</h3>
            <p className={`${roboto.className} text-base mb-4`}>
              A React-based web application that empowers users to search for properties for sale or rent in a specified area with dynamic filtering.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Gamme99/CS446-group-project"
                className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://zesty-blini-6ec0ac.netlify.app/"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-800 hover:to-orange-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Tools:</span>
              <DiJsBadge className="text-yellow-500 w-8 h-8" />
              <DiReact className="text-blue-500 w-8 h-8" />
            </div>
          </div>
          <Image
            src={home1}
            alt="residenceFinder image"
            className="rounded-xl w-64 shadow-md"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20 mb-10">
        <p className={`${roboto.className} text-3xl font-bold mb-6 text-center`}>Skills</p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <DiBootstrap className="text-purple-700 w-12 h-12" />
          <DiCss3 className="text-blue-400 w-12 h-12" />
          <DiHtml5 className="text-orange-700 w-12 h-12" />
          <DiDjango className="text-green-500 w-12 h-12" />
          <DiPhp className="text-blue-800 w-12 h-12" />
          <DiReact className="text-blue-400 w-12 h-12" />
          <DiJsBadge className="text-yellow-500 w-12 h-12" />
          <DiJqueryLogo className="text-blue-400 w-12 h-12" />
          <DiMongodb className="text-green-500 w-12 h-12" />
          <DiMysql className="text-blue-400 w-12 h-12" />
          <Image
            src={tailwind_icon}
            alt="tailwind icon"
            className="w-12 h-12"
          />
          <DiPython className="text-yellow-600 w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
// ...existing code...
