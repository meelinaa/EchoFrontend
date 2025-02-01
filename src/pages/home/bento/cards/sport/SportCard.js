import React, { useState } from 'react'

import '../card.css';
import './Sport.css';


export default function SportCard() {
    const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
    const [zeit, setZeit] = useState("00:00");
    const [sportart, setSportart] = useState("Fahrradfahren");
  

  return (
    <div className="card sport-layout">
      {!btnÖffnenKlick && (
        <>
          <div className="sport-top">
          <p>Das hast du heute gemacht: {sportart}</p>
          </div>
          <div className="sport-mitte">
            <p><b>{zeit}</b>h</p>
          </div>

          <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>+</button>
          </div>
        </>
      )}
      {btnÖffnenKlick && (
        <>
          <div className="sport-top">
            <p>Wie lange hast du heute sport gemacht?</p>
          </div>
          <div className="sport-mitte">
              <input 
                type="time" 
                name="sportZeit" 
                id="input" 
                value={zeit} 
                onChange={(event) => setZeit(event.target.value)} 
              />        
              <input 
                type="text" 
                name="sportart" 
                id="input" 
                value={sportart} 
                onChange={(event) => setSportart(event.target.value)} 
              />        
          </div>
          <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>🗸</button>
          </div>
        </>
      )}
        
    </div>
  )
}
