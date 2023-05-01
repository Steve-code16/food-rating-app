import React from "react";
import Home from "../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <div style={{ height: "65vh" }}></div>
      <Footer />
    </div>
  );
}

export default Layout;
