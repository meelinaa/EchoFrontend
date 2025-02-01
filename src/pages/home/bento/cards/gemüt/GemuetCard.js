import React from 'react'

import '../card.css';
import './Gemut.css';

export default function GemuetCard() {
  return (
    <div className="card gemut-layout">
        <div className="gemut-links">
            <p>Wie geht's dir so?</p>
            <h1 id='gemut-info'>Gut</h1>
        </div>
        <div className="gemut-rechts">
            <div className="gemut-rechts-mitte">
                <div className="gemut-rechts-mitte-infos">
                    <div>heiter</div>
                    <div>ausgeglichen</div>
                    <div>schön</div>
                    <div>neutral</div>
                </div>
                <div className="gemut-rechts-mitte-infos">
                    <div>Arbeit</div>
                    <div>Freunde</div>
                    <div>Hobby</div>
                </div>
            </div>

            <div className="schritte-bottom">
                <button>+</button>
            </div>
        </div>
        
    </div>
  )
}
