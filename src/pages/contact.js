"use client";

import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const generateMailtoLink = () => {
    const subject = "Web Dev Recruiter";
    const recipient = "gammachiss@gmail.com";

    const body = `
      Hello Gammachis,

      ${message}

      From: ${company}
      Location: ${location}
      Phone: ${phone}

      Sincerely,
      ${firstName} ${lastName}
    `;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = generateMailtoLink();
    window.location.href = mailtoLink;
    alert("Please make sure to click send through your email");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-300 to-teal-200 min-h-screen flex flex-col justify-center items-center p-5 "
    >
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-lg py-5 mt-20">
        <div className="flex flex-col items-center justify-center">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border border-gray-300 py-1 rounded-md w-2/3"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="border border-gray-300 py-1 rounded-md w-2/3"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Company
          </label>
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            className="border border-gray-300 py-1 rounded-md w-2/3"
            placeholder="Company"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            City/State
          </label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="border border-gray-300 py-1 rounded-md w-2/3"
            placeholder="City/State"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border border-gray-300 py-1 rounded-md w-2/3"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Phone
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="border border-gray-300 py-1 rounded-md w-2/3"
            placeholder="Phone #"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center  h-full w-full ">
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className=" border-gray-300 px-4 py-2 rounded-md md:w-1/3 h-36 resize"
          placeholder="Message"
        />
      </div>
      <div className=" text-center py-2">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white hover:bg-green-700 text-2xl py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
    </section>
  );
}
