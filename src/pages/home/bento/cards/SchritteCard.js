import React from 'react';

import './card.css';
import './Schritte.css';



export default function SchritteCard() {
  return (
    <div className="card sport-layout">
        <div className="schritte-top">
            <p>Heute gelaufen</p>
        </div>
        <div className="schritte-mitte">
            <p><b>700</b> Schritte</p>
            <p><b>2157</b> Meter</p>
        </div>
        <div className="schritte-bottom">
            <button>+</button>
        </div>
    </div>
  )
}
