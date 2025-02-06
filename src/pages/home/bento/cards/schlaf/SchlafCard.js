import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";

import '../card.css';
import './Schlaf.css';

import SchlafFetch from './SchlafFetch';

export default function SchlafCard() {
  const heute = new Date().toLocaleDateString();
  const schlafFetch = new SchlafFetch();

  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  const [zeit, setZeit] = useState("00:00");

  const { data, error, isLoading } = useQuery(["daten", heute], () => schlafFetch.getSchlafDaten(heute), {refetchOnWindowFocus: false});

  useEffect(() => {
    if (data) {
      setZeit(data.schlafenszeit || "00:00");
    }
  }, [data]); 
  
  async function setDaten() {
    setBtnÖffnenKlick(btn => !btn);
    try {
      await schlafFetch.setSchlafDaten(heute, zeit);
    } catch (error) {
      window.alert("Speichern hat nicht funktioniert");
    }
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="card traum">
      {!btnÖffnenKlick && (
        <>
          <div className="schlaf-top">
            <p><b>{zeit}</b> h</p>
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
            <button onClick={() => setDaten()}>🗸</button>
          </div>
        </>
      )}
        
    </div>
  )
}
