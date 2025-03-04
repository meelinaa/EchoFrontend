import { parse, format } from "date-fns";

class TrinkenAnalyseFetch {
    
    async getTageAnalyse(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/trinken/analyse/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async getDurchschnittLiter(heute, anzahlTage){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/trinken/analyse/durchschnittLiter/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async getDurchschnittBecher(heute, anzahlTage){ 
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/trinken/analyse/durchschnittBecher/${formattedDate}/${anzahlTage}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

}

export default TrinkenAnalyseFetch;