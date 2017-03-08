import React from 'react';

import style from '../styles/Header.scss';
import { Link } from 'react-router';

const Header = () => (
    <header className="header">
      <div className="container">
        <h1 className="title"> Technical Blog </h1>
        <nav>
          <ul className="list">
            <li><Link to="/home" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
)

export default Header;
