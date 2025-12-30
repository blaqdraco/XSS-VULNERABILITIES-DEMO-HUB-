import React from "react";

const CommentBox = ({ comment, onDelete }) => {
  return (
    <div className="card card-accent" style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>{comment.name}</strong>
        {onDelete && (
          <button className="btn" style={{ padding: "4px 8px" }} onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
      <div style={{ marginTop: 6 }} dangerouslySetInnerHTML={{ __html: comment.content }} />
      <div className="small">{new Date(comment.created).toLocaleString()}</div>
    </div>
  );
};

export default CommentBox;
