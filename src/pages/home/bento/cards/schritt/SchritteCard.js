import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";

import '../card.css';
import './Schritte.css';

import SchritteFetch from './SchritteFetch';
import KontoFetch from '../../../../konto/KontoFetch';

export default function SchritteCard() {
  const heute = new Date().toLocaleDateString();
  const schritteFetch = new SchritteFetch();
  const kontoFetch = new KontoFetch();
    
  const [btnÖffnenKlick, setBtnÖffnenKlick] = useState(false);
  
  const [schritte, setSchritte] = useState(0);
  const [schrittlänge, setSchrittlänge] = useState(71);
  const [meter, setMeter] = useState(0);
  const [km, setKm] = useState(0);
  const [meterGroßgenug, setMeterGroßgenug] = useState(false);

  // GET ALLGEMEINE DATEN
  const { allgemein, allgemeinError, isLoadingAllgemein } = useQuery(["daten", heute], () => kontoFetch.getAllgemeineDaten(), {refetchOnWindowFocus: false});
  const [körpergröße, setKörpergröße] = useState(177);
  const [geschlecht, setGeschlecht] = useState("Frau");
  useEffect(() => {
    if (allgemein) {
      setKörpergröße(allgemein.größe || 177);
      setGeschlecht(allgemein.geschlecht || "Frau");
    }
  }, [allgemein]); 

  //FETCH
  const { data, error, isLoading } = useQuery(["daten", heute], () => schritteFetch.getSchritteDaten(heute), {refetchOnWindowFocus: false});
  useEffect(() => {
    if (data) {
      setSchritte(data.schritte || 0);
      setSchrittlänge(data.meter || 0);
    }
  }, [data]); 

  // Schrittlänge berechnen
  useEffect(() => {
    if (geschlecht === "Frau") {
      setSchrittlänge(0.413 * (körpergröße/100));
    }
    else{
      setSchrittlänge(0.415 * (körpergröße/100));
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

  async function setDaten() {
    setBtnÖffnenKlick(btn => !btn);
    try {
      await schritteFetch.setSchritteDaten(heute, schritte, meter);
    } catch (error) {
      window.alert("Speichern hat nicht funktioniert");
    }
  }

  if (isLoading || isLoadingAllgemein) return <p>Loading...</p>;
  
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
            <button onClick={() => setDaten()}>🗸</button>
          </div>
        </>
      )}
    </div>
  )
}
