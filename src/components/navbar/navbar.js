import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Joker from '../../assets/joker.png';

export default function navbar() {
    return (
        <div className="navbar">
            <div className="logo-section">
                <img className="nahart-logo" src={Joker} alt=""></img>
                <Link className="logo-link" to='/'>Nahart Golf & Customs</Link>
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
