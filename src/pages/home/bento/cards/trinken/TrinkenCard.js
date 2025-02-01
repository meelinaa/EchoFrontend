import React, { useEffect, useState } from 'react';

import '../card.css';
import './Trinken.css';

export default function TrinkenCard() {
  const heute = new Date().toLocaleDateString();
  const LITERINBECHER = 0.240;

  const [becher, setBecher] = useState(0);
  const [liter, setLiter] = useState(0);

  const [error, setError] = useState(null);

  //BTN
  function increaseLiter(){
    setBecher(becher => becher + 1);
  }

  function decreaseLiter(){
    if(becher > 0){
      setBecher(becher => becher - 1);
    }
  }

  useEffect(() => {
    setLiter(becher * LITERINBECHER);
  }, [becher]); 

  //FETCH
  async function getTrinkenDaten(heute){
    const response = await fetch(`http://localhost:8080/trinken/${heute}`);
    if (!response.ok) {
      throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
    }
    return await response.json();
  }
  
  useEffect(() => {
    async function fetchTrinkenDaten() {
      try {
        const daten = await getTrinkenDaten(heute);
        setLiter(daten.liter);
        setBecher(daten.becher);
      } catch (error) {
        setError(error.message);
        setLiter(0);
        setBecher(0);
      }  
    }
    fetchTrinkenDaten();
  },[])

  //PUT ----------- Bearbeiten wenn ich Backend starte
  // Auslagern funktioniert nicht...
  /*
  async function setTrinkenDaten(heute, liter, becher) {
    if (!heute || !liter || !becher) {
        throw new Error('Fehler: ungültiger oder fehlender Parameter');
    }
    try {
        const response = await fetch(`http://localhost:8080/trinken/hinzufügen`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                datum: heute,
                liter: liter,
                becher: becher,
            }),
        });

        if (!response.ok) {
            throw new Error(`Fehler beim Speichern der Daten: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Daten erfolgreich gespeichert:", data);
        return data;
    } catch (error) {
        console.error("Fehler bei der Daten:", error);
        throw error; 
    }
  }

  useEffect(() => {
    try {
      setTrinkenDaten(heute, liter, becher);  
    } catch (error){
      window.alert("speichern hat nicht funktioniert");
    }
  },[becher])

  */

  return (
    <div className="card">
      <div className="trinken-mitte">
        <button onClick={() => increaseLiter()}>+</button>
        <h2>{becher} Becher</h2>
        <button onClick={() => decreaseLiter()}>-</button>
      </div>
      <div className="trinken-bottom">
        <p>Insgesamt {liter} Liter</p>
      </div>
    </div>
  )
}
