import React, { useEffect, useState } from 'react';

import '../card.css';
import './Trinken.css';
import TrinkenFetch from './TrinkenFetch';

export default function TrinkenCard() {
  const heute = new Date().toLocaleDateString();
  const trinkenFetch = new TrinkenFetch();
  const LITERINBECHER = 0.240;

  const [becher, setBecher] = useState(0);
  const [liter, setLiter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await trinkenFetch.getTrinkenDaten(heute);
        setBecher(data.becher || 0);
        setLiter(data.liter || 0); 
      } catch (error) {
        console.error("Fehler beim Abrufen der Trinken-Daten:", error); 
      }
    };
  
    fetchData(); 
  }, [heute]); 


// BTN ACTION
  function increaseLiter() {
    setBecher(prevBecher => prevBecher + 1);
    saveData();
  }

  function decreaseLiter() {
    setBecher(prevBecher => (prevBecher > 0 ? prevBecher - 1 : 0));
  }

  useEffect(() => {
    setLiter(becher * LITERINBECHER);
  }, [becher]);

//SET DATA
  async function saveData() {
    try {
      trinkenFetch.setTrinkenDaten(heute, liter, becher);  
    } catch (error){
      window.alert("speichern hat nicht funktioniert");
    }
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="card">
      <div className="trinken-mitte">
        <button onClick={increaseLiter}>+</button>
        <h2>{becher} Becher</h2>
        <button onClick={decreaseLiter}>-</button>
      </div>
      <div className="trinken-bottom">
        <p>Insgesamt {liter} Liter</p>
      </div>
    </div>
  );
}
