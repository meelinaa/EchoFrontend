import React, { useState } from 'react'

import '../card.css';
import './Schlaf.css';

export default function SchlafCard() {

  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  const [zeitAusgabe, setZeitAusgabe] = useState("00:00");
  const [zeit, setZeit] = useState("00:00");

  function speichernDerDaten(zeit){
    setZeitAusgabe(zeit);
    setBtnÖffnenKlick(btn => !btn)
  }

  return (
    <div className="card traum">
      {!btnÖffnenKlick && (
        <>
          <div className="schlaf-top">
            <p><b>{zeitAusgabe}</b> h</p>
          </div>

          <div className="schlaf-mitte">
            <p>So lange hast du geschlafen</p>
          </div>
          
          <div className="schritte-bottom">
            <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>+</button>
          </div>
        </>
      )}
      {btnÖffnenKlick && (
        <>
          <div className="schlaf-top">
            <p>Wie lange hast du heute geschlafen?</p>
          </div>

          <div className="schlaf-mitte">
            <input 
              type="time" 
              name="schlafenszeit" 
              id="input" 
              value={zeit} 
              onChange={(event) => setZeit(event.target.value)} 
            />            
          </div>

          <div className="schritte-bottom">
            <button onClick={() => speichernDerDaten(zeit)}>🗸</button>
          </div>
        </>
      )}
        
    </div>
  )
}
