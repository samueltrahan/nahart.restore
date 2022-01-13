import React from 'react';
import './RestoreFinish.css';
import Restore from '../../assets/restore-finish.webp';
import {Link} from 'react-router-dom';

export default function RestoreFinish() {
    return (
        <div className="restore-section">
            <div className="restore-pic-section">
            <img className="restore-pic" src={Restore} alt=""></img>
            </div>
            <div className="info-section">
            <h1>Putter Restoration</h1>
            <div className="PR-info">
                <p>Restore your putter back to it's original condition</p>
                <p>- Removal of dings/dents</p>
            </div>
            </div>
        </div>
    )
}
