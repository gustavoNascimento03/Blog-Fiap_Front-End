import React from 'react';
import './PostCard.css';

function PostCard({ title, professor, summary, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-professor">{professor}</p>
      </div>
      <div className="card-body">
        <p className="card-summary">{summary}</p>
      </div>
    </div>
  );
}

export default PostCard;