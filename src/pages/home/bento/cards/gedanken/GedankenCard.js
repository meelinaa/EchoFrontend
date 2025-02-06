import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query";


import '../card.css';
import './Gedanken.css';

import GedankenFetch from './GedankenFetch';

export default function GedankenCard() {
  const heute = new Date().toLocaleDateString();
  const gedankenFetch = new GedankenFetch();

  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  const [gedanken, setGedanken] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus consequatur et ipsa magni, modi consectetur reiciendis velit nam, assumenda autem ipsam neque voluptatum minima similique quam quos eum ullam necessitatibus?");

  const { data, error, isLoading } = useQuery(["daten", heute], () => gedankenFetch.getGedankenDaten(heute), {refetchOnWindowFocus: false});
    useEffect(() => {
      if (data) {
        setGedanken(data.gedanken || "Deine Gedanken");
      }
  }, [data]); 

  async function setDaten() {
    setBtnÖffnenKlick(btn => !btn);
    try {
      await gedankenFetch.setGedankenDaten(heute, gedanken);
    } catch (error) {
      window.alert("Speichern hat nicht funktioniert");
    }
  }

  const maxChars = 200;    
  const gekürzterText = gedanken.length > maxChars 
    ? gedanken.substring(0, maxChars) + "..." 
    : gedanken;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Fehler: {error.message}</p>;

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
            <button onClick={() => setBtnÖffnenKlick(true)}>+</button>
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
              onChange={(event) => setGedanken(event.target.value)}>  
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
