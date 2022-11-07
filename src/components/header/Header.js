import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item px-3">
          <Link className='btn btn-primary' to="/">Home</Link>
          </li>
          <li class="nav-item px-3">
          <Link className='btn btn-primary' to="/about">About</Link>
          </li>
          <li class="nav-item px-3">
          <Link className='btn btn-primary' to="/contact">Contact</Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header