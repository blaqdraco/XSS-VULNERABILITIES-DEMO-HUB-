import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="panel card-accent">
    <div className="section-title">
      <span className="badge">IA 613 · Ethical Hacking</span>
      <span>XSS Demo Hub — Imani Lameck Kirenga (AT25-05-263914)</span>
    </div>
    <p className="helper">
      Each page isolates a specific XSS vector. This UI is intentionally vulnerable to make
      the behavior visible—run only in a safe environment.
    </p>
    <div className="grid-2">
      <div className="card">
        <strong>Reflected XSS</strong>
        <p className="helper">Backend echoes query from <code>/api/search/</code> with no encoding.</p>
        <Link className="btn" to="/reflected">Open demo</Link>
      </div>
      <div className="card">
        <strong>DOM XSS</strong>
        <p className="helper">Client reads URL parts and injects directly into the DOM.</p>
        <Link className="btn" to="/dom">Open demo</Link>
      </div>
      <div className="card">
        <strong>Stored XSS</strong>
        <p className="helper">Comments persist in DB and render unencoded.</p>
        <Link className="btn" to="/stored">Open demo</Link>
      </div>
      <div className="card">
        <strong>Blind XSS (Admin)</strong>
        <p className="helper">Stored payload fires when viewed in admin context.</p>
        <Link className="btn" to="/admin">Open demo</Link>
      </div>
    </div>
    <p className="danger" style={{ marginTop: 12 }}>
      Warning: Payloads will execute in your browser. Use disposable profiles.
    </p>
  </div>
);

export default Home;
