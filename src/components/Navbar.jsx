import React from 'react'

import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
   <>
   <nav className= {`navbar navbar-expand-lg  bg-${props.mood}`}>
  <div className="container-fluid ">
    <a className={`navbar-brand text-${props.mood === "light"? "dark" : "light"}` }href="#">{[props.name]}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mood === "light"? "dark" : "light"}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mood === "light"? "dark" : "light"}`} to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle text-${props.mood === "light"? "dark" : "light"}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>

  <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className={`form-check-label text-${props.mood === "light"? "dark" : "light"}`}>{props.mood === "dark"?"Enable light Mode": "Enable Dark Mood"}</label>
</div>
</nav>
   </>
  )
}
