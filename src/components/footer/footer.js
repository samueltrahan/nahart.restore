import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="copy-right">
                &copy; 2021 by <a className="footer-link" href="https://www.samueltrahan.com">Nahart Web Design</a>
            </div>
            <div className="social-links">
                <a className="footer-link" href="/"><i className="fab fa-instagram fa-2x"></i></a>&nbsp;
                <a className="footer-link" href="/"><i className="fab fa-twitter fa-2x"></i></a>&nbsp;
                <a className="footer-link" href='/'><i className="fab fa-amazon fa-2x"></i></a>&nbsp;
            </div>
        </div>
    )
}
