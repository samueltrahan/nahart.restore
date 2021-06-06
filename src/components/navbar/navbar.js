import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function navbar() {
    return (
        <div className="navbar">
            <div className="logo-section">
                <Link className="logo-link" to='/'>Nahart Restoration</Link>
            </div>
            <div className="contact-section">
                contact us section
            </div>
            <div className="links-section">
                <Link className="nav-links" to='/putters'>Putters</Link>&nbsp;
                <Link className="nav-links" to='/drivers'>Drivers</Link>&nbsp;
                <Link className="nav-links" to='/irons'>Irons</Link>&nbsp;
            </div>
        </div>
    )
}
