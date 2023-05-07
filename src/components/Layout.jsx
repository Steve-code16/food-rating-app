import React from "react";
import Home from "../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Home />
      <div style={{ height: "65vh" }}></div>
      <Footer />
    </div>
  );
}

export default Layout;
