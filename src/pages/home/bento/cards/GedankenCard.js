import React from 'react'

import './card.css';
import './Gedanken.css';


export default function GedankenCard() {
  return (
    <div className="card traum">
        <div className="gedanken-top">
            <p>Woran denkst du so?</p>
        </div>
        <div className="gedanken-mitte">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis pariatur quasi perspiciatis aliquam nulla tempora odio rem et ratione.</p>
        </div>
        <div className="schritte-bottom">
            <button>+</button>
        </div>
    </div>
  )
}
