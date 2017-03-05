import 'normalize.css';
import  './styles/base.scss';
import css from './app.scss';
import Header from './components/Header';
import Post from './components/Post';

import React, {Component} from 'react';


const App = () => (
  <div >
    <Header />
    <div className="app-container">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
)


export default App;