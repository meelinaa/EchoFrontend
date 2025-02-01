import React from 'react'

import './card.css';
import './Sport.css';


export default function SportCard() {
  return (
    <div className="card sport-layout">
        <div className="sport-top">
            <p>Sport</p>
        </div>
        <div className="sport-mitte">
            <h1>01:40 h</h1>
        </div>

        <div className="schritte-bottom">
            <button>+</button>
        </div>
    </div>
  )
}
