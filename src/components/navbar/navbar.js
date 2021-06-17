import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import GolfBall from '../../assets/golf-ball-logo.png';

export default function navbar() {
    return (
        <div className="navbar">
            <div className="logo-section">
                <Link className="logo-link" to='/'>Nahart Golf & Customs<img className="golfball" src={GolfBall} alt=""></img></Link>
            </div>
            <div className="contact-section">
                contact us section
            </div>
            <div className="links-section">
                <Link className="nav-links" to='/putters'>Putters</Link>&nbsp;
            </div>
        </div>
    )
}
