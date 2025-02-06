import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";

import '../card.css';
import './Sport.css';

import SportFetch from './SportFetch';

export default function SportCard() {
  const heute = new Date().toLocaleDateString();
  const sportFetch = new SportFetch();

  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  const [zeit, setZeit] = useState("00:00");
  const [sportart, setSportart] = useState("Fahrradfahren");
  
  const { data, error, isLoading } = useQuery(["daten", heute], () => sportFetch.getSportDaten(heute), {refetchOnWindowFocus: false});
    
  useEffect(() => {
    if (data) {
      setSportart(data.sportart || "Fahrradfahren");
      setZeit(data.trainingsDauer || "00:00");
    }
  }, [data]); 

  async function setDaten(){
    setBtnÖffnenKlick(btn => !btn);
    try {
      await sportFetch.setSportDaten(heute, zeit, sportart);  
    } catch{
      window.alert("speichern hat nicht funktioniert");
    }
  }

  if (isLoading) return <p>Loading...</p>;

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
            <button onClick={() => setDaten()}>🗸</button>
          </div>
        </>
      )}
        
    </div>
  )
}
