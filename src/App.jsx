import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "../utils/context";
// import reactLogo from "./assets/react.svg";
import Layout from "./components/Layout";
// import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Rate from "./pages/Rate";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <AppContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rate" element={<Rate />} />
          </Routes>
        </Layout>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
