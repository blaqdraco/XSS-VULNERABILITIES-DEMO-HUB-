import React, { useEffect, useState } from "react";

const DOMXSS = () => {
  const [source, setSource] = useState({ search: "", hash: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchValue = params.get("msg") || "";
    const hashValue = window.location.hash.replace("#", "");
    setSource({ search: searchValue, hash: hashValue });
  }, [window.location.search, window.location.hash]);

  return (
    <div className="panel card-accent">
      <div className="section-title">
        <span className="badge">DOM</span>
        <span>Client-side injection</span>
      </div>
      <p className="helper">
        Reads from the URL (query <code>?msg=</code> and <code>#hash</code>) and pushes straight into the DOM using dangerouslySetInnerHTML.
      </p>
      <div className="code-pill">/dom?msg=&lt;img src=x onerror=alert('query')&gt;#&lt;svg/onload=alert('hash')&gt;</div>
      <div className="grid-2" style={{ marginTop: 14 }}>
        <div className="card">
          <strong>Query (?msg=)</strong>
          <div style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: source.search }} />
        </div>
        <div className="card">
          <strong>Hash (#...)</strong>
          <div style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: source.hash }} />
        </div>
      </div>
    </div>
  );
};

export default DOMXSS;
