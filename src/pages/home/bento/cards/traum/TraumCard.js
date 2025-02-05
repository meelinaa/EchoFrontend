import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";

import '../card.css';
import './Traum.css';

import TraumFetch from './TraumFetch';

export default function TraumCard() {
  const heute = new Date().toLocaleDateString();
  const traumFetch = new TraumFetch();

  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  const [traumBewertung, setTraumBewertung] = useState(0);
  const [traum, setTraum] = useState(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure officiis totam eius quasi, impedit laboriosam, ea minima ut nisi aliquam deleniti debitis sit quia ullam, nostrum rerum possimus sunt magni?");

  const { data, error, isLoading } = useQuery(["daten", heute], () => traumFetch.getTraumDaten(heute), {refetchOnWindowFocus: false});
  
  useEffect(() => {
    if (data) {
      setTraumBewertung(data.bewertung || 0);
      setTraum(data.traum || "Dein Traum...");
    }
  }, [data]); 

  async function setDaten(){
    setBtnÖffnenKlick(btn => !btn);
    try {
      await traumFetch.setTraumDaten(heute, traumBewertung, traum);  
    } catch (error){
      window.alert("speichern hat nicht funktioniert");
    }
  }

//Text für Ausgabe gekürzt
  const maxChars = 200;    
  const gekürzterText = traum.length > maxChars 
    ? traum.substring(0, maxChars) + "..." 
    : traum;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Fehler: {error.message}</p>;

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
              onChange={(event) => setTraum(event.target.value)}>
            </textarea>
          </div>

          <div className="schritte-bottom">
            <button onClick={() => setDaten()}>🗸</button>
          </div>
        </>
      )}
    </div>
  )
}
