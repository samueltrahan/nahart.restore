import React from 'react';
import './TaylormadeInserts.css';
import Taylormade1 from '../../assets/inserts/Taylormadeinsert1.jpeg';
import Taylormade2 from '../../assets/inserts/taylormadeinsert2.jpeg';

export default function TaylormadeInserts() {
    return (
        <div className="taylormade-section">
            <div className="tm-header">
                <h2>TaylorMade Inserts</h2>
            </div>
            <div className="tm-inserts-pic">
                <img className="tm-pic" src={Taylormade1} alt=""></img>
                <img className="tm-pic" src={Taylormade2} alt=""></img>
            </div>
        </div>
    )
}
