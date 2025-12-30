import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReflectedXSS from "./pages/ReflectedXSS";
import DOMXSS from "./pages/DOMXSS";
import StoredXSS from "./pages/StoredXSS";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reflected" element={<ReflectedXSS />} />
        <Route path="/dom" element={<DOMXSS />} />
        <Route path="/stored" element={<StoredXSS />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <footer className="footer-disclaimer">
        Academic demo only. Intentional vulnerabilities for education in a controlled lab; do not test systems
        you do not own or have permission to assess. Prepared by Imani L. Kirenga.
      </footer>
    </div>
  );
};

export default App;
