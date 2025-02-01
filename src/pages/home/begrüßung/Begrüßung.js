import React, { useEffect, useState } from 'react'

import './Begrüßung.css'

export default function Begrüßung() {

  const [uhrzeit, setUhrzeit] = useState("00:00");
  const [datum, setDatum] = useState("");
  const [tag, setTag] = useState("Montag");
  const [begrüßung, setBegrüßung] = useState("Hallo");

  // GET
  const [benutzerName, setBenutzerName] = useState("Gast");

  // ---- Überlegen ob ich Uhrzeit und Datum anzeigen lassen will
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setUhrzeit(new Date().toLocaleTimeString());
    }, 100000); 

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const date = new Date().toLocaleDateString();
    setDatum(date);
  },[])
  */

  useEffect(() => {
    const jetzt = new Date();
    const stunde = jetzt.getHours();     
    
    if (stunde >= 5 && stunde < 12) {
      setBegrüßung(`${benutzerName}, dein Tag wartet auf dich! Lass uns loslegen!`); 
    } else if (stunde >= 12 && stunde < 18) {
      setBegrüßung(`Guten Mittag, ${benutzerName}! Was steht heute noch an?`); 
    } else if (stunde >= 18 && stunde < 22) {
      setBegrüßung(`${benutzerName}, der Abend gehört dir. Genieß ihn!`); 
    } else {
      setBegrüßung(`Schlaf gut, ${benutzerName}. Morgen wartet ein neuer Tag auf dich!`); 
    }
  },[])

 
 
  return (
    <div className="begrusung-layout">
      <h1>{begrüßung}</h1>
    </div>
  )
}
