import React from 'react';
import './PutterPage.css';
import Putters from '../../components/Putters/Putters';

export default function PutterPage() {
    return (
        <div className="putter-page">
            <div className="header">
                <h1>Putters</h1>
            </div>
            <div className="putters">
                <Putters />
            </div>
        </div>
    )
}
