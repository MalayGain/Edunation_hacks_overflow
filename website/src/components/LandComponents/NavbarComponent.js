import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default class NavbarComponent extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <div>
        <nav className='nav z-depth-0'>
          <div className='nav-wrapper'>
            <a href='#logo' className='brand-logo purple-text text-darken-4'>
              EDUNATI
              <u>
                <span className='teal-text text-accent-3 i-line'>ON</span>
              </u>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a
                  href='#login'
                  className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href='#join'
                  className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
                >
                  Join Now
                </a>
              </li>
            </ul>
            <a href='#menu' data-target='slide-out' className='sidenav-trigger'>
              <i className='purple-text text-darken-4 material-icons'>menu</i>
            </a>
          </div>
        </nav>
        <ul id='slide-out' className='sidenav'>
          <li>
            <a
              href='#login'
              className='btn btn-nav transparent z-depth-0 purple-text text-darken-4'
            >
              Login
            </a>
          </li>
          <li>
            <a
              href='#join'
              className='btn btn-nav transparent z-depth-0 white-text text-darken-4 purple darken-4'
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
