import React, { useEffect, useState } from 'react'

import './Konto.css';

import KontoFetch from './KontoFetch';

export default function Konto() {
  const kontoFetch = new KontoFetch();

  const [name, setName] = useState("Gast");
  const [größe, setGröße] = useState(177);
  const [alter, setAlter] = useState(23);
  const [geschlecht, setGeschlecht] = useState("Frau");
  const [bmi, setBmi] = useState(26);
  const [gewicht, setGewicht] = useState(65);

  const [bearbeitenIsClicked, setBearbeitenIsClicked] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await kontoFetch.getAllgemeineDaten();
          setName(data.name || "Gast");
          setGröße(data.größe || 177);
          setGewicht(data.gewicht || 65);
          setAlter(data.alter || 23);
          setGeschlecht(data.geschlecht || "Frau");
          setBmi(data.bmi || 27);
        } catch (error) {
          console.error("Fehler beim Abrufen der Schlaf-Daten:", error); 
        }
      };
    
      fetchData(); 
    }, []); 

  async function setDaten() {
    setBearbeitenIsClicked(false);
    try {
      await kontoFetch.setAllgemeineDaten(name, größe, alter, geschlecht, bmi, gewicht);
    } catch (error) {
      window.alert("Speichern hat nicht funktioniert");
    }
  }

  useEffect(() => {
    setBmi(((gewicht/größe)*100).toFixed());
  },[größe || gewicht])

  //if (isLoading) return <p>Loading...</p>;
  //if (error) return <p>Fehler: {error.message}</p>;

  return (
    <div className="konto-layout">
      <div className="konto-top">
        <h1>Hallo {name}</h1>
      </div>
      {!bearbeitenIsClicked && (
        <>
        <div className="konto-mitte">
          <table className='info-tabelle'>
            <thead>
              <tr>
                <th>Info</th>
                <th>Deine Angaben</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Alter: </td>
                <td>{alter}</td>
              </tr>
              <tr>
                <td>Größe: </td>
                <td>{größe} cm</td>
              </tr>
              <tr>
                <td>Gewicht: </td>
                <td>{gewicht} kg</td>
              </tr>
              <tr>
                <td>Bmi: </td>
                <td>{bmi}</td>
              </tr>
              <tr>
                <td>Geschlecht: </td>
                <td>{geschlecht}</td>
              </tr>
            </tbody>
          </table>
        <div className="bearbeiten-btn">
          <button onClick={() => setBearbeitenIsClicked(true)}>Bearbeiten</button>
        </div>
      </div>
        </>
      )}

      {bearbeitenIsClicked && (
        <>
          <div className="konto-mitte">
            <form action="submit" id='bearbeitenForm'>
              <label htmlFor="name">Name: <input type="text" name="name" id="name" value={name} onChange={(e) => setName((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1))}/></label>
              <label htmlFor="alter">Alter: <input type="number" name="alter" id="alter" value={alter} onChange={(e) => setAlter(e.target.value)}/></label>
              <label htmlFor="größe">Größe: <input type="number" name="größe" id="größe" value={größe} onChange={(e) => setGröße(e.target.value)}/></label>
              <label htmlFor="gewicht">Gewicht: <input type="number" name="gewicht" id="gewicht" value={gewicht} onChange={(e) => setGewicht(e.target.value)}/></label>
              <label htmlFor="geschlecht" >Geschlecht: 
                <select name="geschlecht" id="geschlecht" value={geschlecht} onChange={(e) => setGeschlecht(e.target.value)}>
                  <option value="Frau">Frau</option>
                  <option value="Mann">Mann</option>
                  <option value="Divers">Divers</option>
                </select>
              </label>
            </form>
            <div className="bearbeiten-btn">
              <button onClick={() => setDaten()}>Speichern</button>
            </div>
          </div>
        </>
      )}
      
    </div>
  )
}

