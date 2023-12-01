// BlogPost.js
import React from 'react';
import styles from '../css modules/BlogPost.module.css'
const BlogPost = ({ post }) => {
  return (
    <div className={styles.blog} >
      <h2>{post.title}</h2>
      <p>By {post.author} on {post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
