import React, { useState } from 'react'

import '../card.css';
import './Traum.css';

export default function TraumCard() {
    const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
    const [traumBewertung, setTraumBewertung] = useState(0);
    const [traum, setTraum] = useState(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure officiis totam eius quasi, impedit laboriosam, ea minima ut nisi aliquam deleniti debitis sit quia ullam, nostrum rerum possimus sunt magni?");


    //TextAusgabe Kürzen
    const maxChars = 200;    
    const gekürzterText = traum.length > maxChars 
      ? traum.substring(0, maxChars) + "..." 
      : traum;

  return (
    <div className="card traum">
      {!btnÖffnenKlick && (
        <>
          <div className="traum-top">
            <h2>Das hast du geträumt</h2>
            <p>Bewertung: <b>{traumBewertung}</b>/10</p>
          </div>

          <div className="traum-mitte">
            <p>{gekürzterText}</p>
          </div>

          <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>+</button>
          </div>
        </>
      )}

      {btnÖffnenKlick && (
        <>
          <div className="traum-top">
            <h2>Was hast du geträumt?</h2>
          </div>
          <div className="traum-mitte">
            <label htmlFor="traumBewertung">Bewertung: 
              <input 
                type="number" 
                name="traumBewertung" 
                id="traumBewertung" 
                max={10}
                min={0}
                value={traumBewertung} 
                onChange={(event) => setTraumBewertung(event.target.value)}    
              />/10
            </label>
                
              <textarea 
                name="traum" 
                id="textarea" 
                cols="27" 
                rows="9" 
                value={traum}  
                onChange={(event) => setTraum(event.target.value)}></textarea>
          </div>
          <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>🗸</button>
          </div>
        </>
      )}
      
    </div>
  )
}
