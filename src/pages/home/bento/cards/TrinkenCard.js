import React from 'react';

import './card.css';
import './Trinken.css';



export default function TrinkenCard() {
  return (
    <div className="card">
        <div className="trinken-mitte">
            <button>+</button>
            <h2>4 Liter</h2>
            <button>-</button>
        </div>
        <div className="trinken-bottom">
            <p>heute getrunken</p>
        </div>
    </div>
  )
}
