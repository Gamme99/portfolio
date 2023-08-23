import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-300 to-teal-200 min-h-screen flex flex-col justify-center px-5 py-5 "
    >
      <div className="h-40 w-40"></div>
      <div className=" flex justify-center items-center text-3xl text-blue-700">
        {" "}
        <p>About</p>
      </div>
      <div className="  ">
        <h2 className="text-2xl">Who I Am</h2>
        <p className="pl-5 lg:w-1/3">
          My name is <strong>Gammachis Said</strong>. Class of 2023 graduate
          from Central Washington University (CWU) with bachelor in computer
          science specializing in web and application development with expertise
          in a range of technologies.
        </p>
      </div>
      <div>
        <strong>My Toolkit</strong>

        <ul className=" px-5">
          <li className="py-1 font">
            <span className="  text-white">Front-End Frameworks: </span>
            <p className="px-2">React for dynamic user interfaces.</p>
          </li>
          <li className="py-1">
            <span className="  text-white">Back-End Frameworks: </span>
            <p className="px-2">Django for robust server-side development.</p>
          </li>
          <li className="py-1">
            <span className="  text-white">Server-Side Language: </span>
            <p className="px-2">PHP for versatile web applications.</p>
          </li>
          <li className="py-1">
            <span className="  text-white">Design Framework: </span>
            <p className="px-2">Tailwind CSS for sleek, responsive design.</p>
          </li>
          <li className="py-1">
            <span className="  text-white">Mobile Development: </span>
            <p className="px-2">Crafting engaging mobile experiences.</p>
          </li>
        </ul>
      </div>
      <div className="py-5">
        <strong>Why Collaborate With Me?</strong>

        <ul className="px-5">
          <li>
            <span className="  text-white">Versatility: </span>
            <p className="px-3">
              Proficiency in React, nextjs, Django, and PHP enables a wide array
              of project possibilities.
            </p>
          </li>
          <li>
            <span className="  text-white">Efficiency: </span>
            <p className="px-3">
              Streamlined development ensures on-time, on-budget delivery.
            </p>
          </li>
          <li>
            <span className="  text-white">UI/UX Excellence:</span> <br />
            <p className="px-3">
              My designs prioritize user experience, resulting in engaging and
              intuitive interfaces.
            </p>
          </li>
          <li>
            <span className="  text-white">Data Management: </span>
            <p className="px-3">
              Proficient in database systems like MySQL and mongoDB.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          {" "}
          <strong>Lets Get Started </strong>
        </h2>
        <p className="pl-5">
          Excited to work on your next project!{" "}
          <a href="mailto:saidg@cwu.edu">
            <span className="text-teal-900 underline hover:text-xl">
              Reach out
            </span>
          </a>{" "}
          to discuss how we can leverage these technologies to bring your
          digital vision to life.
        </p>
      </div>
    </section>
  );
}
