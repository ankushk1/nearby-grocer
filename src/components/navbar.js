import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
  render() {
    return (
      <div>
        <ul className="nav bg-dark nav-tabs mb-4">
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/categories">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
