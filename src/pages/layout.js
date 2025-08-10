// pages/Layout.js
import React from "react";
import "../app/styles/global.css"; 
import NavBar from "../components/nav";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <main className="">
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </main>
  );
}
