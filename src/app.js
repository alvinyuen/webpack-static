import 'normalize.css';
import  './styles/base.scss';
import css from './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

import React, {Component} from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';


const App = () => (
  <BrowserRouter>
  <div >
    <Header />
    <div className="app-container">
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/home" component={Home} />
      <Match exactly pattern='/about' component={About}/>
      <Miss component ={NotFound} />
    </div>
  </div>
  </BrowserRouter>
)


export default App;