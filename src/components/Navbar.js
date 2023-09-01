import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>

      <button value="pink" style={{backgroundColor: "#681826"}} type="button" className="btn btn-secondary btn-sm" onClick={props.themeChangeHandler}>Dark Pink</button>
      <button value="blue" style={{backgroundColor: "#2d2d85"}} type="button" className="btn btn-secondary btn-sm" onClick={props.themeChangeHandler}>Dark Blue</button>
{/* 
      <div className="d-flex">
        <div onClick={props.togglehandler} className='bg-primary rounded mx-2' style={{height: "30px", width:"30px"}}></div>
      </div> */}

        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        
      </div>
    </div>
   </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired ,
  about: PropTypes.string.isRequired

}


Navbar.defaultProps = {
  title: 'Set Title Here',
  about: "About text Here"
}