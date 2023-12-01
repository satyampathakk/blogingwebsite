// NewPostForm.js
import React, { useState } from 'react';
import styles from '../css modules/NewPostForm.module.css';
const NewPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = () => {
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className={styles.row}>
    <div className={styles.form}>
    <h1>Add New Post</h1>
    <fieldset>
    <form>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br></br><br></br>
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} /><br></br>
      <button onClick={handleSubmit}>Submit</button>
      </form>
      </fieldset>
      </div>
    </div>
  );
};

export default NewPostForm;
