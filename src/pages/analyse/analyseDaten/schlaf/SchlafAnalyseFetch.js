import { parse, format } from "date-fns";

class SchlafAnalyseFetch {
    
    async getTageAnalyse(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schlaf/analyse/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    //Durchschnitt
    async getDurchschnittSchlaf(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schritte/analyse/durchschnitt/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

}

export default SchlafAnalyseFetch;