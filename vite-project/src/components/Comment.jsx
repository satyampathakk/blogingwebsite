// Comment.js
import React, { useState } from 'react';

const Comment = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    onAddComment(newComment);
    setNewComment('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comment;
