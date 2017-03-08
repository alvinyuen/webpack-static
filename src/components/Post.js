import React from 'react';
import '../styles/Post.scss';


const Post = ({ title, content }) => (
  <div>
    <h2 className="post-title"><a href="#" className="post-link"> { title } </a></h2>
    <p className="post-content"> { content } </p>
  </div>
)

export default Post