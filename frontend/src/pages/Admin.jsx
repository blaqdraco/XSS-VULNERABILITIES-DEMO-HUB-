import React, { useEffect, useState } from "react";
import api from "../services/api";
import CommentBox from "../components/CommentBox";

const Admin = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const res = await api.get("/comments/");
      setComments(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load admin feed.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="panel card-accent">
      <div className="section-title">
        <span className="badge">Blind</span>
        <span>Admin render path</span>
      </div>
      <p className="helper">Payloads planted by users execute when an elevated user views them.</p>
      {error && <p className="danger">{error}</p>}
      <div>
        {comments.map((c) => (
          <CommentBox key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
