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
      <div className="panel card-accent" style={{ marginTop: 16 }}>
        <div className="section-title">
          <span className="badge">Disclaimer</span>
          <span>Academic demo only</span>
        </div>
        <p className="helper">
          This demonstration is strictly for educational purposes. The vulnerabilities shown
          are intentional misconfigurations, not flaws in Django or React, and run only in a
          controlled lab environment with no real data.
        </p>
        <p className="small">Prepared by: Imani L. Kirenga</p>
      </div>
    </div>
  );
};

export default App;
