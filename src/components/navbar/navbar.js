import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import NahartGolf from '../../assets/nahartgolf (1).png';

export default function navbar() {
    return (
        <div className="navbar">
            <div className="logo-section">
                <Link to="/"><img className="nahart-logo" src={NahartGolf} alt=""></img></Link>
            </div>
            <div className="links-section">
                <Link className="nav-links" to='/putters'>Putters</Link>&nbsp;
                <Link className="nav-links" to='/inserts'>Putter Inserts</Link>
                <Link className="nav-links" to='/contact'>Contact Us</Link>
            </div>
        </div>
    )
}
