import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark  bg-dark" id="mainNav">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsForToday
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a rel="noreferrer" className="nav-link" href="https://connectit000.000webhostapp.com/himanshu/" target="_blank">
                    See developer's portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* for category of the news */}
        <div className="Newstype" id="catNav">
            <div className="d-flex justify-content-center">
              <ul className="grid-container">
                <li className="nav-item">
                  <Link className="grid-item " to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="grid-item " to="/business">Business </Link>
                </li>
                <li className="nav-item">
                  <Link className="grid-item " to="/science">Science </Link>
                </li>
                <li className="nav-item">
                  <Link className="grid-item " to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="grid-item " to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="grid-item " to="/sports">Sports</Link>
                </li>
              </ul>
            </div>
          </div>
      </>
    );
  }
}

export default Navbar;
