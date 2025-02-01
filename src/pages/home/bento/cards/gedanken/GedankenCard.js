import React, { useState } from 'react'

import '../card.css';
import './Gedanken.css';


export default function GedankenCard() {
  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  const [gedanken, setGedanken] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus consequatur et ipsa magni, modi consectetur reiciendis velit nam, assumenda autem ipsam neque voluptatum minima similique quam quos eum ullam necessitatibus?");
  

  const maxChars = 200;    
  const gekürzterText = gedanken.length > maxChars 
    ? gedanken.substring(0, maxChars) + "..." 
    : gedanken;


  return (
    <div className="card traum">

      {!btnÖffnenKlick && (
        <>
          <div className="gedanken-top">
            <p>Deine Gedanken</p>
          </div>
          <div className="gedanken-mitte">
          <p>{gekürzterText}</p>
          </div>
          <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>+</button>
          </div>
        </>
      )}

      {btnÖffnenKlick && (
        <>
          <div className="gedanken-top">
            <p>Was denkst du heute so?</p>
          </div>
          <div className="gedanken-mitte">
              <textarea 
                name="traum" 
                id="textarea" 
                cols="27" 
                rows="9" 
                value={gedanken}  
                onChange={(event) => setGedanken(event.target.value)}></textarea>
          </div>
          <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>🗸</button>
          </div>
        </>
      )}
        
    </div>
  )
}
