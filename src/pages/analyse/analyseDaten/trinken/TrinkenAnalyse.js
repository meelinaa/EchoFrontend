import React, { useEffect, useState } from 'react'
import AnalyseFetch from '../AnalyseFetch'

import '../../DatenAnalyse.css';


export default function TrinkenAnalyse() {

    const analyseFetch = new AnalyseFetch();
    const info = "trinken";

    const [isOpen, setIsOpen] = useState(false);

    const [daten, setDaten] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await analyseFetch.getAlles(info);
                const sortierteDaten = response.sort((a, b) => new Date(a.datum) - new Date(b.datum));
                setDaten(sortierteDaten); 
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
                setError(error);
            } finally {
                setIsLoading(false); 
            }
        }
        fetchData();
    }, []);

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
            Trinken
        </div>
        <div className="analyse-mitte">
            <table onClick={() => setIsOpen(state => !state) }>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Becher</th>
                        <th>Liter</th>
                    </tr>
                </thead>
                <tbody>
                    {isOpen && daten.map((eintrag) => (
                        <tr key={eintrag.id}>
                            <td>{convertDatum(eintrag.datum)}</td>
                            <td>{eintrag.becher ?? "0"}</td>
                            <td>{eintrag.liter}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}


