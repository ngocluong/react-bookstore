import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/products/new">New</NavLink></li>
    </ul>    
  </header>
);

export default Header;