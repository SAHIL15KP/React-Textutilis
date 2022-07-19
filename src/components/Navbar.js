import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// react router imported for Link usage 

// react router help us to open different files on same page without loading the page

// <a className="navbar-brand" href="#">{props.title}</a>
// <a className="nav-link" href="#">{props.tt}</a>

export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>{/* this props is called  for taking color for navabar from app.js */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Textutils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                  
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`} >{/*a switch button from Bootstrap ;; onclick  we add fnctn from app.js  for changing the color*/}
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    tt: PropTypes.string
}

Navbar.defaultProps = {
    title: "New title",
    tt: "New about"
}
