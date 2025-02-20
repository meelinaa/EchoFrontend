import { parse, format } from "date-fns";

class SchritteAnalyseFetch {
    
    async getTageAnalyse(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schritte/analyse/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    //Durchschnitt
    async getDurchschnittSchritte(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schritte/analyse/durchschnittSchritte/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async getDurchschnittMeter(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schritte/analyse/durchschnittMeter/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }
}

export default SchritteAnalyseFetch;