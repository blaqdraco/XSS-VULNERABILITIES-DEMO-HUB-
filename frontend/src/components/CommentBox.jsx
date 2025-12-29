import React from "react";

const CommentBox = ({ comment }) => {
  return (
    <div className="card card-accent" style={{ marginBottom: 10 }}>
      <strong>{comment.name}</strong>
      <div style={{ marginTop: 6 }} dangerouslySetInnerHTML={{ __html: comment.content }} />
      <div className="small">{new Date(comment.created).toLocaleString()}</div>
    </div>
  );
};

export default CommentBox;
