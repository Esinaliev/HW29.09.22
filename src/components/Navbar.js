import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link  className="navbar-brand"  to="/" >HW 29.09.22</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link  className="nav-link"  to="/" >Дом</Link>
        </li>
        <li className="nav-item">
            <Link  className="nav-link"  to="/login" >Логин</Link>
        </li>
        <li className="nav-item">
            <Link  className="nav-link"  to="/profile" >Профиль</Link>
        </li>
      </ul>
      <span class="navbar-text">
        <Link  className="nav-link"  to="/logout" >Выйти</Link>
    </span>
    </div>
  </nav>
  );
}

export default Navbar;
