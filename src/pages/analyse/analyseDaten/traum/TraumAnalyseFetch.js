import { parse, format } from "date-fns";

class TraumAnalyseFetch {
    
    async getTageAnalyse(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/träume/analyse/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async getDurchschnittBewertung(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/träume/analyse/durchschnittBewertung/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

}

export default TraumAnalyseFetch;