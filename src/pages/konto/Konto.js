import React, { useState } from 'react'
import './Konto.css';


export default function Konto() {
  const [name, setName] = useState("Gast");
  const [größe, setGröße] = useState(177);
  const [alter, setAlter] = useState(23);
  const [geschlecht, setGeschlecht] = useState("Frau");
  const [bmi, setBmi] = useState(26);
  const [gewicht, setGewicht] = useState(65);

  const [bearbeitenIsClicked, setBearbeitenIsClicked] = useState(false);




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
              <button onClick={() => setBearbeitenIsClicked(false)}>Speichern</button>
            </div>
          </div>
        </>
      )}
      
    </div>
  )
}

