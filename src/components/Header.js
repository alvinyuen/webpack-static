import React from 'react';

import style from './Header.scss';

const Header = () => (
    <header className="header">
      <div className="container">
        <h1 className="title"> Technical Blog </h1>
        <nav>
          <ul className="list">
            <li><a href='#' className="link">Home</a></li>
            <li><a href='#' className="link">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
)

export default Header;
