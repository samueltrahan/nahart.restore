import React from 'react';
import './RestoreFinish.css';
import Restore from '../../assets/restore-finish.webp';

export default function RestoreFinish() {
    return (
        <div className="restore-section">
            <div className="restore-pic-section">
            <img className="restore-pic" src={Restore} alt=""></img>
            </div>
            <div className="info-section">
            <h1>Restore Finish</h1>
                <p>Restore your putter back to it's original condition</p>
                <p>- Removal of dings/dents</p>
                <p>- Polymer finish</p>
                <p>- Paint fill of your choice</p>
                <button className="card-button">Start Your Order</button>
            </div>
        </div>
    )
}
