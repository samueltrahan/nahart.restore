import React from 'react';
import './OtherInserts.css';
import Seemore from '../../assets/inserts/putterinsertseemore.jpeg';

export default function OtherInserts() {
    return (
        <div className="other-section">
            <div className="other-header">
                <h2>Other Inserts</h2>
            </div>
            <div className="other-inserts-pic">
                <img className="other-pic" src={Seemore} alt=""></img>
            </div>
        </div>
    )
}
