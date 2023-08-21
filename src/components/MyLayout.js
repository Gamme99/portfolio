// pages/Layout.js
import React from "react";
import "../app/styles/global.css"; // Adjust the path based on your project structure
import NavBar from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
