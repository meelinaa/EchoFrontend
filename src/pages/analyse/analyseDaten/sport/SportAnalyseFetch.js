import { parse, format } from "date-fns";

class SportAnalyseFetch {
    
    async getTageAnalyse(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/sport/analyse/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async getDurchschnittTraining(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/sport/analyse/durchschnittTraining/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten TRAINING: ${response.statusText}`);
        }
        return await response.json();
    }

}

export default SportAnalyseFetch;