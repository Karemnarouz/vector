/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className="header">
        <div className="container">
            <Link to="#" className="navbar-brand scroll-top">Victory</Link>
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                {/* <!--/.navbar-header--> */}
                <div id="main-nav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/ourmenu">Our Menus</a></li>
                        <li><Link to="/blog">Blog Entries</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                {/* <!--/.navbar-collapse--> */}
            </nav>
            {/* <!--/.navbar--> */}
        </div>
        {/* <!--/.container--> */}
    </div>
    {/* <!--/.header--> */}
    </div>
  )
}

export default Navbar;