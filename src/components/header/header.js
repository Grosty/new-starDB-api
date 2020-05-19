import React from 'react';
import {
    Link,
    NavLink
} from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people/" activeStyle={{'color': 'tomato'}}>People</NavLink>
        </li>
        <li>
          <NavLink to="/planets/" activeStyle={{'color': 'tomato'}}>Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships/" activeStyle={{'color': 'tomato'}}>Starships</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeStyle={{'color': 'tomato'}}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/secret" activeStyle={{'color': 'tomato'}}>Secret</NavLink>
        </li>
      </ul>

      <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        Change Service
      </button>
    </div>
  );
};

export default Header;
