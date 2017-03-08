import React from 'react';

import Post from './Post';
import blogs from '../assets/blogs.json';

const Home = () => (
  <div>
  {blogs.blog.map(blog => <Post key={blog.id} {...blog}/>)}
  </div>
)

export default Home