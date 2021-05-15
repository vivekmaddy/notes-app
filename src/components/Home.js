import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <header id="header" className={this.props.header_class_name}>
                    <div className="container">

                        <h1><a href="/">Codes</a></h1>
                        <h2>Only for true <span>developers</span></h2>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><Link className={'nav_link ' + this.props.nav_home_active} to="/">Home</Link></li>
                                <li><Link className={'nav-link ' + this.props.nav_post_active} to="/posts">Posts</Link></li>
                                <li><Link className={'nav-link ' + this.props.nav_new_active} to="/new">New</Link></li>

                                <li><a className="nav-link" href="#resume">Profile</a></li>

                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                        <div className="social-links" hidden>
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>

                    </div>
                </header>

            </React.Fragment>
        );
    }
}

export default Home;