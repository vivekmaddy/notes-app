import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <header id="header">
                    <div className="container">

                        <h1><a href="index.html">Emily Jones</a></h1>
                        <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link active" href="#header">Home</a></li>
                                <li><Link className="nav-link" to="/about">About</Link></li>
                                <li><a className="nav-link" href="#resume">Resume</a></li>
                                <li><a className="nav-link" href="#services">Services</a></li>
                                <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                <li><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                        <div className="social-links">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>

                    </div>
                </header>

            </div>
        )
    }
}

export default Header;