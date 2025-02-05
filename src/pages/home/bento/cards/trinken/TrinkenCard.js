import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";

import '../card.css';
import './Trinken.css';
import TrinkenFetch from './TrinkenFetch';

export default function TrinkenCard() {
  const heute = new Date().toLocaleDateString();
  const trinkenFetch = new TrinkenFetch();
  const LITERINBECHER = 0.240;

  const [becher, setBecher] = useState(0);
  const [liter, setLiter] = useState(0);

  const { data, error, isLoading } = useQuery(["daten", heute], () => trinkenFetch.getTrinkenDaten(heute), {refetchOnWindowFocus: false});

  useEffect(() => {
    if (data) {
      setBecher(data.becher || 0);
      setLiter(data.liter || 0);
    }
  }, [data]); 

// BTN ACTION
  function increaseLiter() {
    setBecher(prevBecher => prevBecher + 1);
  }

  function decreaseLiter() {
    setBecher(prevBecher => (prevBecher > 0 ? prevBecher - 1 : 0));
  }

  useEffect(() => {
    setLiter(becher * LITERINBECHER);
  }, [becher]);

//SET DATA
  useEffect(() => {
    try {
      trinkenFetch.setTrinkenDaten(heute, liter, becher);  
    } catch (error){
      window.alert("speichern hat nicht funktioniert");
    }
  },[becher])

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Fehler: {error.message}</p>;

  return (
    <div className="card">
      <div className="trinken-mitte">
        <button onClick={increaseLiter}>+</button>
        <h2>{becher} Becher</h2>
        <button onClick={decreaseLiter}>-</button>
      </div>
      <div className="trinken-bottom">
        <p>Insgesamt {liter.toFixed(2)} Liter</p>
      </div>
    </div>
  );
}
