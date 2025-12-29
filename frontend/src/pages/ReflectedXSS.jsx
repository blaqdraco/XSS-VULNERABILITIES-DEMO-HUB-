import React, { useState } from "react";
import api from "../services/api";

const ReflectedXSS = () => {
  const [query, setQuery] = useState("");
  const [resultHtml, setResultHtml] = useState("");
  const [error, setError] = useState("");

  const search = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.get("/search/", { params: { q: query } });
      setResultHtml(response.data || response.request.responseText);
    } catch (err) {
      setError("Request failed. Is the backend running on :8000?");
    }
  };

  return (
    <div className="panel card-accent">
      <div className="section-title">
        <span className="badge">Reflected</span>
        <span>Server echoes query</span>
      </div>
      <p className="helper">Backend returns your input unescaped. The panel below renders raw HTML.</p>
      <form onSubmit={search} className="flex-gap" style={{ marginBottom: 12 }}>
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type <img src=x onerror=alert('reflected')>"
          style={{ maxWidth: 420 }}
        />
        <button className="btn" type="submit">
          Fire payload
        </button>
      </form>
      {error && <p className="danger">{error}</p>}
      <div className="card" style={{ minHeight: 80 }} dangerouslySetInnerHTML={{ __html: resultHtml }} />
    </div>
  );
};

export default ReflectedXSS;
