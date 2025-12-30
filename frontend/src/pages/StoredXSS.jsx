import React, { useEffect, useState } from "react";
import api from "../services/api";
import CommentBox from "../components/CommentBox";

const StoredXSS = () => {
  const [name, setName] = useState("Alice");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const loadComments = async () => {
    try {
      const res = await api.get("/comments/");
      setComments(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load comments. Is the backend running on :8000?");
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      await api.post("/comments/", { name, content });
      setContent("");
      loadComments();
    } catch (err) {
      setError("Failed to save comment.");
    }
  };

  const deleteComment = async (id) => {
    try {
      await api.delete(`/comments/${id}/`);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError("Failed to delete comment.");
    }
  };

  return (
    <div className="panel card-accent">
      <div className="section-title">
        <span className="badge">Stored</span>
        <span>Persists and replays</span>
      </div>
      <p className="helper">Comments are stored and rendered without output encoding.</p>
      <form onSubmit={submit} className="flex-gap" style={{ marginBottom: 12 }}>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ maxWidth: 180 }}
        />
        <input
          className="input"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="<svg/onload=alert('stored')>"
          style={{ flex: 1, minWidth: 240 }}
        />
        <button className="btn" type="submit">
          Post payload
        </button>
      </form>
      {error && <p className="danger">{error}</p>}
      <div>
        {comments.map((c) => (
          <CommentBox key={c.id} comment={c} onDelete={() => deleteComment(c.id)} />
        ))}
      </div>
    </div>
  );
};

export default StoredXSS;
