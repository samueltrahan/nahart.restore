import React from 'react';
import './InsertsPage.css';
import OdysseyInsert from '../../components/OdysseyInsert/OdysseyInsert';
import PingInserts from '../../components/PingInserts/PingInserts';
import TayloreMadeInserts from '../../components/TaylorMadeInserts/TaylormadeInserts';
import OtherInserts from '../../components/OtherInserts/OtherInserts';

export default function InsertsPage() {
    return (
        <div className="insert-page">
            <div className="insert-header">
                <h1>Putter Inserts</h1>
            </div>
            <div className="putter-inserts">
                <div className="odyssey-inserts">
                   
                    <OdysseyInsert />
                </div>
                <div className="ping-inserts">
                    <PingInserts />
                </div>
                <div className="taylormade-inserts">
                    <TayloreMadeInserts />
                </div>
                <div className="other-inserts">
                    <OtherInserts />
                </div>
            </div>
        </div>
    )
}
