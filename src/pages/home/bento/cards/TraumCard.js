import React from 'react'
import './card.css';
import './Traum.css';

export default function TraumCard() {
  return (
    <div className="card traum">
        <div className="traum-top">
            <h2>Das hast du geträumt</h2>
            <p>Bewertung: <b>5/10</b></p>
        </div>

        <div className="traum-mitte">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi similique impedit excepturi quod dolores, voluptates explicabo ...</p>
        </div>

        <div className="schritte-bottom">
            <button>+</button>
        </div>
    </div>
  )
}
