import React from 'react'


import './card.css';
import './Schlaf.css';


export default function SchlafCard() {
  return (
    <div className="card traum">
        <div className="schlaf-top">
            <p><b>09:30</b> h</p>
        </div>
        <div className="schlaf-mitte">
            <p>so lange hast du geschlafen</p>
        </div>
        <div className="schritte-bottom">
            <button>+</button>
        </div>
    </div>
  )
}
