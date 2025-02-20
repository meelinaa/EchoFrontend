import React, { useEffect, useState } from 'react'
import AnalyseFetch from '../AnalyseFetch'
import TraumAnalyseFetch from './TraumAnalyseFetch';

export default function TraumAnalyse() {
    const heute = new Date().toLocaleDateString();

    const analyseFetch = new AnalyseFetch();
    const info = "träume";

    const traumAnalyseFetch = new TraumAnalyseFetch();
    const [durchschnittBewertung, setDurchschnittBewertung] = useState(0);

    //Alle Einträge
    const [daten, setDaten] = useState([]);
    //Alle Tage auch ohne Einträge für Wochen-/Monatsübersicht
    const [letzteTageDaten, setLetzteTageDaten] = useState([]);
    
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [tage, setTage] = useState(7);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const alleDaten = await analyseFetch.getAlles(info);
                const sortierteDaten = alleDaten.sort((a, b) => new Date(a.datum) - new Date(b.datum));
                setDaten(sortierteDaten); 

                const letzeTage = await traumAnalyseFetch.getTageAnalyse(heute, tage);
                setLetzteTageDaten(letzeTage);

                const bewertung = await traumAnalyseFetch.getDurchschnittBewertung(heute, tage);
                setDurchschnittBewertung(bewertung);
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
                setError(error);
            } finally {
                setIsLoading(false); 
            }
        }
        fetchData();
    }, [tage]);

    const convertDatum = (datum) => {
        const datumConvert = new Date(datum);
        return new Intl.DateTimeFormat().format(datumConvert);
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Fehler: {error.message}</p>;
    if (!daten || daten.length === 0) return <p>Keine Daten verfügbar</p>;

    return (
        <div className="analyse">
            <div className="analyse-top">
                <h2  onClick={() => setIsOpen(state => !state)}>Träume</h2>
            </div>
            {isOpen && (<div className="analyse-mitte">
                <label>Wie viele Tage?
                    <select name="tage" id="tage" value={tage} onChange={(e) => setTage(e.target.value)}>
                        <option value="7">7 Tage</option>
                        <option value="14">14 Tage</option>
                        <option value="30">30 Tage</option>
                    </select>
                </label>
                <h3>{tage} Tage Übersicht</h3>
                <p>In den letzen <b>{tage}</b> Tagen war deine durchschnittliche Bewertung: <b>{durchschnittBewertung}</b>.</p>
                <table className='übersicht-tabelle'>
                    <thead>
                        <tr>
                            {letzteTageDaten.map((tag, index) => (
                                <th key={index}>
                                    {convertDatum(tag.datum)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {letzteTageDaten.map((tag, index) => (
                                <td key={index}>
                                    {tag.bewertung}<br/>
                                    {tag.traum}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
    
                <h3>Alle Einträge</h3>
                <table className='alle-einträge-tabelle'>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Bewertung</th>
                            <th>Traum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daten.map((eintrag) => (
                            <tr key={eintrag.id}>
                                <td>{convertDatum(eintrag.datum)}</td>
                                <td>{eintrag.bewertung}</td>
                                <td>{eintrag.traum}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    
                
            </div>)}
        </div>
    )
}


