// PostList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css modules/PostList.module.css'

const PostList = ({ posts,setPath }) => {
  const [pk , setPk]=useState()
  function setId(pk){
    setPk(pk)
    setPath(pk)

  }
  
  return (
    <div>
      {posts.map(post => (
        <div className={styles.list} key={post.pk}>
          <h3 onClick={() =>{ setId(post.pk)}}><Link className={styles.a} to={`/${post.pk}`}>{post.title}</Link></h3>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
