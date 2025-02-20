import React, { useEffect, useState } from 'react'
import AnalyseFetch from '../AnalyseFetch'
import SchritteAnalyseFetch from './SchritteAnalyseFetch';

export default function SchritteAnalyse() {
    const heute = new Date().toLocaleDateString();

    const analyseFetch = new AnalyseFetch();
    const info = "schritte";
    //Alle Einträge
    const [daten, setDaten] = useState([]);

    const schritteAnalyseFetch = new SchritteAnalyseFetch();
    const [durchschnittSchritte, setDurchschnittSchritte] = useState(0);
    const [durchschnittMeter, setDurchschnittMeter] = useState(0);
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

                const letzeTage = await schritteAnalyseFetch.getTageAnalyse(heute, tage);
                setLetzteTageDaten(letzeTage);

                const schritte = await schritteAnalyseFetch.getDurchschnittSchritte(heute, tage);
                setDurchschnittSchritte(schritte);

                const meter = await schritteAnalyseFetch.getDurchschnittMeter(heute, tage);
                setDurchschnittMeter(meter);
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
                <h2  onClick={() => setIsOpen(state => !state)}>Schritte</h2>
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
                <p>Du bist in den letzen <b>{tage}</b> Tagen im Schnitt <b>{durchschnittSchritte}</b> Schritte bzw. <b>{durchschnittMeter.toFixed(0)}</b> Meter zurückgelegt.</p>
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
                                    {tag.schritte} Schritte<br />
                                    {tag.meter} Meter
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
                            <th>Schritte</th>
                            <th>Meter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daten.map((eintrag) => (
                            <tr key={eintrag.id}>
                                <td>{convertDatum(eintrag.datum)}</td>
                                <td>{eintrag.schritte || "0"}</td>
                                <td>{eintrag.meter || "0"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    
                
            </div>)}
        </div>
    )
}


