import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function MainNavbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <section className="container">
        <a className="navbar-brand" href="#">
          React Node WPAPI
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mt-4">
            <li className="nav-item">
              <NavLink to={'/add-post'} className="nav-link">
                Add Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/ajax-one'} className="nav-link">
                Ajax One
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/image-form'} className="nav-link">
                Post with Image Form
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default MainNavbar;
