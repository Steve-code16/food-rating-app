import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="bg-dark" style={{ height: "65vh" }}></div>
      <Footer />
    </div>
  );
}

export default Layout;
