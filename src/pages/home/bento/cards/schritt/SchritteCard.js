import React, { useEffect, useState } from 'react';

import '../card.css';
import './Schritte.css';

export default function SchritteCard() {
  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  
  const [schritte, setSchritte] = useState(0);
  const [schrittlänge, setSchrittlänge] = useState(71);
  const [meter, setMeter] = useState(0);
  const [km, setKm] = useState(0);
  const [meterGroßgenug, setMeterGroßgenug] = useState(false);

  // GET
  const [körpergröße, setKörpergröße] = useState(1.77);
  const [geschlecht, setGeschlecht] = useState("weiblich");

  // Schrittlänge berechnen
  useEffect(() => {
    if (geschlecht === "weiblich") {
      setSchrittlänge(0.413 * körpergröße);
    }
    else{
      setSchrittlänge(0.415 * körpergröße);
    }
  },[])

  useEffect(() => {
    setMeter((schrittlänge * schritte).toFixed());
  },[schritte])
  
  useEffect(() => {
    if (meter > 1000) {
      setMeterGroßgenug(true);
      setKm((meter / 1000).toFixed(2));
    }
    if (meter < 1000) {
      setMeterGroßgenug(false);
    }
  },[meter])

  
  return (
    <div className="card sport-layout">
      {!btnÖffnenKlick && (
        <>
        <div className="schritte-top">
            <p>Heute gelaufen</p>
        </div>
        <div className="schritte-mitte">
            <p><b>{schritte}</b> Schritte</p>
            {!meterGroßgenug && (<p><b>{meter}</b> Meter</p>)}
            {meterGroßgenug && (<p><b>{km}</b> Kilometer</p>)}

        </div>
        <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>+</button>
        </div>
        </>
      )}

      {btnÖffnenKlick && (
        <>
        <div className="schritte-top">
            <p>wie viele Schritte bist du heute gelaufen?</p>
        </div>
        <div className="schritte-mitte">
          <input 
            type="number" 
            name="schritteHeute" 
            id="input" 
            value={schritte} 
            onChange={(event) => setSchritte(event.target.value)} 
          /> 
        </div>
        <div className="schritte-bottom">
          <button onClick={() => setBtnÖffnenKlick(btn => !btn)}>🗸</button>
        </div>
        </>
      )}
        
    </div>
  )
}
